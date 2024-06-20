const arr = [
  {
    id_item: "1",
    text: "home"
  },
  {
    id_item: "2",
    text: "main"
  },
  {
    id_item: "1",
    text: "bin"
  },
  {
    id_item: "4",
    text: "assets"
  },
  {
    id_item: "4",
    text: "gfx"
  },
]

const arr2 = [
  {
    img_id: "1",
    source: "github/pic1"
  },
  {
    img_id: "2",
    source: "github/pic2"
  },
  {
    img_id: "3",
    source: "github/pic3"
  },
  {
    img_id: "4",
    source: "github/pic4"
  },
]

// NOTE - The result I want to get | if it can't find the id refer to this default url source

// const result = arr.map(obj => ({ ...obj, source: 'unknown' }));

function findArray(idNum) {
  const result = arr.filter((key) => key.id_item == idNum )
  const result2 = arr2.find(key => key.img_id == idNum);
  
  // if (idNum == 3) {
  //   console.log('error');
  // }

  // else {
  //   console.log(result);
  // }

  if (result2 == 0) {
    console.log('error');
  }

  else {
    const addPlaceholderImg = result.map(obj => ({ ...obj, source: 'unknown' }));
    // console.log(addPlaceholderImg);
    console.log(result);
  }
}

findArray(1);
findArray(2);
findArray();


// NOTE - Working on it

// for (let i = 0; i < arr.length; i++) {
//   const element = arr.map(obj => ({ ...obj, id: `${i}` }))
//   console.log(element);
// }

// const assignId = 0;

// async function addNewProperty() {

//   arr.forEach(key => {
    
//     console.log(key);
//   });

// }



// addNewProperty();


// arr2.forEach(key => {
//   //  const element = key.source;
//   //  const element = new Array(key.source);
//   //  console.log(element);

//    const result = arr.map(obj => ({ ...obj, source: `${key.source}` }));

//    console.log(result);
// });