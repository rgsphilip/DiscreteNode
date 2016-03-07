(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var question = setGenerate(5, 6),
            ans1 = setRemoveElem(question, 1),
            ans2 = setRemoveElem(ans1, 2),
            ans3 = setRemoveElem(ans2, 1),
            ans4 = question,
            ans5 = setRemoveDups(question),
            ansArray = [ans1, ans2, ans3, ans4, ans5],
            answer =[3, 4];

        return {
            printQ : setPrint(question),
            printAnsArray : checkBoxFunc(setArrayPrint(ansArray)),
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Subsets",
            text = "A set can be a subset of another set. For example, "+setA+" is a subset of the natural numbers, because all of A’s elements are contained in the natural numbers. However, "+setB+" would not be a subset of the natural numbers, since "+fivePointfive+" is not a member of the natural numbers. \n\nA set is a subset of itself - since all of "+a+"’s elements are in the set "+a+", it is considered to be a subset of itself. To denote this, we say " + a + " " + subset+ " "+  a + ". A proper subset of a set is a subset that excludes at least one member of the set. Thus, " + setC + " is considered to be a proper subset of " + a + ", but " + a+ " cannot be a proper subset of itself. To denote that C is a proper subset of A, we say " + c + " " + properSubset + " " +a+".",
            set = generateSet(),
            question = "Select the items that are subsets, but NOT  proper subsets, of " + set.printQ + " :",
            answerType = set.printAnsArray,
            answer = set.answer

        return {
            title: title,
            text: text,
            question: question,
            answerType: answerType,
            answer: answer
        }     
        
    }

    var setA = katex.renderToString("A = \\{1, 2, 3, 4, 5\\}");
    var setB = katex.renderToString("B = \\{1, 2, 3, 4, 5.5\\}");
    var fivePointfive = katex.renderToString("5.5");
    var a = katex.renderToString("A");
    var c = katex.renderToString("C");
    var setC = katex.renderToString("C = \\{1, 2, 3, 4\\}");
    
    
    window.subsets = {
        questionAndAnswer : questionAndAnswer
    }
})();