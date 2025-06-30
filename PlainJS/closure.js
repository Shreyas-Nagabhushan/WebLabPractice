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

/*
Write a JavaScript program using closures to manage student academic data. Accept USN, Subject Code, Subject Name, CIE Marks, and SEE Marks. Use
losures to keep CIE and SEE marks private. write a method to compute an
eturn the total marks. Display student details with total
*/

function student(usn, code, name, cie, see)
{
    function getTotal()
    {
        return cie + see; 
    }

    return function()
    {
        console.log("USN: ", usn); 
        console.log("CODE: ", code); 
        console.log("Name: ", name);
        console.log("Total Marks: ", getTotal()); 
    }
}

const student1 = student("cs139", "CS51", "OS", 49, 45); 

student1(); 
// Implement a GET route to display all students interning at "Infosys".

// find(
//     {
//         $expr: {
//             $lt: [
//                 {$subtract: ['total', 'occupied']}, 
//                 10
//             ]
//         }
//     }
// )

find({branch: 'cse', sem: '6'})

find({$and : []})

updateOne({id: id}, {
    $set: {count : count+1}
})

// const getter = getName();
// console.log(getter(2.45)); 
// console.log(['h', 'y']['1'])

