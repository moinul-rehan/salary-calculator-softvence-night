function calculateSalary() {
    let GS = parseFloat(document.getElementById("grossSalary").value);
    let DM = parseFloat(document.getElementById("totalDays").value);
    let DP = parseFloat(document.getElementById("daysPresent").value);

    if (!GS || !DM || !DP) {
        alert("Please fill all fields correctly!");
        return;
    }

    let BS = GS / 2;
    let twentyPercent = BS * 0.20;
    let prorated = (twentyPercent / DM) * DP;
    let dailyBonus = DP * 100;

    let finalSalary = GS + prorated + dailyBonus;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML =
        "Payable Salary: <strong>" + finalSalary.toFixed(2) + " BDT</strong>";
}
