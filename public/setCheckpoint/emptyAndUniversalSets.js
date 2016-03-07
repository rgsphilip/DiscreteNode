(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(10, 10),
            setString = setPrint(set),
            ans1 = "10 and 0",
            ans2 = "10 and 1",
            ans3 = "0 and 10",
            ans4 = "1 and 10",
            ans5 = "11 and 0",
            ansArray = [ans1, ans2, ans3, ans4, ans5],
            answer = 0;
        return {
            set : set,
            printAnsArray : radioFunc(ansArray),
            setString: setString,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Universal Set, Empty Set",
            text = "All sets in set theory are assumed to belong to some fixed large set called the universal set, denoted by " + universal + ". Depending on the application of set theory, this universal set can be defined as infinite or finite. For example, if we say " + universal + setU + ", the only sets that can exist within this universe are subsets of " + universal + ". An example of an application of the universal set would be to define the students of a high school as the universal set, and subsets belonging to that universal set would include the freshman class, the AP Calculus class, and students with a 3.5 - 4.0 GPA. \n\nThe empty set, denoted " + empty + " is a set with no elements. There is only one empty set. For example, if no students at the high school from above had straight As, the subset of students with a 4.0 would be the empty set (no one has this high of a GPA). The empty set is regarded as a subset of every other set.",
            set = generateSet(),
            question = "Let " + universal + " = " + set.setString + " . What is the cardinality of " + universal + " and " + empty + ", respectively?",
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: set.printAnsArray,
            answer: set.answer
        }     
    }

    window.emptyAndUniversalSets = {
        questionAndAnswer : questionAndAnswer
    }
     var setU = katex.renderToString(" = \\{a, b, c, d, e\\}");
})();