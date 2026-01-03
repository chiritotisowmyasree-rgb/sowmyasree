let getDate = new Date();
let curDate = getDate.getDate();
let curMonth = getDate.getMonth() + 1; // Months are zero-based
let curYear = getDate.getFullYear();

function get() {
    let dat = document.getElementById("dates").value;

    if (!dat) {
        alert("Please select a date.");
        return;
    }

    let year = parseInt(dat.substring(0, 4));
    let month = parseInt(dat.substring(5, 7));
    let date = parseInt(dat.substring(8, 10));

    // Calculation for year
    let yrResult = curYear - year;
    if (curMonth < month || (curMonth === month && curDate < date)) {
        yrResult--;
    }
    document.getElementById("years").innerText = "Age in Years: " + yrResult;

    // Calculation for month
    let mnResult = curMonth - month;
    if (curMonth < month || (curMonth === month && curDate < date)) {
        mnResult += 12;
    }
    document.getElementById("months").innerText = "Age in Months: " + (yrResult * 12 + mnResult);

    // Calculation for date
    let dtResult = (yrResult * 365) + ((mnResult - 1) * 30) + (curDate - date);
    if (curDate < date) {
        dtResult -= 30;
    }
    document.getElementById("days").innerText = "Age in Days: " + dtResult;
}
