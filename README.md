# Anthony's Personal Finance App

This is a simple web application designed to help manage **personal finances**. The app currently provides functionality for tracking expenses and calculating credit card installment payments.

## Main features

- 📊 **Expense management**: Displays a table with total expenses, including subscriptions, and converts amounts into Colombian Pesos (COP) based on the conversion rates set in `sampleData.js`.
- 🧮 **Installment and interest calculator**: Allows users to calculate the total cost of a credit card purchase, showing the monthly interest, total interest paid, installment amount, and final payment. Users can input the purchase amount, number of installments, and optionally, an effective annual interest rate (E.A.). If no rate is provided, a default rate is used as indicated in the input placeholder.

## Technologies used

This app is built using the following technologies:

- **HTML5**: For the structure of the page.
- **CSS3**: For design and style, including adaptability to different devices through responsive design techniques.
- **JavaScript**: For polyfills and functionalities.

## Project structure

```
personalFinancesApp/
├── scripts/
│   ├── main.js
│   └── sampleData.js
├── styles/
│   └── main.css
├── .gitignore
├── LICENSE.md
├── README.md
└── index.html
```

## Explanation

- **scripts/main.js**: Contains the main logic for the application, including event listeners, calculations for credit card purchases, and updating the displayed data.
- **scripts/sampleData.js**: Stores sample data for recurring payments, subscription costs, and exchange rates used for converting amounts into COP.
- **styles/main.css**: Defines the layout, color schemes, and responsiveness of the app.
- **index.html**: The entry point of the application, including sections for displaying recurring payments and the credit card calculator form.
- **LICENSE.md**: The GNU General Public License v3.0 for the project.
- **README.md**: Documentation file with details on features, installation, and usage.
- **.gitignore**: Ensures unnecessary files (like temporary or private files) are not tracked by Git.

## Installation

If you want to clone this app and run it locally on your machine, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/n48dev/personalFinancesApp.git
```

2. Start a simple local server. Use either the "Live Server" extension in VS Code or `http-server` to start a local server.

- **With VS Code's "Live Server"**:

If you're using VS Code, you can install the "Live Server" extension and simply click "Go Live" from the status bar to start the server.

- **With `http-server`**:

If you have Node.js installed, you can use the following command to install it globally:

```bash
npm install -g http-server
```

Then, start the server in the project directory with:

```bash
http-server -p 8000
```

3. Open the local server in your browser by going to:

`localhost:8000/`

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