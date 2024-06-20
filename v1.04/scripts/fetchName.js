// NOTE - Globals, Gobal Variables

var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "1ciu5vh0to4g"); // API Key for eBirds

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// NOTE - Arrays

const birdPictures = [
    {id: '1', source: 'assets/no-img-01.jpg', picalt: "no-img.png"},
    {id: '2', source: 'assets/no-img-01.jpg', picalt: "no-img.png"},
    {id: '3', source: 'assets/no-img-01.jpg', picalt: "no-img.png"},
    {id: '4', source: 'assets/no-img-01.jpg', picalt: "no-img.png"},
    {id: '5', source: 'assets/no-img-01.jpg', picalt: "no-img.png"},
]

function resetCounter() {
    let reset = 0;
    return function() {
        if (reset >= 1) {
            // reset = 0;
            document.getElementById("name-list").innerText = '';
            console.log(`Resetted List Items, Ready For The Next Event`)
        }
        else {
            reset++; 
        }
        console.log(`Reset Value: ${reset}`)  
        return reset;
    }
}

let resetCounter1 = resetCounter(); 

function arrIndexingRange(datasheet) {
    let indexref = -1;
    return function() {
        if (indexref == datasheet.length - 1) {
            // console.log('array length exceeded! Resetting to a new value of 0')
            indexref = 0;
        }
        else {
            indexref++;   
        }
        // console.log(inx);
        console.log(`Reset Value: ${indexref}`);
        return indexref;
    }
}

let inxOne = arrIndexingRange(birdPictures); 
let inxTwo = arrIndexingRange(birdPictures);
let inxThree = arrIndexingRange(birdPictures);
let inxFour = arrIndexingRange(birdPictures);
let inxFive = arrIndexingRange(birdPictures);
let inxSix = arrIndexingRange(birdPictures);
let inxSeven = arrIndexingRange(birdPictures);

// NOTE - Fetching Functions

function fetchBirdData() {
    fetch("https://api.ebird.org/v2/data/obs/AU/recent?back=1", requestOptions)
   .then(response => response.json())
   .then(response => {
        const templateChart = 
        document.getElementById("template-name").content.cloneNode(true);
        
        templateChart.querySelector('.card-title').innerText = response[inxOne()].comName;
        templateChart.querySelector('.card-title-sci').innerText = response[inxTwo()].sciName;
        templateChart.querySelector('.card-location').innerText = response[inxThree()].locName;
        templateChart.querySelector('.card-date').innerText = response[inxFour()].obsDt;
        templateChart.querySelector('.card-img').src = birdPictures[inxFive()].source;
        templateChart.querySelector('.card-img').alt = birdPictures[inxSix()].picalt;

        document.querySelector('#name-list').appendChild(templateChart);
        console.log('Successfully Added Content!');
    

        // for (let i = 0; i < response.length; i++) {
        //     const result = response[i];
        //     const result2 = birdPictures[i];
        //     console.log(result); 

        //     const templateChart = 
        //     document.getElementById("template-name").content.cloneNode(true);
            
        //     templateChart.querySelector('.card-title').innerText = result.comName;
        //     templateChart.querySelector('.card-title-sci').innerText = result.sciName;
        //     templateChart.querySelector('.card-location').innerText = result.locName;
        //     templateChart.querySelector('.card-date').innerText = result.obsDt;
        //     templateChart.querySelector('.card-img').src = result2.source;
        //     templateChart.querySelector('.card-img').alt = result2.picalt;
    
        //     document.querySelector('#name-list').appendChild(templateChart);
        //     console.log('Successfully Added Content!');
        // }
    })
    .catch(error => console.log('error', error));
    resetCounter1();
}

fetchBirdData(); //Calls function when landing on the web page