function compute() {
    const amount = document.getElementById("amount").value
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const text = document.getElementById("text").value;
    let nextYears = new Date().getFullYear();
    let thatYear = parseInt(nextYears, 10) + parseInt(years, 10);
    let finalAmount = (((amount * rate) / 100) * years);
    let finalResult = "If you deposit <mark>" + amount +
        "</mark>,<br> at an interest rate of <mark>" + rate +
        "</mark> % \.<br> You will receive an amount of <mark>" + finalAmount +
        ",</mark><br> In the year <mark>" + thatYear + "</mark>";
    document.getElementById("finalResult").innerHTML = finalResult;
}
function valueRange(newValue) {
    document.getElementById("valueNumber").innerHTML = newValue + '%';
}
