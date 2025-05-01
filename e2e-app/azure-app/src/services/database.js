class DatabaseService {
    constructor(connectionString) {
        this.connectionString = connectionString;
        this.sql = require('mssql'); // Assuming mssql package is used for Azure SQL Database
    }

    async connect() {
        try {
            await this.sql.connect(this.connectionString);
            console.log('Connected to Azure SQL Database');
        } catch (err) {
            console.error('Database connection failed:', err);
            throw err;
        }
    }

    async query(queryString) {
        try {
            const result = await this.sql.query(queryString);
            return result.recordset;
        } catch (err) {
            console.error('Query execution failed:', err);
            throw err;
        }
    }
}

module.exports = DatabaseService;