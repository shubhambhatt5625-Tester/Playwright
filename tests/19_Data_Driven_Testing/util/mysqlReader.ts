import mysql from 'mysql2/promise';
import { LoginDataRow } from './testData';

export async function readMySQL(): Promise<LoginDataRow[]> {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT || 3306),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });

    try {
        const [rows] = await connection.query(process.env.MYSQL_QUERY || `
            SELECT description, username, password, expectedURL
            FROM login_test_data
        `);
        return rows as LoginDataRow[];
    } finally {
        await connection.end();
    }
}
