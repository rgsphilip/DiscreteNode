(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var ans1 = setGenerate(4, 4),
            ans2 = setGenerate(5, 7)
            ans3 = empty,
            ans4 = katex.renderToString("\\{ \\emptyset \\}"),
            ans5 = setGenerate(6, 7),
            ansArray = [setPrint(ans1), setPrint(ans2), ans3, ans4, setPrint(ans5)],
            answer = ["4", "5", "0", "1", "6"];
        return {
            ansArray: ansArray,
            answer: answer,
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Challenge Question: ",
            set = generateSet(),
            question = "Enter in the cardinality of the following sets:",
            answer = set.answer;
        return {
            title: title,
            question: question,
            answerType: answerOptions + set.ansArray[0] + "<br>" + answerOptions + set.ansArray[1] + "<br>" + answerOptions + set.ansArray[2] + "<br>" + answerOptions + set.ansArray[3] + "<br>" + answerOptions + set.ansArray[4] + "<br>",
            answer: set.answer,
        }     
    }

    window.subsets3 = {
        questionAndAnswer : questionAndAnswer
    }
     
})();