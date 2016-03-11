//NOTES: 
//About SETS: The underlying data structure of these sets is actually an array (not a set!).
//This decision was made so that duplicate elements could easily be displayed.


// SET NOTATION STRINGS
var un = katex.renderToString("\\cup");
window.un = un;
var inter = katex.renderToString("\\cap");
window.inter = inter;
var comp = "C".sup();
window.comp = comp;
var universal = katex.renderToString("{\\text{U}}");
window.universal = universal;
var empty = katex.renderToString("\\emptyset");
window.empty = empty;
var subset = katex.renderToString("\\subseteq");
window.subset = subset;
var properSubset = katex.renderToString("\\subset");
window.properSubset = properSubset;
// SET ALPHABET (elements that can appear in sets)
var setAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'v', 'w', 'x', 'y', 'z'];
window.setAlphabet = setAlphabet;

var arrayElemsToStrings = function(arrayInput) {
    var array = _.clone(arrayInput);
    var len = array.length;
    for(var i = 0; i < len; i++) {
        array[i] = array[i].toString();
    }
    return array;
}


// ANSWER TYPES (different types of answers that the Checkpoint Questions will answer)
var answerBox = '<form class="textAns">Answer: <input type="text" name="answer" value=""></form>';
window.answerBox = answerBox;

var answerOptions = '<form class="multTextAns"><input type="text" name="answer" value=""></form>';
window.answerOptions = answerOptions;

var checkBoxFunc = function(array) {
    var result = '<form class="checkboxAns">Pick the correct answer(s): <br>';
    len = array.length;
    for(var i = 0; i < len; i++) {
        result+= '<input type="checkbox" name="answer" value="'+ i +'">' + array[i] + '<br>';
    }
    result+= '</form>';
    return result
}
window.checkBoxFunc = checkBoxFunc;

var radioFunc = function(array) {
    var result = '<form class="radioAns">Pick the correct answer: <br>';
    len = array.length;
    for(var i = 0; i < len; i++) {
        result+= '<input type="radio" name="answer" value="'+ i +'">' + array[i] + '<br>';
    }
    result+= '</form>';
    return result
}
window.radioFunc = radioFunc;

// FUNCTIONS FOR SETS
var setGenerate = function(cardinality, display) {
    //randomly generates an array from the setAlphabet
    //cardinality is the number of elements truly in the set. display is the number of elements displayed to the user.
    if (cardinality > display){
        console.log("invalid display/cardinality");
        return;
    }
    var result = _.sampleSize(setAlphabet, cardinality);
    if (display === cardinality) {
        return result;
    } else {
        var diff = display - cardinality;
        for (var i = 0; i < diff; i+=1) {
            result.push(_.sample(result));
        }
        return result;
    }
}
window.setGenerate = setGenerate;

var setPrint = function(array) {
    //creates a string suitable for printing for the user
    var result = "\\{";
    var len = array.length - 1;
    for (var i = 0; i < len; i+=1) {
        result += array[i] + ", ";
    }
    result += array[len] + "\\}";
    return katex.renderToString(result);
}
window.setPrint = setPrint;

var charPrint = function(num) {
    return katex.renderToString(num.toString());
}

var setArrayPrint = function(array) {
    //array is an array of setArrays. returns an array of setArrays strings appropriate for printing.
    var result = [];
    var len = array.length;
    for(var i = 0; i < len; i++) {
        result.push(setPrint(array[i]));
    }
    return result;
}

var setRemoveElem = function(arrayInput, numRemove) {
    var array = _.clone(arrayInput);
    //removes numRemove number of elements from array
   for(var i = 0; i < numRemove; i+=1) {
       var remove = _.sample(array);
       for(var j = 0; j < array.length; j+=1) {
           if(array[j] === remove) {
               array.splice(j, 1);
           }
       }
    }
    return array;
}
window.setRemoveElem = setRemoveElem;

var setRemoveDups = function(array) {
    //removes all duplicates from array and returns the array
    return _.uniq(array);
}


var setUnion = function(arrayA, arrayB) {
    //returns the union of arrayA and arrayB
    return _.union(arrayA, arrayB);
}

var setIntersection = function(arrayA, arrayB) {
    //returns the intersection of arrayA and arrayB
    return _.intersection(arrayA, arrayB);
}

var setCardinality = function(array) {
    //returns the cardinality of array (int)
    return setRemoveDups(array).length;
}

var createSubsetOf = function(parentArray, cardinality) {
    //returns a new array with cardinality unique elements, which is a subset of parentArray
    var parentCardinality = setCardinality(parentArray)
    if (cardinality > parentCardinality){
        console.log("not enough elements in the superset to create a set this size");
        return;
    }
    return _.sampleSize(parentArray, cardinality);    
}

var removeSubset = function(array, subset) {
    //removes subset from array, returns a new array
    var result = [];
    var len = array.length;
    for(var i = 0; i < len; i++) {
        if($.inArray(array[i], subset) === -1) {
            result.push(array[i]);
        }
    }
    return setRemoveDups(result);
}

var symetricDifference = function(arrayA, arrayB) {
    //returns the symetric difference of the A and B; 
    //i,e., returns the union of A and B minus the intersection of A and B
    var union = setUnion(arrayA, arrayB);
    var intersection = setIntersection(arrayA, arrayB)
    return removeSubset(union, intersection);
}