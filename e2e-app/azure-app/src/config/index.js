module.exports = {
    azure: {
        appService: {
            url: process.env.AZURE_APP_SERVICE_URL,
            key: process.env.AZURE_APP_SERVICE_KEY,
        },
        sqlDatabase: {
            connectionString: process.env.AZURE_SQL_CONNECTION_STRING,
        },
        blobStorage: {
            accountName: process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME,
            accountKey: process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY,
            containerName: process.env.AZURE_BLOB_STORAGE_CONTAINER_NAME,
        },
        keyVault: {
            url: process.env.AZURE_KEY_VAULT_URL,
            clientId: process.env.AZURE_KEY_VAULT_CLIENT_ID,
            clientSecret: process.env.AZURE_KEY_VAULT_CLIENT_SECRET,
        },
        activeDirectory: {
            tenantId: process.env.AZURE_AD_TENANT_ID,
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
        },
    },
};