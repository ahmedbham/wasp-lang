class StorageService {
    constructor(blobServiceClient) {
        this.blobServiceClient = blobServiceClient;
    }

    async upload(containerName, blobName, data) {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        await containerClient.createIfNotExists();
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(data, data.length);
        return `Blob ${blobName} uploaded to container ${containerName}`;
    }

    async download(containerName, blobName) {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const downloadBlockBlobResponse = await blockBlobClient.download(0);
        return await this.streamToString(downloadBlockBlobResponse.readableStreamBody);
    }

    async streamToString(readableStream) {
        return new Promise((resolve, reject) => {
            const chunks = [];
            readableStream.on("data", (data) => {
                chunks.push(data.toString());
            });
            readableStream.on("end", () => {
                resolve(chunks.join(""));
            });
            readableStream.on("error", reject);
        });
    }
}

export default StorageService;