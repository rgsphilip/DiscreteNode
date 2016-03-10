(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g"],
            setA = createSubsetOf(universe, 4),
            setB = createSubsetOf(universe, 4),
            answer = _.union(setA, setB);
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
            question =  "Given " + set.setA + " and " + set.setB + ", what is " + aUnionB + "?"
        return {
            title: title,
            question: question,
            answerType: answerBox,
            answer: set.answer
        };
    }

    var aUnionB = katex.renderToString("A \\cup B");
    window.setOperators1 = {
        questionAndAnswer : questionAndAnswer
    }
})();