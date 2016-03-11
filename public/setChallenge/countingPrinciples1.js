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
            bUnionC = bAndCOnly + aBAndC,
            answer = aTotal + bTotal + cTotal - aUnionB - aUnionC- bUnionC + aBAndC;
        return {
            aTotal: aTotal,
            bTotal: bTotal,
            cTotal: cTotal,
            aUnionB: aUnionB,
            aUnionC: aUnionC,
            bUnionC: bUnionC,
            aBAndC: aBAndC,
            answer: [aOnly.toString(), bOnly.toString(), cOnly.toString()],
            aOnly: aOnly,
            bOnly: bOnly,
            cOnly: cOnly
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Challenge Question:",
            question =  "Suppose in a group of people, there are three possible movies a person could have seen: Argo, Batman, or Capote. There are: <br>" + set.aTotal + " people who have seen Argo, <br>" + set.bTotal + " people who have seen Batman <br>" + set.cTotal + " people who have seen Capote <br>" + set.aUnionB + " who saw both Argo and Batman <br>" + set.aUnionC + " who saw both Argo and Capote <br>" + set.bUnionC + " who saw both Batman and Capote <br>" + set.aBAndC + " who saw all three movies <br>"
        return {
            title: title,
            question: question,
            answerType: "<div>" + allA + "<br>" + allB + "<br>" + allC + "</div>",
            answer: set.answer
        };
    }
    
    var argo = "<span>How many people saw Argo only?</span>";
    var batman = "<span>How many people saw Batman only?</span>";
    var capote = "<span>How many people saw Capote only?</span>";
    
     var allA = $(answerOptions).clone().append($(argo)).prop('outerHTML');
     var allB = $(answerOptions).clone().append($(batman)).prop('outerHTML');
     var allC = $(answerOptions).clone().append($(capote)).prop('outerHTML');
    
    window.countingPrinciples1 = {
        questionAndAnswer : questionAndAnswer
    }
 })();