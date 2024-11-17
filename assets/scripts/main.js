/* This file is part of Anthony's Personal Finances App.
Copyright © 2024 - Anthony Buitrago

This blog is licensed under the GNU General Public License v3.0.
See the LICENSE file in the root of this project for details. */

/* Detectar el entorno y configurar la URL base */
const apiBaseURL = window.location.hostname.includes('localhost') || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : 'https://personal-finances-app-ten.vercel.app';

/* Variable global para la tasa de cambio */
let USDtoCOP = null;

/* Función para obtener la tasa de cambio desde la API */
async function getDollarToCopRate() {
    try {
        const response = await fetch(`${apiBaseURL}/api/dollar-rate`);
        const data = await response.json();

        if (data && data.usd_to_cop) {
            USDtoCOP = parseFloat(data.usd_to_cop);
            return USDtoCOP;
        } else {
            throw new Error('Error: no se encontró la tasa de cambio en la respuesta');
        }
    } catch (error) {
        console.error('Error al obtener la tasa de cambio del dólar:', error);
        return null;
    }
}

/* Cargar la Credit card purchase calculator */
document.getElementById("creditCardPurchaseCalculator").addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const numInstallments = parseInt(document.getElementById("numInstallments").value);
    const annualInterestRatePercent = parseFloat(document.getElementById("annualInterestRatePercent").value) || 27.90;

    creditCardPurchaseCalculator(amount, numInstallments, annualInterestRatePercent);
});

/* Credit card purchase calculator math */
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

/* Mostrar Exchange rate today value y recurring payments */
async function recurringPayments() {
    USDtoCOP = await getDollarToCopRate();
    if (USDtoCOP === null) {
        document.getElementById("recurringPaymentsInfo").innerHTML = `<p>Error al obtener la tasa de cambio. Intenta nuevamente más tarde.</p>`;
        return;
    }
    
    /* Monthly COP */
    const rent = 1200000;
    const averageServices = 200000;
    const healthAndPension = 350000;
    
    const internet = 130000;
    const mobilePlan = 50000;
    const creditCardFee = 20000;
    
    /* Annual COP */
    const clubMembership = 1750000;
    
    /* Monthly USD */
    const serviceSubscribe = 20;
    
    /* Annual USD */
    const serviceSubscribe2 = 100;
    
    /* Totals */
    const totalMonthlyCOP = (rent + averageServices + healthAndPension + internet + mobilePlan + creditCardFee) + (clubMembership / 12) + (serviceSubscribe * USDtoCOP) + ((serviceSubscribe * USDtoCOP) / 12);
    const totalMonthlyUSD = totalMonthlyCOP / USDtoCOP;
    
    const totalSubscriptionsCOP = (mobilePlan + creditCardFee) + (clubMembership / 12) + (serviceSubscribe * USDtoCOP) + ((serviceSubscribe2 * USDtoCOP) / 12);
    const totalSubscriptionsUSD = totalSubscriptionsCOP / USDtoCOP;

    /* innerHTML */
    const exchangeRatesHTML = `
    <p>1 USD = <span>${USDtoCOP.toLocaleString("en-US")}</span> COP</p>
    `;

    document.getElementById("exchangeRates").innerHTML = exchangeRatesHTML;
    
    const recurringPaymentsInfoHTML = `
    <h3>Monthly expenses</h3>
    <p>COP = ${totalMonthlyCOP.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>USD = $ ${totalMonthlyUSD.toLocaleString("en-US", {maximumFractionDigits: 2 })}</p>
    <h3>Subscriptions</h3>
    <p>COP = ${totalSubscriptionsCOP.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>USD = $ ${totalSubscriptionsUSD.toLocaleString("en-US", {maximumFractionDigits: 2 })}</p>
    <h3>List in COP</h3>
    <p>Rent = ${rent.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Services (average) = ${averageServices.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Health & pension = ${healthAndPension.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Internet = ${internet.toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Mobile plan = ${mobilePlan.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
    <p>Credit card fee = ${creditCardFee.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
    <p>Club membership = ${(clubMembership / 12).toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Service subscribe = ${(serviceSubscribe * USDtoCOP).toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    <p>Service subscribe 2 = ${((serviceSubscribe2 * USDtoCOP) / 12).toLocaleString("en-US", {maximumFractionDigits: 0 })}</p>
    `;
    
    document.getElementById("recurringPaymentsInfo").innerHTML = recurringPaymentsInfoHTML;
}

window.addEventListener('DOMContentLoaded', recurringPayments);