(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var setACard = _.random(4, 7),
            setBCard = _.random(4, 7),
            setAIntBCard = _.random(2, 4),
            answer = (setACard + setBCard - setAIntBCard).toString(),
            aPrint = charPrint(setACard),
            bPrint = charPrint(setBCard),
            aIntBPrint = charPrint(setAIntBCard)
        return {
            setA : katex.renderToString("n(A) = ") + " " + aPrint,
            setB : katex.renderToString("n(B) = ") + " " + bPrint,
            setAUB : katex.renderToString("n(A \\cap B) = ") + aIntBPrint,
            answer : answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Counting Principles",
            text = "We can reason about the cardinality of sets when using operators. According to the <i>Inclusion-Exclusion Principle</i>, if we have two finite sets "+a+" and "+b+ ", then their union and intersection are finite and " +cardAUB+ ". To verify this, create two sets on your own and see whether it works out. We can see that when " +a+ " and " +b+ " are <i>disjoint</i>, that is, have no elements in common, then " + cardAUBDisjoint + ", since " + aIntersectB + " is empty when two sets are disjoint. We can expand the Inclusion Exclusion Principle to " + cardAUBUC1 + "\n" + cardAUBUC2 + ". ",
            set = generateSet(),
            question = "If " + set.setA + ", " + set.setB + " and " + set.setAUB +", what is " + aUBCard + "?", 
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: answerBox,
            answer: set.answer
        }     
    }

    window.countingPrinciple = {
        questionAndAnswer : questionAndAnswer
    }
     var a = katex.renderToString("A");
     var b = katex.renderToString("B");
     var cardAUB = katex.renderToString("n(A \\cup B) = n(A) + n(B) - n(A \\cap B)");
     var cardAUBDisjoint = katex.renderToString("n(A \\cup B) = n(A) + n(B)");
     var aIntersectB = katex.renderToString("A \\cap B");
     var cardAUBUC1 = katex.renderToString("n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B)");
     var cardAUBUC2 = katex.renderToString(" - n(A \\cap C) - n(B \\cap C) + n(A \\cap B \\cap C)");
     var aUBCard = katex.renderToString("n(A \\cup B)");
})();