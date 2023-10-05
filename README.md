# Bitcoin Conversion API

## Overview

The Bitcoin Conversion API is a Node.js application that allows users to convert cryptocurrency values into fiat currency values using the BitcoinAverage API. It provides a simple web interface for users to input their conversion parameters and receive real-time conversion results.

## Features

- User-friendly web interface for inputting conversion parameters.
- Converts cryptocurrency to fiat currency using the BitcoinAverage API.
- Displays the converted result to the user.

## Dependencies

This application relies on the following Node.js packages:

- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [Body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request data.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.

## Setup

Follow these steps to set up and run the application:

1. Clone or download this repository to your local machine.

2. Install the required Node.js packages using npm:

   ```bash
   npm install express body-parser axios
   ```

3. Replace "API_KEY" with your actual BitcoinAverage API key in the code.

## Usage

1. Start the application:

```bash
node index.js
```

The server will start on port 3000 by default. You can change the port by modifying the PORT variable in the code.

2. Open a web browser and navigate to http://localhost:3000.

3. You will see a form where you can input the following parameters:

- amount: The amount of cryptocurrency you want to convert. It has the placeholder 'Quantity'.
- crypto: The cryptocurrency you want to convert.
- fiat: The fiat currency you want to convert to.

4. Click the "Check" button to submit.

5. The converted result will be displayed on the web page.

## Troubleshooting

- If you encounter a 403 error, please verify the following:
- The API key is correctly set in the code.
- Your server's IP is not blocked by the BitcoinAverage server.
- You are not exceeding any rate limits imposed by the API.
  If the issue persists, consider reaching out to the BitcoinAverage API support or community for assistance.
