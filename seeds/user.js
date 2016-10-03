exports.seed = function(knex) {
  'use strict';
  let adminUser;

  return createAdminUser(knex).then(user => {
    adminUser = user;
    return createChurches(knex);
  }).then(churches => {
    return grantUserAcess(knex, adminUser, churches);
  });
};

function createAdminUser(knex) {
  const adminUser = {
    firstName: 'Daniel',
    lastName: 'Prado',
    email: 'danielprado.ad@gmail.com',
    password: '1234'
  };

  return knex.select('id').from('User').where({ email: adminUser.email }).then(users => {
    if (users.length > 0) return users[0].id;
    return knex.insert(adminUser).returning('id').into('User').then(res => res[0]);
  }).then(userId => {
    adminUser.id = userId;
    return adminUser;
  });
}

function createChurches(knex) {
  const churches = [{ name: 'ICB Sorocaba' }];

  return knex.count('id as count').from('Church').then(result => {
    if (result[0].count > 0) return;
    return knex.insert(churches).into('Church');
  }).then(() => {
    return knex.select('*').from('Church');
  });
}

function grantUserAcess(knex, user, churches) {
  const data = churches.map(church => {
    return {
      userId: user.id,
      churchId: church.id,
      role: 'sysAdmin'
    };
  });

  return knex.select('churchId').from('ChurchUser').where({ userId: user.id }).then(result => {
    const rowsToIntert = data.filter(d => !result.some(c => c.churchId === d.churchId));

    if (rowsToIntert.length === 0) return;
    return knex.insert(rowsToIntert).into('ChurchUser');
  });
}
