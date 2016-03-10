[{
    code: "<style>#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass"]
},{
    code: "<style>#flinstones{font-family:fantasy;} #jetsons{font-family:Monospace} #addams{font-family:Cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass"]
}, {
    code: "<style>#flinstones{font-family:fanatasy;} #jetsons{font-family:Monospace} #addams{font-family:Cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["It looks like you're spelling one of your family names wrong. Check your spelling."]
}, {
    code: "<style>#flinstones{font-family:\"fantasy\";} #jetsons{font-family:\"monospace\"} #addams{font-family:\"cursive\"}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["When using generic family names, you shouldn't surround them in quotes."]
}, {
    code: "<style>#flinstones{font-family:fantasy, monospace;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["Are you specifying two families for a property? For this challenge, only specify one family per font-family property."]
}, 
{
    code: "<style>#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style>",
    steps: ["Did you remove the id attributes from the <p> tags? Keep those ids, so that your CSS rules apply to something!"]
}, 
{
    code: "<style>#flinstones{font-family:bla;} #jetsons{font-family:fantasy} #addams{font-family:fantasy}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["Are you using a generic family name that will work in all browsers? As a reminder, the options are: sans-serif, serif, fantasy, monospace, cursive"]
},
{
    code: "<style>#flinstones{font-family:fantasy;} #jetsons{font-family:fantasy} #addams{font-family:fantasy}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["Are you using different font families for each of the `font-family` properties?"]
},
{
    code: "<style>#body{font-family: sans-serif;}#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass", "You shouldn't need to use ids to select the body tag, your selector can be simpler than that."]
},{
    code: "<style>#bla{font-family: sans-serif;}#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><body id='bla'><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p></body>",
    steps: ["pass", "You shouldn't need to use ids to select the body tag, your selector can be simpler than that."]
},{
    code: "<style>#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><body style='bla'><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p></body>",
    steps: ["pass", "Instead of using an inline `style` attribute, can you instead add a CSS rule to the `<style>` tag that styles the body?"]
},{
    code: "<style>body{font-family: Arial, sans-serif;}#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass", "Are you specifying two families for a property? For this challenge, only specify one family per font-family property."]
},
{
    code: "<style>body{font-family: sans-serif;}#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass", "pass"]
},
{
    code: "<style>body{font-family: bla;}#flinstones{font-family:fantasy;} #jetsons{font-family:monospace} #addams{font-family:cursive}</style><p id='flinstones'></p><p id='jetsons'></p><p id='addams'></p>",
    steps: ["pass", "Are you using a generic family name that will work in all browsers? As a reminder, the options are: sans-serif, serif, fantasy, monospace, cursive"]

},
]