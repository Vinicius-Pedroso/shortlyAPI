import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {Pool} = pkg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production" && {
      ssl: {
        rejectUnauthorized: false,
      },
    }),
};

export const connectionDB = new Pool(configDatabase);
