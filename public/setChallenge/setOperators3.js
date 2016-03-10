(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
            setA = createSubsetOf(universe, 6),
            setB = createSubsetOf(universe, 3),
            answer = removeSubset(setA, setB);
        return {
            setA: katex.renderToString("A = ") + setPrint(setA),
            setB: katex.renderToString("B = ") + setPrint(setB),
            answer: answer
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Challenge Question:",
            question =  "Given " + set.setA + " and " + set.setB + ", what is " + aSetMinusB + "?"
        return {
            title: title,
            question: question,
            answerType: answerBox,
            answer: set.answer
        };
    }

    var aSetMinusB = katex.renderToString("A \\setminus B");
    window.setOperators3 = {
        questionAndAnswer : questionAndAnswer
    }
})();