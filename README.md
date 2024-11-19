# Anthony's Personal Finance App

This is a comprehensive web application designed to help manage my **personal finances**. The app provides real-time exchange rate conversion, expense tracking, and tools for calculating credit card installment payments. It leverages serverless technologies to deliver a responsive and efficient user experience.

## Main features

- 💰 **Real-time Exchange Rate**: Fetches and displays the current USD to COP exchange rate using an external API. The exchange rate is cached to optimize performance and reduce API calls.
- 📊 **Expense Management**: Calculates and displays total expenses, including subscriptions, utilities, rent, and other recurring payments. The amounts are automatically converted into Colombian Pesos (COP) based on the latest exchange rate.
- 🧮 **Installment and Interest Calculator**: Provides a tool for users to calculate the total cost of a credit card purchase. It shows the monthly interest rate, total interest paid, installment amount, and final payment. Users can input the purchase amount, number of installments, and optionally, an effective annual interest rate (E.A.). If no rate is provided, a default rate is used as indicated in the input placeholder.
- 🌐 **Seamless Integration**: The frontend hosted on GitHub Pages interacts with the backend API deployed on Vercel, ensuring a smooth and responsive user experience.
- 📦 **Efficient Caching**: Utilizes Redis via Upstash to cache the exchange rate for 24 hours, reducing redundant API calls and improving response times.

## Technologies used

This app is built using the following technologies:

- **HTML5**: For structuring the content of the page.
- **CSS3**: For design, layout, and responsiveness to adapt to different devices.
- **JavaScript**: For frontend functionalities, event handling, and interacting with the API.
- **Node.js**: For setting up the backend server to handle API requests.
    - **Express.js**: For creating and managing the server and API routes.
    - **Axios**: For making HTTP requests to external APIs.
    - **dotenv**: For securely managing environment variables.
- **Redis (via ioredis and @upstash/redis)**: For caching the exchange rate to reduce API calls and improve performance using a serverless Redis database.
- **Vercel**: For deploying the backend API and managing serverless functions.
- **GitHub Pages**: For hosting the frontend of the application.

## Project structure

```
personalFinancesApp/
├── api/
│   ├── getDollarRate.js
│   └── server.js
├── assets/
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── .env.example
├── .gitignore
├── index.html
├── LICENSE.md
├── package-lock.json
├── package.json
├── README.md
└── vercel.json
```

## Explanation

- **api/getDollarRate.js**: Contains logic to fetch the current USD to COP exchange rate from CurrencyFreaks and caches it in Redis to optimize performance and reduce API usage.
- **api/server.js**: Sets up an Express server with a `/api/dollar-rate` endpoint, configured with CORS to allow access from GitHub Pages, and serves the exchange rate data.
- **assets/scripts/main.js**: Manages the frontend logic, fetching the exchange rate from the Vercel API, handling event listeners for the credit card calculator, and updating displayed data.
- **assets/styles/main.css**: Defines the visual layout, color scheme, and responsive design for the application to ensure it looks good on different devices.
- **index.html**: The main entry point of the application, containing sections for displaying exchange rates, recurring payments, and a form for credit card payment calculations.
- **.env.example**: Provides sample environment variables for sensitive information like API keys and Redis credentials, ensuring they remain secure and out of version control.
- **.gitignore**: Specifies files and directories to exclude from version control, such as `node_modules`, environment files, and temporary system files.
- **LICENSE.md**: Includes the GNU General Public License v3.0, which allows others to use, modify, and distribute the software under the same terms.
- **README.md**: Documentation detailing the project's features, setup instructions, and usage guidelines for users and contributors.
- **package-lock.json** & **package.json**: Handle project dependencies, scripts, and metadata for managing the Node.js environment and running the application.
- **vercel.json**: Configures Vercel deployment, specifying routes to direct API requests to the Express server, ensuring the backend works seamlessly with the frontend.

## Installation

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/n48dev/personalFinancesApp.git
cd personalFinancesApp
```

### 2. Install dependencies

Once inside the project directory, run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory based on the `.env.example` file:

```bash
CURRENCYFREAKS_APIKEY=your_api_key_here
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

*Make sure to fill in these values with the correct credentials before running the server.*

### 4. Update server.js for CORS

To ensure your GitHub Pages site can access your Vercel API, update the allowed origins in `api/server.js`:

```js
const allowedOrigins = ['https://your-user-name.github.io', 'http://127.0.0.1:5500'];
app.use(cors({
  origin: allowedOrigins
}));
```

Replace 'your-user-name' with your actual GitHub username. This allows both your GitHub Pages site and local development environment to access the API.

### 5. Run the server locally

To start the Express server locally, run:

```bash
node api/server.js
```

The server will run at `http://localhost:3000`.

### 6. Access the application

- **Frontend**: Open your browser and access your page hosted on GitHub Pages.
- **Backend API**: You can test the endpoint directly in your browser:

```
http://localhost:3000/api/dollar-rate
```

### 7. Deploy to Vercel

If you want to deploy the application to Vercel, make sure you have the Vercel CLI installed, then run:

```bash
vercel --prod
```

*This will deploy your application using the configuration in vercel.json.*

**Your application should now be running both locally and in production. 🚀**

## How to use the app

1. **Expense management**: Edit the sampleData.js file to add your own expenses and categories.
2. **Installment calculator**:
- Enter the purchase amount.
- Enter the desired number of installments.
- Enter the effective annual interest rate (E.A.) if known; if not, the default rate will be applied.
- You will receive a breakdown of payments and installments.

## Future enhancements

- 💾 **Data persistence**: Save expense data in localStorage to prevent loss of information.
- 📱 **Responsive design**: Adapt the interface for mobile devices.
- 📊 **Charts**: Include visual charts for better insight into expenses and savings.
- 🔒 **Authentication**: Add a basic user system so that each person can manage their own financial data.

## License

This project is licensed under the **GNU General Public License v3.0**.

You are free to:
- Use, study, modify, and distribute the software as long as any distributed versions (modified or unmodified) are also licensed under the GNU GPL v3.0.

For the full license text, please refer to the [LICENSE.md](LICENSE.md) file included in this repository.

## Contact

If you have any questions, suggestions, or just want to get in touch with me, you can do so through:

- **Email**: contact@n48.dev
- **LinkedIn**: [in/n48dev](https://www.linkedin.com/in/n48dev/)

## Acknowledgements

Thanks to everyone who has supported and motivated me to keep learning and exploring. Special thanks to the open-source community for providing the tools and resources to build this app.