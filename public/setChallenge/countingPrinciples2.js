(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var aOnly = _.random(10, 14),
            bOnly = _.random(6, 9),
            cOnly = _.random(7, 10),
            aAndBOnly = _.random(2, 4),
            aAndCOnly = _.random(4, 7),
            bAndCOnly = _.random(3, 6),
            aBAndC = _.random(1, 6),
            aTotal = aOnly + aAndBOnly + aAndCOnly + aBAndC,
            bTotal = bOnly + aAndBOnly + bAndCOnly + aBAndC,
            cTotal = cOnly + bAndCOnly + aAndCOnly + aBAndC,
            aUnionB = aAndBOnly + aBAndC,
            aUnionC = aAndCOnly + aBAndC,
            bUnionC = aAndCOnly + aBAndC,
            answer = aTotal + bTotal + cTotal - aUnionB - aUnionC- bUnionC + aBAndC;
        return {
            aTotal: aTotal,
            bTotal: bTotal,
            cTotal: cTotal,
            aUnionB: aUnionB,
            aUnionC: aUnionC,
            bUnionC: bUnionC,
            aBAndC: aBAndC,
            answer: [answer.toString()]
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Challenge Question:",
            question =  "Suppose a student can take Anthropology, Biology, or Chemistry. There are: <br>" + set.aTotal + " students total in Anthropology <br>" + set.bTotal + " students total in Biology <br>" + set.cTotal + " students total in Chemistry <br>" + set.aUnionB + " in both Anthorpology and Biology <br>" + set.aUnionC + " in both Anthopology and Chemistry <br>" + set.bUnionC + " in both Biology and Chemistry <br>" + set.aBAndC + " in all three classes. <br>How many students in total are there?"
        return {
            title: title,
            question: question,
            answerType: answerBox,
            answer: set.answer
        };
    }
    
    window.countingPrinciples2 = {
        questionAndAnswer : questionAndAnswer
    }
 })();