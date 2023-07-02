const question = [
	{
		question: "Which miracle prophet Muhammad under below?",
		answer: [
			{ text: "A stick become a snake", correct: "false"},
			{ text: "Split the moon", correct: "true"},
			{ text: "divide the sea", correct: "false"},
			{ text: "Raise the dead", correct: "false"},
		]
			
	},
	{
		question: "What does a miracle mean?",
		answer: [
			{ text: "weak", correct: "true"},
			{ text: "Split the moon", correct: "false"},
			{ text: "Deliver", correct: "false"},
			{ text: "Proving", correct: "false"},
		]
			
	},
	{
		question: "Examples of ma'nawi miracles.",
		answer: [
			{ text: "Split moon", correct: "false"},
			{ text: "Quran", correct: "true"},
			{ text: "Isra' mi'raj", correct: "false"},
			{ text: "Water comes out through the hand", correct: "false"},
		]
			
	},
	{
		question: "How many parts in a miracle",
		answer: [
			{ text: "4", correct: "false"},
			{ text: "3", correct: "false"},
			{ text: "1", correct: "false"},
			{ text: "2", correct: "true"},
		]
			
	}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-button");
console.log(questionElement)

let CurrentQuestionIndex= 0;
let score= 0;

function startQuiz(){
	CurrentQuestionIndex: 0;
	score: 0;
	NextButton.innerHTML = "Next Question";
	showquestion();
}

function showquestion(){
	resetState();
	let currentQuestion = question [CurrentQuestionIndex];
	let questionNo = CurrentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + "." + question[CurrentQuestionIndex].question;
	
	currentQuestion.answer.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if(answer.correct){
			button.dataset.correct =answer.correct;
		}
		button.addEventListener("click",selectAnswer);
			
	});
}

function resetState(){
	NextButton.style.display = "none";
	while(answerButton.firstChild){
		answerButton.removeChild(answerButton.firstChild)
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
		NextButton.style.display = "block";
    }else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButton.children).forEach(button => {
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disable = true;

	});
	NextButton.style.display = "block";
}

function showScore(){
	resetState();
	questionElement.innerHTML = `Your scored ${score} out of ${question.
		length}!`;
		NextButton.innerHTML = "your score";
		NextButton.style.display = "block";
}

function handleNextButton(){
	CurrentQuestionIndex++;
	if(CurrentQuestionIndex < question.length){
		showquestion();
	}else{
		showScore();
	}
}

NextButton.addEventListener("click", ()=>{
	if(CurrentQuestionIndex < question.length){
		handleNextButton();
	}else{
		startQuiz();
	}
});

startQuiz();