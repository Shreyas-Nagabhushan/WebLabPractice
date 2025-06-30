const Stack = require("./Stack")

function vowelCount(sentence)
{
    const matches = sentence.match(/[aeiou]/gi); 
    const result = {}; 
    for(const c of matches)
        result[c] = (result[c] ? result[c] + 1 : 1)
    return result;
}

function notBad(sentence)
{
    return sentence.replace(/(.*)not.*?bad(.*)/i, "$1good$2"); 
}

console.log(notBad("Food is bad")); 

// const st = new Stack(); 

// console.log(vowelCount("Le Tour de France"))

// st.push(5);
// console.log(st.peek()); 