/*
Write a function translate() that will translate a text i.e, double every consonant and place an
occurrence of "o" in between. For example, translate("this is fun") should return the string
"tothohisos isos fofunon".
*/

function translate(text)
{
    const consonants = /[bcdfghjklmnpqrstvwxyz]/gi ;
    const result = text.replace(consonants, match => match + 'o' + match); 
    return result ;
}

console.log(translate("this is fun")); 