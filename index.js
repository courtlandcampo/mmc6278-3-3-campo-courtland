// Your code here

var questionsArr = [
    {
        question: 'Anne Hathaway is in "The Devil Wears Prada" (2006)',
        answer: true
    },
    {
        question: 'Anne Hathaway is in "Into The Woods" (2014)',
        answer: false
    },
    {
        question: 'Anne Hathaway is in "Brokeback Mountain" (2005)',
        answer: true
    },
    {
        question: 'Anne Hathaway is in "The Princess Diaries" (2001)',
        answer: true
    },
    {
        question: 'Anne Hathaway is in "La La Land" (2016)',
        answer: false
    },
    {
        question: 'Anne Hathaway is in "Friends With Benefits" (2011)',
        answer: false
    }
];

var numOfCorrect = 0
function runQuiz() {
    for (var i = 0; i < questionsArr.length; i++) {
        var quizQuestion = questionsArr[i].question
        var answer = confirm(quizQuestion)
        // if var-answer matches questionsArr-answer then add one to var-numOfCorrect
        if (answer === questionsArr[i].answer) {
            numOfCorrect++
        } }

        var score = (numOfCorrect / questionsArr.length)*100
        var roundedScore = Math.round(score)
    
        alert("Your final score: " + roundedScore +"%")
}