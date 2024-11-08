document.getElementById("creditCardPurchaseCalculator").addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const numInstallments = parseInt(document.getElementById("numInstallments").value);
    const annualInterestRatePercent = parseFloat(document.getElementById("annualInterestRatePercent").value) || 49.07;

    creditCardPurchaseCalculator(amount, numInstallments, annualInterestRatePercent);
});

function creditCardPurchaseCalculator(amount, numInstallments, annualInterestRatePercent) {
    const annualInterestRate = annualInterestRatePercent / 100;
    const monthlyInterestRate = ((1 + annualInterestRate) ** (1 / 12)) - 1;
    const monthlyPayment = amount * ((monthlyInterestRate * ((1 + monthlyInterestRate) ** numInstallments)) / (((1 + monthlyInterestRate) ** numInstallments) - 1));

    const creditCardPurchaseResultHTML = `
    <p>Monthly interest: ${(monthlyInterestRate * 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}%</p>
    <p>Total interest: ${((monthlyPayment * numInstallments) - amount).toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
    <p>${numInstallments} installments of: ${monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
    <p>Total to pay: ${(monthlyPayment * numInstallments).toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
`;

    document.getElementById("creditCardPurchaseResult").innerHTML = creditCardPurchaseResultHTML;
}