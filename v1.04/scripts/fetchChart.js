// NOTE - Globals, Gobal Variables

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "1ciu5vh0to4g"); // API Key for eBirds

// NOTE - Arrays

const birdPictures = [
  {source: 'assets/no-image.jpg', picalt: "no-img.png"},
]

// NOTE - Fetching Functions

function fetchBirdChartData() {
  fetch("https://api.ebird.org/v2/data/obs/AU/recent/maglar1?maxResults=10", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log('Tested! Bird Chart Functionality');
}

// NOTE - eCharts Init

var myChart = echarts.init(document.getElementById('main'));

// // Specify the configuration items and data for the chart
var option = {
tooltip: {
  trigger: 'item'
},
legend: {
  top: '5%',
  left: 'center'
},
series: [
  {
    name: 'Access From',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    padAngle: 5,
      itemStyle: {
        borderRadius: 8
      },
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      label: {
        show: true,
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    labelLine: {
      show: false
    },
    data: [
      { value: 44, name: 'Northern Rosella' },
      { value: 20, name: 'Pacific Heron' },
      { value: 20, name: 'Crimson Rosella' },
      { value: 20, name: 'Magpie' },
      { value: 30, name: 'Pullpin' }
    ]
  }
]
};

myChart.setOption(option);