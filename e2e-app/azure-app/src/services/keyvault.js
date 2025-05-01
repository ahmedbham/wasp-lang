class KeyVaultService {
    constructor(keyVaultClient) {
        this.keyVaultClient = keyVaultClient;
    }

    async getSecret(secretName) {
        try {
            const secret = await this.keyVaultClient.getSecret(secretName);
            return secret.value;
        } catch (error) {
            throw new Error(`Error retrieving secret ${secretName}: ${error.message}`);
        }
    }

    async setSecret(secretName, secretValue) {
        try {
            await this.keyVaultClient.setSecret(secretName, secretValue);
        } catch (error) {
            throw new Error(`Error setting secret ${secretName}: ${error.message}`);
        }
    }
}

export default KeyVaultService;