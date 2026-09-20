
// based on month, size 12
const zodiacsign=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];



// size 31
// based on date
const compliments = [
  "You have a great sense of humor 😄",
  "You are incredibly smart 🧠",
  "Your smile makes everyone happy 😊",
  "You are very kind-hearted ❤️",
  "You have amazing confidence 💪",
  "You always spread positive vibes ✨",
  "You are a great listener 👂",
  "You are very creative 🎨",
  "You inspire people around you 🌟",
  "You have a beautiful personality 💖",
  "You are very hardworking 🚀",
  "You always stay calm in tough situations 😌",
  "You are honest and trustworthy 🤝",
  "You have excellent leadership skills 👑",
  "You are full of energy ⚡",
  "You make people feel comfortable 🌈",
  "You are very thoughtful 💭",
  "You are good at solving problems 🧩",
  "You have a big heart 💕",
  "You are always learning new things 📚",
  "You are very supportive 🤗",
  "You have great communication skills 🗣️",
  "You are strong and brave 🦁",
  "You have a unique talent 🎯",
  "You always try your best 💯",
  "You are very disciplined 🕒",
  "You are a wonderful friend 👫",
  "You have a positive mindset 🌞",
  "You are very respectful 🙏",
  "You bring joy wherever you go 🎉",
  "You are truly amazing ⭐"
];
// size 20
const victimCompliments = [
  "You always do good for others but never get anything in return 😔",
  "You care for everyone, but no one cares for you the same way 💔",
  "You always help people, but they forget you when they succeed 😞",
  "You give your best, but life never gives you what you deserve 😢",
  "You are always there for others, but you stand alone in hard times 😔",
  "You sacrifice so much, yet nobody notices your pain 💭",
  "You spread happiness, but hide your own sadness inside 😞",
  "You love deeply, but never get the same love back 💔",
  "You support everyone, but no one supports you when you fall 😢",
  "You do everything with pure intentions, but get misunderstood 😔",
  "You forgive easily, but people keep hurting you 💔",
  "You stay loyal, but people always leave 😞",
  "You put others first, but you are always last 😔",
  "You try to make everyone happy, while ignoring your own pain 😢",
  "You give your time and energy, but receive nothing in return 💭",
  "You trust people easily, but they break it again and again 💔",
  "You keep helping, even when you are tired inside 😔",
  "You stay strong for others, but no one sees your struggles 😞",
  "You always choose kindness, even when life is unfair 😢",
  "You deserve so much better than what you get 💔"
];
// size 30
const lifeRecommendations = [
  "Feed a street dog or cat 🐕",
  "Help someone in need today 🤝",
  "Plant a tree or a small plant 🌱",
  "Give water to birds in summer 🐦",
  "Respect your parents and elders 🙏",
  "Donate clothes you don’t use 👕",
  "Smile and talk politely to people 😊",
  "Help a child with their studies 📚",
  "Keep your surroundings clean 🧹",
  "Save water whenever possible 💧",
  "Avoid wasting food 🍽️",
  "Support local small businesses 🏪",
  "Visit old age homes and talk to elders ❤️",
  "Offer your seat to someone in need 🚍",
  "Be honest in daily life ✔️",
  "Help accident victims by calling for help 📞",
  "Reduce plastic usage ♻️",
  "Share food with hungry people 🍞",
  "Encourage someone who feels low 🌟",
  "Take care of your health daily 🏃",
  "Read something good every day 📖",
  "Avoid spreading negativity 🚫",
  "Teach kindness to children 💕",
  "Be grateful for what you have 🌈",
  "Help your neighbors when needed 🏠",
  "Protect nature and animals 🌍",
  "Stand up for what is right ⚖️",
  "Support someone’s dreams 🎯",
  "Practice patience and understanding ⌛",
  "Try to make someone’s day better 😊"
];

// size 20
const futurePredictions = [
  "You will become a crorepati one day 💰",
  "Big success is coming into your life very soon 🚀",
  "Your hard work will pay off more than you expect ⭐",
  "You will achieve all your dreams step by step 🌟",
  "A great opportunity will change your life soon 🔑",
  "You will earn respect and fame in your field 👑",
  "Financial stability is coming your way 💵",
  "You will travel to many beautiful places ✈️",
  "Your career will grow rapidly 📈",
  "You will live a happy and peaceful life 😊",
  "You will become a leader in your work area 🏆",
  "Good news will arrive very soon 📩",
  "Your future will be full of positivity 🌈",
  "You will make your family proud ❤️",
  "A big achievement is waiting for you 🎯",
  "Your talents will bring you great rewards 🎁",
  "You will overcome all struggles 💪",
  "Your life will become comfortable and joyful 🎉",
  "You will attract success wherever you go ✨",
  "Luck will always support you 🍀"
];

// const form = document.getElementById("astroform")
const btn = document.querySelector("button")
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log("submitted");
    const name = document.getElementById("fname").value;
    
    const lname = document.getElementById('lname').value;
    const date = Number((document.getElementById('date').value));
    const month = Number((document.getElementById('month').value));
    const year = Number((document.getElementById('year').value));

    console.log(name,lname,date,month,year);

    // let result = document.getElementById("output")
    // result.innerHTML="hello result"

    const f_message = `Hello ${name} ${lname} `;
    
    
    const second_message = `your zodiac sign is ${zodiacsign[month-1]} `
    
    const third_message = `${compliments[date]}`
    
    let index = Math.floor(Math.random()*20)
    const fourth_message = victimCompliments[index];
    
    index = ((name.length) * (lname.length) * (year))%30

    const fifth_message = lifeRecommendations[index];
    // console.log("hello");
    index = ((date)*(year)*(month))%20

    const sixth_message = futurePredictions[index]
    // console.log("hello");
    let result = document.getElementById("output")
    
    result.innerHTML=`${f_message}, ${second_message}, ${third_message},,  ${fourth_message}, ${fifth_message} , 6. ${sixth_message} ` 
})


