export const port = process.env.NODE_PORT || 3000;
export const env= process.env.NODE_ENV || 'production';

export const bcryptSaltFactor = 11;
export const jwtSecret = new Buffer('RSd7w8utAWSjmJ8QOGt2OayydAqoUmL3sBTY7PqCVqOqaNn3RH38lMlNdDv5zoTQZH8GrR80YNFpQ3jKnDRMPDuwqaODObyyX0LS', 'base64').toString('utf8');
