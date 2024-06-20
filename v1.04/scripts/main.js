// NOTE - Globals, Gobal Variables

var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "1ciu5vh0to4g"); // API Key for eBirds

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// NOTE - Arrays

const birdPictures = [
    {source: 'assets/no-image.jpg', picalt: "no-img.png"},
]

//NOTE - Functions

function resetCounter() {
    let reset = 0;
    return function() {
        if (reset >= 1) {
            // reset = 0;
            document.getElementById("daily-list").innerText = '';
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

// NOTE - Fetching Functions

function fetchBirdData() {
    fetch("https://api.ebird.org/v2/data/obs/AU/recent/maglar1?maxResults=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    console.log('Tested! Silly Bird Name Functionality');
}

function fetchBirdChartData() {
    fetch("https://api.ebird.org/v2/data/obs/AU/recent?back=1&includeProvisional=true", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log('error', error));
    console.log('Tested! Bird Chart Functionality');
}

function fetchDailyBirdData() {
    fetch("https://api.ebird.org/v2/data/obs/AU/recent?back=1", requestOptions)
   .then(response => response.json())
   .then(response => {
        const entriesNum = document.getElementById('entries-num');
        const dataLength =  response.length;
        const currValue2 = document.getElementById('index-daily');
        const currValue = document.getElementById('index-daily').value;
        if (currValue2.value > response.length) {
            alert('Exceed Max Data Entries!');
            currValue2.value = response.length;
        }

        if (currValue2.value < 0) {
            alert(`No Data Entry! At index: ${currValue2.value}`)
            currValue2.value = null;
        }

        entriesNum.innerText = dataLength;
        
        for (let i = currValue; i < response.length; i++) {
            const result = response[i];
            console.log(result); 

            const templateChart = 
            document.getElementById("temp-daily").content.cloneNode(true);
            
            templateChart.querySelector('.card-title').innerText = result.comName;
            templateChart.querySelector('.card-title-sci').innerText = result.sciName;
            templateChart.querySelector('.card-location').innerText = result.locName;
            templateChart.querySelector('.card-date').innerText = result.obsDt;
    
            document.querySelector('#daily-list').appendChild(templateChart);
            console.log('Successfully Added Content!');
        }
    })
    .catch(error => console.log('error', error));
    resetCounter1();
}

fetchDailyBirdData(); //Calls function when landing on the web page 

//NOTE - Graveyard

// function generateDailyBird() {
//      fetch("https://api.ebird.org/v2/data/obs/AU/recent?maxResults=10", requestOptions)
//     .then(response => response.json())
//     .then(response => {
//         const dataList = document.getElementById('datalist');
//         const att = document.createAttribute("class");
//         att.value = 'noon';
//         document.getElementById("datalist").setAttributeNode(att);

//         response.forEach(element => {
//             const listing = document.createElement("li");
//             listing.textContent = `Common Name: ${element.comName}`;
//             dataList.appendChild(listing);  
//             });
//         })
//     .catch(error => console.log('error', error));
//     console.log('Tested! Daily Birds Functionality');
// }