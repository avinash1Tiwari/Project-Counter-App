const countValue = document.querySelector('#counter');

const increament = function(){
    // fetching data from UI
    let value = parseInt(countValue.innerText);
    // update data of UI
    value = value + 1;
    // set the data into the UI
    countValue.innerText = value;
};

// we can write also like this
//   function increament()
//   {
//     // fetching data from UI
//     let value = parseInt(countValue.innerText);
//     // update data of UI
//     value = value + 1;
//     // set the data into the UI
//     countValue.innerText = value;
//   }


// using arrow function
const decreament = ()=>{
     // fetching data from UI
     let value = parseInt(countValue.innerText);
     // update data of UI
     value = value - 1;
     // set the data into the UI
     countValue.innerText = value;
}