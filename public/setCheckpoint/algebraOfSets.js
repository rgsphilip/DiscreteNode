(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var answer = ["2", "5", "3", "1", "4"]
        return {
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Algebra of Sets",
            text = "The algebra of sets are useful properties and rules to use when using the union, intersection, and complementation operators. \n<span style=\"text-decoration: underline;\">Identity Laws: </span>\n" + identity1 + "\n" + identity2 + "\n<span style=\"text-decoration: underline;\">Complement Laws: </span>\n" + complement1 + "\n" + complement2 +"\n<span style=\"text-decoration: underline;\">Commutative Laws: </span>\n" + commutativeUnion + "\n" + commutativeIntersection + "\n<span style=\"text-decoration: underline;\">Associative Laws: </span>\n" + associative1 + "\n" + associative2 + "\n<span style=\"text-decoration: underline;\">Distributive Laws: </span>\n" + distributive1 + "\n" + distributive2 + "\n"
            set = generateSet(),
            question = "Match the numbered algebra rule names with the formulas: <br>1. Identity Law<br>2. Complement Law<br>3. Associative Law<br>4. Distributive Law<br>5. Commutative Law<br>",
            answer = set.answer,
            answerType = answerOptions + complement2 + "<br>" + answerOptions + commutativeIntersection + "<br>" + answerOptions + associative1 + "<br>" + answerOptions + identity1 + "<br>" + answerOptions + distributive2;
        return {
            title: title,
            text: text,
            question: question,
            answer: set.answer,
            answerType: answerType
        }     
    }

    window.algebraOfSets = {
        questionAndAnswer : questionAndAnswer
    }
     var commutativeUnion = katex.renderToString("A \\cup B = B \\cup A");
     var commutativeIntersection = katex.renderToString("A \\cap B = B \\cap A");
     var associative1 = katex.renderToString("(A \\cup B) \\cup C = A \\cup (B \\cup C)");
     var associative2 = katex.renderToString("(A \\cap B) \\cap C = A \\cap (B \\cap C)");
     var distributive1 = katex.renderToString("A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)");
     var distributive2 = katex.renderToString("A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)");
     var identity1 = katex.renderToString("A \\cup \\emptyset = A");
     var identity2 = katex.renderToString("A \\cap {\\text{U}} = A");
     var complement1 = katex.renderToString("A \\cap A^{\\mathsf{c}} = {\\text{U}}");
     var complement2 = katex.renderToString("A \\cup A^{\\mathsf{c}} = \\emptyset");
})();