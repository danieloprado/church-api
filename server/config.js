module.exports = {
  port: process.env.NODE_PORT || 3000,
  env: process.env.NODE_ENV || 'production',
  bcryptSaltFactor: 11,
  auth: {
    timeout: 15,
    secret: new Buffer('RSd7w8utAWSjmJ8QOGt2OayydAqoUmL3sBTY7PqCVqOqaNn3RH38lMlNdDv5zoTQZH8GrR80YNFpQ3jKnDRMPDuwqaODObyyX0LS', 'base64').toString('utf8')
  }
};
