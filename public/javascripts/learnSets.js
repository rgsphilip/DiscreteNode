
//LEARN MATERIAL
var topics = [
    'setDefinition',
    'subsets',
    'emptyAndUniversalSets',
    'unionIntersection',
    'complementAndSetDifference',
    'deMorganLaws',
    'algebraOfSets',
    'powerSets',
    'countingPrinciple'
]

var nextTopicIx = function(lastTopic) {
    //returns the next topic index
    if (lastTopic === "") {
        return 0;
    } else {
        return ($.inArray(lastTopic, topics) + 1);
    }
}

var data = {
    setDefinition: setDefinition.questionAndAnswer(),
    subsets: subsets.questionAndAnswer(),
    emptyAndUniversalSets: emptyAndUniversalSets.questionAndAnswer(),
    unionIntersection: unionIntersection.questionAndAnswer(),
    complementAndSetDifference: complementAndSetDifference.questionAndAnswer(),
    deMorganLaws: deMorganLaws.questionAndAnswer(),
    algebraOfSets: algebraOfSets.questionAndAnswer(),
    powerSets: powerSets.questionAndAnswer(),
    countingPrinciple: countingPrinciple.questionAndAnswer()
}

// TODO: Check the value of window.lastQAnswered and use that to initialize topicIndex
var lastQ = window.lastQAnswered;
var topicIndex = nextTopicIx(lastQ);
var len = topics.length - 1;
function setContent(ix) {
    $('.learnTitle').text(data[topics[ix]].title);
    $('.learnContent').html(data[topics[ix]].text);
    $('.learnQuestion').html(data[topics[ix]].question);
    $('.learnAnswer').replaceWith($(data[topics[ix]].answerType).addClass('learnAnswer'));
}

setContent(topicIndex);

$('.nextButton').click(function() {
    if(topicIndex < len)
    {
        $(this).attr("disabled", "disabled");
        topicIndex +=1;
        setContent(topicIndex);
        $('.feedback').text(""); //needed to set feedback to the empty string
        if (topicIndex === len) {
            $(this).attr("disabled", "disabled");
        }
        if(topicIndex === 1) {
            $('.prevButton').removeAttr("disabled");
        }
    }
});


$('.prevButton').click(function() {
    if (topicIndex > 0) {
        topicIndex -=1;
        setContent(topicIndex);
        $('.feedback').text("");
        //$('.nextButton').removeAttr("disabled");
        if (topicIndex === 0) {
            $(this).attr("disabled", "disabled");   
        }
    }
});

// SUPPORTING FUNCTIONS FOR ANSWER VALIDATION
function goodJob() {
    $('.feedback').text("Great job, keep on going!");
    $('.nextButton').removeAttr("disabled");
    
    //if (topicIndex > )
    $.ajax({
        method: "PUT",
        url: "/profile/123",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({lastQAnswered: topics[topicIndex]}),
    });
    console.log(window.lastQAnswered);
}
function tryAgain() {
    $('.feedback').text("Try again");
}
function transformUserInput(answerString) {
    var result = answerString.split(/[\s,]+/);
    if(result === -1) { //i.e., there are no spaces or commas
        result = [answerString];
    }
    return result;
}

//ANSWER VALIDATION FUNCTION
$('.checkButton').click(function(){
    //There are 3 main types of questions to check: text answers, checkboxes, or radio buttons. This checks for which one, then handles checking the answer for correctness.
    if($('.checkAns form').hasClass("textAns")) {
        //if it's a text answer box:
        var $answer = $('.textAns input').val();
        var userAnswerArray = _.uniq(transformUserInput($answer)); //_.uniq removes duplicates
        var correctAnswer = _.uniq(data[topics[topicIndex]].answer);
        if(userAnswerArray.length !== correctAnswer.length) {
            return tryAgain();
        }
        var len = correctAnswer.length;
        for(var i = 0; i < len; i++) {
            if ($.inArray(correctAnswer[i], userAnswerArray) === -1) {
                return tryAgain();   
            }	       
        }
        return goodJob();
    } else if($('.checkAns form').hasClass("multTextAns")) {
        var correctAnswer = data[topics[topicIndex]].answer;
        var userArray = [];
        var i = 0;
        $(".multTextAns input").each(function(index, element){
            userArray[i] = ($(element).val()).toString();
            console.log(userArray[i]);
            i++;
        });
        if(userArray.length !== correctAnswer.length) {
            return tryAgain();
        }
        var len = correctAnswer.length;
        console.log(userArray);
        for(var i = 0; i < len; i++) {
            if (userArray[i] !== correctAnswer[i]) {
                return tryAgain();   
            }	       
        }
        return goodJob();
    } else if ($('.checkAns form').hasClass("checkboxAns")) {
        //if it's a checkbox answer:
        var answerArray = data[topics[topicIndex]].answer; //contains the indices of the correct answers
        var rawAns = $('.checkboxAns input:checked'); //returns an array of the checked objects
        var userAns = [];
        for(var i = 0; i < rawAns.length; i++) {
            userAns[i] = parseInt(rawAns[i].value);
        }
        var flag = true;
        if (userAns.length !== answerArray.length) {
            tryAgain();
            return;
        }
        for(var i = 0; i < userAns.length; i++) {
            if($.inArray(userAns[i], answerArray) === -1) {
                tryAgain();
                flag = false;
            }
        }
        if(flag === true) {
            goodJob();
        }
    } else if ($('.checkAns form').hasClass("radioAns")) {
        //if it's a radio button answer:
        var answer = data[topics[topicIndex]].answer; //contains the index of the correct answer
        var rawAns = $('.radioAns input:checked'); //returns the checked object
        var userAns = parseInt(rawAns[0].value);
        if(userAns === answer) {
            goodJob();
        } else {
            tryAgain();
        }
    }  
});
