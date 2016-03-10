(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var cardinality = _.random(2, 5),
            setA = setGenerate(cardinality, cardinality),
            answer = 2^cardinality;
        return {
            setA: katex.renderToString("A = ") + setPrint(setA),
            answer: answer
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Challenge Question:",
            question =  "Given " + set.setA + ", what is the cardinality of " + powerA + "?"
        return {
            title: title,
            question: question,
            answerType: answerBox,
            answer: set.answer
        };
    }

    var powerA = katex.renderToString("\\mathcal P\\left({A}\\right)");
    window.powerSets1 = {
        questionAndAnswer : questionAndAnswer
    }
 })();