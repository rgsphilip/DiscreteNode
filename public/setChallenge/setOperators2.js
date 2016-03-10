(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g"],
            setA = createSubsetOf(universe, 4),
            setB = createSubsetOf(universe, 4),
            answer = _.intersection(setA, setB);
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
            question =  "Given " + set.setA + " and " + set.setB + ", what is " + aIntersectB + "?"
        return {
            title: title,
            question: question,
            answerType: answerBox,
            answer: set.answer
        };
    }

    var aIntersectB = katex.renderToString("A \\cap B");
    window.setOperators2 = {
        questionAndAnswer : questionAndAnswer
    }
})();