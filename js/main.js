const theDays = document.getElementById("day");
const theMonth = document.getElementById("month");
const theYearss = document.getElementById("year");
const circle = document.getElementById("circle");
const validMonth = document.getElementById("validMonth");
const redDay = document.getElementById("redDay");
const redMonth = document.getElementById("redMonth");
const redYearsss = document.getElementById("redYearsss");
let currentTime = new Date();
let theCurentDays = currentTime.getDate();
let theCurentMonths = currentTime.getMonth() + 1;
let theCurentYers = currentTime.getFullYear();
const validDay = document.getElementById("validDay");
const validYear = document.getElementById("validYear");

theDays.onkeyup = function () {
  if (parseInt(theDays.value) < 30) {
    validDay.style.display = "none";
    redDay.style.color = "#777";
  }
  if (theDays.value.length === 2) {
    theMonth.focus();
  }

  if (parseInt(theDays.value) > 30) {
    validDay.style.display = "block";
    redDay.style.color = "red";
  }
};

theMonth.onkeyup = function () {
  if (theMonth.value.length === 2) {
    theYearss.focus();
  }
  if (parseInt(theMonth.value) > 12) {
    validMonth.style.display = "block";
    redMonth.style.color = "red";
  }
  if (parseInt(theMonth.value) < 12) {
    validMonth.style.display = "none";
    redMonth.style.color = "#777";
  }
};

theYearss.onkeyup = function () {
  if (theYearss.value.length <= 4) {
    validYear.style.display = "none";
    redYearsss.style.color = "#777";
  }
  if (parseInt(theYearss.value) > theCurentYers) {
    validYear.style.display = "block";
    redYearsss.style.color = "red";
    console.log("true");
  }
  if (theYearss.value.length > 4) {
    validYear.style.display = "block";
    redYearsss.style.color = "#777";
  }

  if (theYearss.value.length === 4) {
    circle.focus();
  }
};

circle.onclick = function () {
  let bRirday = theCurentDays - parseInt(theDays.value);
  let bRirMonth = theCurentMonths - parseInt(theMonth.value);
  let bRirYear = theCurentYers - parseInt(theYearss.value);

  if (theDays.value != "" && theMonth.value != "" && theYearss.value != "") {
    if (
      validDay.style.display === "none" &&
      validMonth.style.display === "none" &&
      validYear.style.display === "none"
    ) {
      if (bRirday < 0) {
        bRirday = 30 - Math.abs(bRirday);
        bRirMonth -= 1;
      }
      if (bRirMonth < 0) {
        bRirMonth = 12 - Math.abs(bRirMonth);
        bRirYear -= 1;
      }

      const yearss = document.querySelector(".yearss");
      const slash2 = document.querySelectorAll(".slash2");
      const monthss = document.querySelector(".monthss");
      const dayss = document.querySelector(".dayss");

      for (let i = 0; i < slash2.length; i++) {
        slash2[i].classList.remove("slash2");
      }
      yearss.innerHTML = bRirYear;
      monthss.innerHTML = bRirMonth;
      dayss.innerHTML = bRirday;

      //   theDays.value = "";
      //   theMonth.value = "";
      //   theYearss.value = "";
    }
  }
};
