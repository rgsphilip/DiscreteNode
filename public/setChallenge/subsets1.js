(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(5, 5),
            setString = setPrint(set),
            ans1 = setRemoveElem(set, 1),
            ans2 = set,
            ans3 = _.union(set, [0]);
            ans4 = empty,
            ans5 = setRemoveElem(ans1, 1),
            ansArray = [setPrint(ans1), setPrint(ans2), setPrint(ans3), ans4, setPrint(ans5)],
            answer = [0, 3, 4];
        return {
            set : set,
            printAnsArray : checkBoxFunc(ansArray),
            setString: setString,
            answer: answer,
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Challenge Question: ",
            set = generateSet(),
            question = "Select all sets that are proper subsets of " + set.setString + ".",
            answer = set.answer;
        return {
            title: title,
            question: question,
            answerType: set.printAnsArray,
            answer: set.answer
        }     
    }

    window.subsets1 = {
        questionAndAnswer : questionAndAnswer
    }
     
})();
