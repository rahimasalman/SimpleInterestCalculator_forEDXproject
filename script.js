function compute() {
    const principal = document.getElementById("principal").value
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const text = document.getElementById("text").value;
    if (principal < 0) {
        alert("Please, enter a positive number, that cannot be negative.");
        document.getElementById("principal").focus();
        return false;
    }
    let nextYears = new Date().getFullYear();
    let thatYear = parseInt(nextYears, 10) + parseInt(years, 10);
    let finalAmount = (((principal * rate) / 100) * years);
    let finalResult = "If you deposit <mark>" + principal +
        "</mark>,<br> at an interest rate of <mark>" + rate +
        "</mark> % \.<br> You will receive an amount of <mark>" + finalAmount +
        ",</mark><br> In the year <mark>" + thatYear + "</mark>";
    document.getElementById("finalResult").innerHTML = finalResult;
}
function valueRange(newValue) {
    document.getElementById("valueNumber").innerHTML = newValue + '%';
}
