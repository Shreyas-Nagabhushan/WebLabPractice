function getName()
{
    const names = ['Jan', "feb", "march", "april", "may", 'june', "july", "aug", "sep","oct", "nov", "dec"]; 

    return function(monthNumber)
    {
        if(monthNumber < 1 || monthNumber > 12)
            return "Bad Number"; 
        monthNumber = (monthNumber.toFixed(0));
        return names[monthNumber - 1]; 
    }
}

const getter = getName();
console.log(getter(2.45)); 
console.log(['h', 'y']['1'])

