(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(4, 5),
            setCopy = set
            setString = setPrint(set),
            ans1 = setRemoveElem(setCopy, 1),
            ans2 = setRemoveElem(setCopy, 2),
            ans3 = setRemoveDups(setCopy),
            helperElem = _.sample(set),
            helperSet = [helperElem],
            ans4 = _.union(helperSet, set),
            ansArray = [setPrint(ans1), setPrint(ans2), setPrint(ans3), setPrint(ans4)],
            answer = [2, 3];
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
            question = "Select all sets that are equivalent to " + set.setString + ".",
            answer = set.answer;
        return {
            title: title,
            question: question,
            answerType: set.printAnsArray,
            answer: set.answer
        }     
    }

    window.subsets2 = {
        questionAndAnswer : questionAndAnswer
    }
     
})();