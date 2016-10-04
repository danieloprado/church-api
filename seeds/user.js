const bcrypt = require('../server/services/bcrypt');

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
    password: 'senha@123'
  };

  return knex.select(['id', 'password']).from('User').where({ email: adminUser.email }).then(users => {
    if (users.length > 0) return users[0].id;

    return bcrypt.hash(adminUser.password).then(password => {
      adminUser.password = password;
      return knex.insert(adminUser).returning('id').into('User');
    }).then(res => res[0]);

  }).then(userId => {
    adminUser.id = userId;
    return adminUser;
  });
}

function createChurches(knex) {
  const churches = [{ name: 'ICB Sorocaba', slug: 'icb-sorocaba' }];

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
      roles: 'sysAdmin'
    };
  });

  return knex.select('churchId').from('ChurchUser').where({ userId: user.id }).then(result => {
    const rowsToIntert = data.filter(d => !result.some(c => c.churchId === d.churchId));

    if (rowsToIntert.length === 0) return;
    return knex.insert(rowsToIntert).into('ChurchUser');
  });
}
