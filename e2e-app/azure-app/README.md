# Azure App

This project is an application that utilizes various Azure services to provide a robust solution for managing data and authentication. Below are the details regarding the setup and usage of the application.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#usage)
5. [Services](#services)
6. [License](#license)

## Prerequisites

- Node.js (version 14 or higher)
- Azure account with access to the following services:
  - Azure App Service
  - Azure SQL Database
  - Azure Blob Storage
  - Azure Key Vault
  - Azure Active Directory

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd azure-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and fill in the required Azure service credentials.

## Configuration

Ensure that the configuration settings in `src/config/index.js` are set correctly to match your Azure service credentials and connection strings.

## Usage

To start the application, run:
```
node src/app.js
```

## Services

This application integrates with the following Azure services:

- **Azure SQL Database**: Managed through the `DatabaseService` class located in `src/services/database.js`.
- **Azure Blob Storage**: Managed through the `StorageService` class located in `src/services/storage.js`.
- **Azure Key Vault**: Managed through the `KeyVaultService` class located in `src/services/keyvault.js`.
- **Azure Active Directory**: Managed through the `AuthService` class located in `src/services/auth.js`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.