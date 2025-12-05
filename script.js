function calculateSalary() {
    let GS = parseFloat(document.getElementById("grossSalary").value);
    let DM = parseFloat(document.getElementById("totalDays").value);
    let DP = parseFloat(document.getElementById("daysPresent").value);

    if (!GS || !DM || !DP) {
        alert("Please fill all fields correctly!");
        return;
    }

    let BS = GS / 2;                         // Basic Salary
    let extra20 = BS * 0.20;                 // 20% of Basic
    let prorated = (extra20 / DM) * DP;      // Pro-rated 20%
    let meal = DP * 100;                     // Meal Allowance per day
    let finalSalary = GS + prorated + meal;  // Final Payable Salary

    // Display detailed result
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <strong>Salary Breakdown:</strong><br><br>

        <strong>Gross Salary (GS):</strong> ${GS.toFixed(2)} BDT <br>
        <strong>Basic Salary (BS = 50% of GS):</strong> ${BS.toFixed(2)} BDT <br>
        <strong>20% of Basic Salary:</strong> ${extra20.toFixed(2)} BDT <br>
        <strong>Pro-rated Extra (Based on Presence):</strong> ${prorated.toFixed(2)} BDT <br>
        <strong>Meal Allowance (DP × 100):</strong> ${meal.toFixed(2)} BDT <br><br>

        <strong style="font-size:20px;">Final Payable Salary: ${finalSalary.toFixed(2)} BDT</strong>
    `;
}
