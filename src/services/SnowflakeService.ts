/* Service for interacting with Snowflake */

// SnowflakeService.ts

// import { Snowflake } from 'snowflake-sdk';
const Snowflake = require('snowflake-sdk');


export class SnowflakeService {
    private connection: any;

    constructor() {
        // Initialize Snowflake connection
        this.connection = new Snowflake({
            account: process.env.SNOWFLAKE_ACCOUNT,
            username: process.env.SNOWFLAKE_USERNAME,
            password: process.env.SNOWFLAKE_PASSWORD,
            warehouse: process.env.SNOWFLAKE_WAREHOUSE,
            database: process.env.SNOWFLAKE_DATABASE,
            schema: process.env.SNOWFLAKE_SCHEMA
        });
    }

    async executeQuery(sqlQuery: string): Promise<any[]> {
        try {
            await this.connection.connect();
            const statement = await this.connection.execute({
                sqlText: sqlQuery,
                fetchAsString: [Snowflake.DECIMAL]
            });

            const rows = [];
            while (statement.nextResult()) {
                rows.push(statement.getRows());
            }

            return rows;
        } catch (error) {
            throw new Error(`Error executing Snowflake query: ${error}`);
        } finally {
            this.connection.destroy();
        }
    }
}
