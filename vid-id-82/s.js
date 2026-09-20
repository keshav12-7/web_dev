function calculateZodiac() {
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let date = Number(document.getElementById("date").value);
  let month = Number(document.getElementById("month").value);
  let output = document.getElementById("output");

  if (!fname || !lname || !date || !month) {
    output.innerHTML = "⚠️ Please fill all fields";
    return;
  }




  let zodiac = "";

  if ((month == 3 && date >= 21) || (month == 4 && date <= 19))
    zodiac = "Aries ♈";
  else if ((month == 4 && date >= 20) || (month == 5 && date <= 20))
    zodiac = "Taurus ♉";
  else if ((month == 5 && date >= 21) || (month == 6 && date <= 20))
    zodiac = "Gemini ♊";
  else if ((month == 6 && date >= 21) || (month == 7 && date <= 22))
    zodiac = "Cancer ♋";
  else if ((month == 7 && date >= 23) || (month == 8 && date <= 22))
    zodiac = "Leo ♌";
  else if ((month == 8 && date >= 23) || (month == 9 && date <= 22))
    zodiac = "Virgo ♍";
  else if ((month == 9 && date >= 23) || (month == 10 && date <= 22))
    zodiac = "Libra ♎";
  else if ((month == 10 && date >= 23) || (month == 11 && date <= 21))
    zodiac = "Scorpio ♏";
  else if ((month == 11 && date >= 22) || (month == 12 && date <= 21))
    zodiac = "Sagittarius ♐";
  else if ((month == 12 && date >= 22) || (month == 1 && date <= 19))
    zodiac = "Capricorn ♑";
  else if ((month == 1 && date >= 20) || (month == 2 && date <= 18))
    zodiac = "Aquarius ♒";
  else if ((month == 2 && date >= 19) || (month == 3 && date <= 20))
    zodiac = "Pisces ♓";
  else zodiac = "Invalid Date";

  output.innerHTML = `✨ Hello ${fname} ${lname}!<br>Your Zodiac Sign is <span style="color:#ffcc00">${zodiac}</span>`;
}
