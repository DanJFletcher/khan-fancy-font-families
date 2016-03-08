var familyNames = ["sans-serif", "serif", "fantasy", "monospace", "cursive"];
var isValidFamily = function(family) {
    for (var i = 0; i < familyNames.length; i++) {
        if (family.toLowerCase() === familyNames[i].toLowerCase()) {
            return true;
        }
    }
    return false;
};

var isQuotedFamily = function(family) {
    for (var i = 0; i < familyNames.length; i++) {
        if (family === "\"" + familyNames[i] + "\"") {
            return true;
        }
    }
    return false;
}; 
var familyValidM = $._("Are you using a generic family name that will work in all browsers? As a reminder, the options are: ") + familyNames.join(", ");

var isTwoFamilies = function(family) {
    return family.indexOf(",") > -1;
};

var twoFamiliesM = $._("Are you specifying two families for a property? For this challenge, only specify one family per font-family property.");


staticTest($._("Change the font families"), function() {
    var result = null;
    var descrip = $._("This webpage displays the theme songs from a few famous TV families. Each of the lyrics paragraphs have `*id*`'s, but the CSS rules for them have no properties yet. Add a `*font-family*` property to each of the CSS rules, using a _generic family name_ that works for all computers. Choose a different font family for each rule.\n\nHere's a list of generic font families; sans-serif, serif, fantasy, monospace, and cursive.");
    
    var displayP = "";
    
    var familiesP = "#flinstones { font-family: $ff1} #jetsons {font-family: $ff2} #addams { font-family: $ff3}";
    
    var familiesValidC = function($ff1, $ff2, $ff3) {
        return isValidFamily($ff1) && isValidFamily($ff2) && isValidFamily($ff3);
    };
    var quotedFamiliesC = function($ff1, $ff2, $ff3) {
        return isQuotedFamily($ff1) || isQuotedFamily($ff2) || isQuotedFamily($ff3);
    };
    
    var twoFamiliesC = function($ff1, $ff2, $ff3) {
        return isTwoFamilies($ff1) || isTwoFamilies($ff2) || isTwoFamilies($ff3);
    };
    
    var familiesDiffC = function($ff1, $ff2, $ff3) {
        return $ff1 !== $ff2 && $ff1 !== $ff3;
    };
    
    result = cssMatch(familiesP);
    
    if (passes(result)) {
        if (passes(cssMatch(familiesP, twoFamiliesC))) {
            result = fail(twoFamiliesM)
        } else if (passes(cssMatch(familiesP, quotedFamiliesC))) {
            result = fail($._("When using generic family names, you shouldn't surround them in quotes."));
        } else if (!passes(cssMatch(familiesP, familiesValidC))) {
            result = fail(familyValidM);
        } else if (!passes(cssMatch(familiesP, familiesDiffC))) {
            result = fail($._("Are you using different font families for each of the families?"))
        }
    }
    
    if (!htmlMatches("#flinstones") || !htmlMatches("#jetsons") || !htmlMatches("#addams")) {
        result = fail($._("Did you remove the id attributes from the <p> tags? Keep those ids, so that your CSS rules apply to something!"));
    }
    assertMatch(result, descrip, displayP);
});

staticTest($._("Change the base font family"), function() {
    var result = null;
    var descrip = $._("Rember how to use element selectors from _CSS Basics_? Use the `*body*` selector to make a new CSS rule that changes the `*font-family*` of the entire page.");
    var displayP = "";
    
    var bodyFamilyP = "body { font-family: $ff}";
    
    var familyValidC = function($ff) {
        return isValidFamily($ff);
    };
    
    var twoFamiliesC = function($ff) {
        return isTwoFamilies($ff);
    };
    
    result = cssMatch(bodyFamilyP);
    if (passes(result)) {
        if (passes(cssMatch(bodyFamilyP, twoFamiliesC))) {
            result = fail(twoFamiliesM);
        } else if (!passes(cssMatch(bodyFamilyP, familyValidC))) {
            result = fail(familyValidM);
        }
    } else {
        if (cssMatches("#body { }") || htmlMatches("body[id]")) {
            result = fail($._("You shouldn't need to use ids to select the body tag, your selector can be simpler than that."));
        } else if (htmlMatches("body[style]")) {
            result = fail($._("Instead of using an inline `style` attribute, can you instead add a CSS rule to the `<style>` tag that styles the body?"));
        }
    }
    assertMatch(result, descrip, displayP);
});