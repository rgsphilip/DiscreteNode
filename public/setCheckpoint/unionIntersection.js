(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var setC = setGenerate(5, 5),
            setD = setGenerate(4, 4),
            union = setUnion(setC, setD),
            intersection = setIntersection(setC, setD),
            unionCard = setCardinality(union),
            interCard = setCardinality(intersection),
            ans1 = (unionCard + 1).toString() + " and " +(interCard - 1).toString(),
            ans2 = (unionCard - 1).toString() + " and " +(interCard + 1).toString(),
            ans3 = (interCard).toString() + " and " +(unionCard).toString(),
            ans4 = (interCard + 1).toString() + " and " +(unionCard - 1).toString(),
            ans5 = (unionCard).toString() + " and " +(interCard).toString();
            ansArray = [ans1, ans2, ans3, ans4, ans5],
            answer = 4;
        return {
            setC: katex.renderToString("C = ") + setPrint(setC),
            setD: katex.renderToString("D = ") + setPrint(setD),
            printAnsArray: radioFunc(ansArray),
            answer: answer
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Set Theory - Unions and Intersection",
            text = "The union of two sets "+a+" and "+b+", which is denoted by " + a + " " + un + " " + b + ", is the set of all elements which belong to A or B. If "+setA+" and "+setB+ ", then " + aUnionB + ". \n\nThe intersection of two sets "+a+" and "+b+", which is denoted by " + a + " " + inter + " " + b + ", is the set of all elements which belong to both A and B. Using the example sets from above, " + aIntersectB + ", because elements " + four +" and "+ five +" are the only ones " + a +" and "+ b +" have in common.",
            question = "Let " +set.setC+" and " +set.setD + ". What is the cardinality of "+cUnionD+ " and "+cIntersectD+", respectively?",
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: set.printAnsArray,
            answer: answer
        };
    }

    var setA = katex.renderToString("A = \\{1, 2, 3, 4, 5\\}");
    var setB = katex.renderToString("B = \\{4, 5, 6, 7, 8\\}");
    var a = katex.renderToString("A");
    var b = katex.renderToString("B");
    var aUnionB = katex.renderToString("A \\cup B = \\{1, 2, 3, 4, 5, 6, 7, 8\\}");
    var aIntersectB = katex.renderToString("A \\cap B = \\{4, 5\\}");
    var four = katex.renderToString("4");
    var five = katex.renderToString("5");
    var cUnionD = katex.renderToString("C \\cup D")
    var cIntersectD = katex.renderToString("C \\cap D")
    window.unionIntersection = {
        questionAndAnswer : questionAndAnswer
    }
})();