const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Java", "Python", "JavaScript", "C#"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Level Text Language", "HyperText Makeup Language", "High-Level Test Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What is the result of 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Is CSS a programming language?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    }
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function buildQuiz() {
    quizData.forEach((data, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${index + 1}. ${data.question}</p>`;
        
        const optionsElement = document.createElement("div");
        optionsElement.classList.add("options");

        data.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("label");
            optionElement.classList.add("option");
            optionElement.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            optionsElement.appendChild(optionElement);
        });

        questionElement.appendChild(optionsElement);
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const answerContainers = document.querySelectorAll(".options");
    let score = 0;

    quizData.forEach((data, index) => {
        const answerContainer = answerContainers[index];
        const selectedOption = answerContainer.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === data.correctAnswer) {
                score++;
            }
        }
    });

    const totalQuestions = quizData.length;
    const percentage = (score / totalQuestions) * 100;

    resultContainer.innerHTML = `You scored ${score} out of ${totalQuestions} (${percentage.toFixed(2)}%)`;
}

buildQuiz();