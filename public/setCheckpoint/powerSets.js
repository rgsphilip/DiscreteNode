(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(3, 3),
            setString = setPrint(set),
            ans1 = [0],
            ans2 = [set[1], set[2]],
            ans3 = set,
            ans4 = empty,
            ans5 = [set[0], set[2], 0],
            ansArray = [setPrint(ans1), setPrint(ans2), setPrint(ans3), ans4, setPrint(ans5)],
            answer = [1, 2, 3];
        return {
            set : set,
            printAnsArray : checkBoxFunc(ansArray),
            setString: setString,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Power Sets",
            text = "A power set is a set, which is a set of all subsets for a particular set. The power set of A is denoted as " + powerA + ". As an example, if set " + setA + ", then " +pSetA + ". As you can see, the power set of " + a + " is made of all possible subsets of " + a + ".\n\nThe cardinality of any power set, which can be denoted as " + nPowerA + " is 2 raised to the power of " + nA + ". In other words, " + nPowerACardinality + ". As you can see from above, " + nA3 + " and " + nPowerA8 + ", which is " + twoToThe3 + ".",
            set = generateSet(),
            question = "Select all sets that belong to the power set of " + set.setString + ".",
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: set.printAnsArray,
            answer: set.answer
        }     
    }

    window.powerSets = {
        questionAndAnswer : questionAndAnswer
    }
     var powerA = katex.renderToString("\\mathcal P\\left({A}\\right)");
     var setA = katex.renderToString("A = \\{a, b, c\\}");
     var pSetA = katex.renderToString("\\mathcal P\\left({A}\\right) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a, b\\},\\{a, c\\},\\{b, c\\}, \\{a, b, c\\}\\}");
     var a = katex.renderToString("A");
     var nPowerA = katex.renderToString("n(\\mathcal P\\left({A}\\right))");
     var nA = katex.renderToString("n(A)");
     var nPowerACardinality = katex.renderToString("n(\\mathcal P\\left({A}\\right)) = 2^{n(A)}");
     var nA3 = katex.renderToString("n(A) = 3");
     var nPowerA8 = katex.renderToString("n(\\mathcal P\\left({A}\\right)) = 8");
     var twoToThe3 = katex.renderToString("2^{3}");
})();