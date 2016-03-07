(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g", "h"],
            setA = createSubsetOf(universe, 4),
            setAComp = removeSubset(universe, setA),
            setB = setUnion(_.sampleSize(setAComp, 2), _.sampleSize(setA, 2)),
            printSetU = setPrint(universe),
            printSetA = setPrint(setA),
            printSetB = setPrint(setB),
            aSymDiffB = symetricDifference(setA, setB),
            answer = arrayElemsToStrings(removeSubset(universe, aSymDiffB))
        return {
            universe : printSetU,
            setA : printSetA,
            setB : printSetB,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Complements and Set Difference",
            text = "The complement of set " + a + ", denoted as " + acomp + " is the set of elements which belong to the universal set " + universal + " and are not contained in " + a + ". For example, if " + universal + setU + " and " + setA + ", then  " + acompSet + ".\n\nThe set difference between " + a +" and " + b + ", denoted as " + aMinusB + ", is the set of all elements that are contained in " + a + " but are not in " + b + ". If " + setA + " and " + setB + ", then " + aMinusBSet+ ".  " + three + " and " + four + " are excluded since they are in " + b + ". \n\nThe symmetric difference between " + a +" and " + b + ", denoted as " + aSymDiffB + ", is the set of elements that are contained in " + a + " and in " + b + ", but not both. Said another way, it is the union of " + a + " and " + b + " minus their intersection. Using the same sets as above, " + aSymDiffBSet + ".",
            set = generateSet(),
            question = "Let " + universal + " be " + set.universe + ", " + aEq + set.setA + ", and " + bEq + set.setB + ". What elements are within " + aSymDiffBComp + "? \n(hint: drawing out the sets will help with this one!)",
            answerType = answerBox,
            answer = set.answer,
            aSymDiffB = set.aSymDiffB,
            setA = set.setA
        return {
            title: title,
            text: text,
            question: question,
            answerType: answerType,
            answer: answer,
            aSymDiffB: aSymDiffB,
            setA: setA
        }     
    }
    
    var a = katex.renderToString("A");
    var b = katex.renderToString("B");
    var aEq = katex.renderToString("A = ");
    var bEq = katex.renderToString("B = ");
    var setA = katex.renderToString("A = \\{1, 2, 3, 4\\}");
    var setB = katex.renderToString("B = \\{3, 4, 5, 6\\}");
    var setU = katex.renderToString(" = \\{1, 2, 3, 4, 5, 6, 7, 8\\}");
    var three = katex.renderToString("3");
    var four = katex.renderToString("4");
    var acomp = katex.renderToString("A^{\\mathsf{c}}");
    var acompSet = katex.renderToString("A^{\\mathsf{c}} = \\{5, 6, 7, 8\\}");
    var aMinusB = katex.renderToString("A \\setminus B");
    var aMinusBSet = katex.renderToString("A \\setminus B = \\{1, 2\\}");
    var aSymDiffB = katex.renderToString("A \\oplus B");
    var aSymDiffBSet = katex.renderToString("A \\oplus B = \\{1, 2, 5, 6\\}");
    var aSymDiffBComp = katex.renderToString("(A \\oplus B)^{\\mathsf{c}}")
    
    window.complementAndSetDifference = {
        questionAndAnswer : questionAndAnswer
    }
})();

