// function myfunc() {
//     let reset = 0;

//     if (reset == 2) {
//         // document.getElementById("daily-list").innerText = '';
//         // reset = 0;
//         console.log(`resetted ${reset}`)
//     }
    
//     else {
//         reset++;
//         return console.log(`reset added +1 ${reset}`)
//     }
    
// }

// let counter = myfunc();

// counter()
// counter();

//NOTE - Useful Functions
function arrIndexingRange() {
    let indexref = 0;
    return function() {
        if (indexref == 4) {
            // console.log('array length exceeded! Resetting to a new value of 0')
            indexref = 0;
        }
        else {
            indexref++;   
        }
        console.log(indexref);
        return indexref;
    }
}

let inxOne = arrIndexingRange(); 

function count() {
    inxOne();
}

// count();
// count();
// count();
// count();
// count();
// count();

// function resetCounter() {
//     let reset = 0;
//     return function() {
//         if (reset == 1) {
//             document.getElementById("daily-list").innerText = '';
//             reset = 0;
//             console.log(`resetted ${reset}`)
//         }
//         else {
//             reset++; 
//         }
//         console.log(`reset added +1 ${reset}`)  
//         return reset;
//         }
//     }

//     let resetCounter1 = resetCounter(); 
//     resetCounter1();



