const d = new Date("2021-10-20")
console.log(d.toString());
const d2 = new Date(2021,1,23,12,1,1)
console.log(d2.toString());

const d3 = new Date();
d3.setFullYear(2026);
d3.setMonth(3);
d3.setDate(12);
console.log(d3);

// date calculation

const d4 = new Date();
const d5 = new Date("2026-5-12")
console.log(d5-d4);

// countdown timer for olympics
const d6 = new Date();
const d7 = new Date("2028-07-14T00:00:00")
const date = d7-d6;
const days = Math.floor(date/(1000*60*60*24));
console.log(days);
const hour = Math.floor((date/(1000*60*60))%24)
console.log(hour);
const minute = Math.floor(date/(1000*60)%60)
console.log(minute);
const sec = Math.floor(date/(1000)%60)
console.log(sec);
const ms = date%60;
console.log(ms);






