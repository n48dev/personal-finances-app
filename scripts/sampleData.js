/* This file is part of Anthony's Personal Finances App.
Copyright © 2024 - Anthony Buitrago

This blog is licensed under the GNU General Public License v3.0.
See the LICENSE file in the root of this project for details. */
function recurringPayments() {
    const USDtoCOP = 4413;

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

recurringPayments();