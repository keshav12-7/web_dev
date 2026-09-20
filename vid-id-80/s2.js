const question_bank = [

{
    question: "Who is known as the God of Cricket?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Sachin Tendulkar"
},

{
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "West Indies"
},

{
    question: "Who was the captain of India in the 2011 World Cup?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Sourav Ganguly"],
    answer: "MS Dhoni"
},

{
    question: "Which stadium is known as the Home of Cricket?",
    options: ["Eden Gardens", "MCG", "Lord's", "Wankhede"],
    answer: "Lord's"
},

{
    question: "Who has the highest individual score in ODI cricket?",
    options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Martin Guptill"],
    answer: "Rohit Sharma"
},

{
    question: "How many players are there in a cricket team?",
    options: ["10", "11", "12", "9"],
    answer: "11"
},

{
    question: "Which country is called the Proteas?",
    options: ["England", "South Africa", "New Zealand", "Sri Lanka"],
    answer: "South Africa"
},

{
    question: "Who hit six sixes in an over in T20 World Cup 2007?",
    options: ["MS Dhoni", "Yuvraj Singh", "Rohit Sharma", "Virat Kohli"],
    answer: "Yuvraj Singh"
},

{
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Shane Warne", "James Anderson", "Anil Kumble", "Muttiah Muralitharan"],
    answer: "Muttiah Muralitharan"
},

{
    question: "Which IPL team won the first IPL season?",
    options: ["CSK", "MI", "RR", "KKR"],
    answer: "RR"
},

{
    question: "Who is called Captain Cool?",
    options: ["Virat Kohli", "MS Dhoni", "KL Rahul", "Hardik Pandya"],
    answer: "MS Dhoni"
},

{
    question: "Which country hosted the 2019 Cricket World Cup?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
},

{
    question: "What does LBW stand for?",
    options: ["Leg Before Wicket", "Long Ball Wide", "Left Bat Win", "Low Ball Wide"],
    answer: "Leg Before Wicket"
},

{
    question: "Who scored the first double century in ODI cricket?",
    options: ["Sachin Tendulkar", "Rohit Sharma", "Virender Sehwag", "Chris Gayle"],
    answer: "Sachin Tendulkar"
},

{
    question: "Which country won the T20 World Cup 2022?",
    options: ["India", "Pakistan", "England", "Australia"],
    answer: "England"
},

{
    question: "Which Indian player is called the Hitman?",
    options: ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "Rishabh Pant"],
    answer: "Rohit Sharma"
},

{
    question: "Which cricket format is the shortest?",
    options: ["Test", "ODI", "T20", "First Class"],
    answer: "T20"
},

{
    question: "Who has the most centuries in international cricket?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
},

{
    question: "Which country won the 1983 World Cup?",
    options: ["Australia", "India", "England", "West Indies"],
    answer: "India"
},

{
    question: "Which Indian stadium is the largest in the world?",
    options: ["Eden Gardens", "Wankhede", "Narendra Modi Stadium", "Chinnaswamy"],
    answer: "Narendra Modi Stadium"
}

];

function random_question(){
    
    
    // const data = new Set()
    // while(data.size!=5){
    //     const index = Math.floor(Math.random()*20);
    //     data.add(question_bank[index]);
    // }
    // return [...data];

    let ans = []
    let size = question_bank.length
    
    for(let i=0;i<5;i++){
        let index = Math.floor(Math.random()*size);
        ans.push(question_bank[index]);
        [question_bank[index],question_bank[size-1]]=[question_bank[size-1],question_bank[index]];
        size = size-1;
    }
    return ans;
}
// select the form and insert all the elements into it
const form = document.querySelector("form")
const problems = random_question()

// select and create all 5 chosen problems

problems.forEach((obj,index)=>{
    // create div

    const div_element = document.createElement("div")

    // class = question

    div_element.className="question";
    const para = document.createElement("p")
    para.textContent=`${index+1}. ${obj["question"]}`;

    // append para to div.question

    div_element.appendChild(para);


    // create four option

    obj['options'].forEach((data)=>{
        const label=document.createElement("label");
        const input = document.createElement("input")
        input.type="radio"
        input.name=`question${index+1}`;
        input.value=data;
        label.appendChild(input);
        
        // create text node 
        label.appendChild(document.createTextNode(data))

        // append this label to div.question 

        div_element.appendChild(label)

        div_element.appendChild(document.createElement("br"))


        

    })
    // attach div_element to form 

    form.appendChild(div_element);

})

const btn = document.createElement("button")
btn.type="submit"
btn.className="submit-btn"
btn.textContent="Submit"
form.appendChild(btn)

// make original answer key
const original_ans={} ;

problems.forEach((obj,index)=>{
    original_ans[`question${index+1}`]=obj["answer"];
})


// check the submitted response
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form)
    let score =0;
    // console.log(data);
    
    for(let [key,value] of data){
        if(value === original_ans[key]){
            score+=1;
        }

    }
    const result = document.querySelector("#result")
    result.textContent=`${score} out of 5 is correct`;
    document.querySelector(".container").appendChild(result)

})




