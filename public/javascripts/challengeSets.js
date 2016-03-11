var topics = [
    'subsets1',
    'subsets2',
    'subsets3',
    'setOperators1',
    'setOperators2',
    'setOperators3',
    'setOperators4',
    'powerSets1',
    'countingPrinciples1',
    'countingPrinciples2'
]

var data = {
    subsets1: subsets1.questionAndAnswer(),
    subsets2: subsets2.questionAndAnswer(),
    subsets3: subsets3.questionAndAnswer(),
    setOperators1: setOperators1.questionAndAnswer(),
    setOperators2: setOperators2.questionAndAnswer(),
    setOperators3: setOperators3.questionAndAnswer(),
    setOperators4: setOperators4.questionAndAnswer(),
    powerSets1: powerSets1.questionAndAnswer(),
    countingPrinciples1: countingPrinciples1.questionAndAnswer(),
    countingPrinciples2: countingPrinciples2.questionAndAnswer()
}

var nextTopicIx = function(lastTopic) {
    //returns the next topic index
    if (lastTopic === "") {
        return 0;
    } else if (lastTopic === "countingPrinciples2"){
        return ($.inArray(lastTopic, topics));
    } else {
        return ($.inArray(lastTopic, topics) + 1);
    }
}

var lastQ = window.lastQAnswered;
var topicIndex = nextTopicIx(lastQ);
var len = topics.length - 1;
function setContent(ix) {
    $('.learnTitle').text(data[topics[ix]].title);
    $('.learnQuestion').html(data[topics[ix]].question);
    $('.learnAnswer').replaceWith($(data[topics[ix]].answerType).addClass('learnAnswer'));
}

if(topicIndex === 0) {
    $('.prevButton').attr("disabled", "disabled");
}

if($.inArray(lastQ, topics) < (topicIndex -1)) {
    $('.nextQuestion').removeAttr("disabled");
}

setContent(topicIndex);

$('.nextQuestion').click(function() {
    if(topicIndex < len)
    {
        //$(this).attr("disabled", "disabled");
        topicIndex +=1;
        setContent(topicIndex);
        $('.feedback').text(" "); //needed to set feedback to the empty string
        if ($.inArray(lastQ, topics) < topicIndex) {
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
        $('.feedback').text(" ");
        $('.nextQuestion').removeAttr("disabled");
        if (topicIndex === 0) {
            $(this).attr("disabled", "disabled");   
        }
    }
});

// SUPPORTING FUNCTIONS FOR ANSWER VALIDATION
function goodJob() {
    $('.feedback').text("Great job, keep on going!");
    $('.nextQuestion').removeAttr("disabled");
    
    if (topicIndex > $.inArray(lastQ, topics)) {
        $.ajax({
            method: "PUT",
            url: "/profile/123",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({module: 'challengeSets', lastQAnswered: topics[topicIndex], count: (topicIndex + 1), total: topics.length}),
        });
    }
    if (topicIndex === (topics.length - 1)) {
        $.ajax({
            method: "PUT",
            url: "/profile/123",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({module: 'challengeSets', lastQAnswered: topics[topicIndex], completed: 'complete', count: (topicIndex + 1), total: topics.length}),
        });
        $('.nextQuestion').text("Great Job! See Your Progress");
        $('.nextQuestion').click(function(){
           window.location.href = '/profile'; 
        });
    }
    
}

var tryAgain = function() {
    $('.feedback').text("Try again");
}

var transformUserInput = function(answerString) {
    var result = answerString.split(/[\s,]+/);
    if(result === -1) { //i.e., there are no spaces or commas
        result = [answerString];
    }
    return result;
}

//ANSWER VALIDATION FUNCTION
$('.checkButton').click(function(){
    //There are 4 main types of questions to check: text answers, answerOptions (multiple textboxes), 
    //checkboxes, or radio buttons. This checks for which one, then handles checking the answer for correctness.
    if($('.checkAns form').hasClass("textAns")) {
        //if it's a text answer box:
        var $answer = $('.textAns input').val();
        var userAnswerArray = _.uniq(transformUserInput($answer)); //_.uniq removes duplicates
        console.log("1: " + (data[topics[topicIndex]].answer))
        console.log("2: " + _.uniq(data[topics[topicIndex]].answer));
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
        console.log(correctAnswer);
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
