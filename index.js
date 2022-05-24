// Your code here

var questionsArr = [
    {
        question: 'Anne Hathaway is in "The Devil Wears Prada" (2006)',
        answer: true
    },
    {
        question: 'Anne Hathaway is not in "Into The Woods" (2014)',
        answer: true
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
        question: 'Anne Hathaway is not in "La La Land" (2016)',
        answer: true
    }
];

var numOfCorrect = 0
function runQuiz() {
    for (var i = 0; i < questionsArr.length; i++) {
        var quizQuestion = questionsArr[i]
        var answer = confirm(quizQuestion)
        if (answer) {
            numOfCorrect++
        } }

    }

    var score = (numOfCorrect / 5)*100
    var roundedScore = Math.round(score)
    alert("Your final score: " + roundedScore +"%")