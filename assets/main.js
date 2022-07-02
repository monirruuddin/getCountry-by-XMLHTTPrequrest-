const putAll = document.querySelector(".putAll");

function getCountry(country){

const info = new XMLHttpRequest();
info.open('get',`https://restcountries.com/v3.1/name/${country}`);
info.send();


info.addEventListener("load",()=>{
  const getObject = info.responseText
  const makeObject= JSON.parse(getObject); 
  const htmlInput =`<div class="col-lg-4">
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${makeObject[0].flags.png}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${makeObject[0].name.common}</h5>
      <p class="card-text">${makeObject[0].altSpellings[1]}</p>
      <li>Capital: ${makeObject[0].capital[0]}</li>
      <li>Timezones: ${makeObject[0].timezones[0]}</li>
      <li>Timezones: ${makeObject[0].continents[0]}</li>
    </div>
  </div>
</div>`;
putAll.insertAdjacentHTML("afterend",htmlInput);


    console.log(makeObject);
});
}

getCountry("bangladesh");
getCountry("pakistan");
getCountry("argentina");
getCountry("brazil");
getCountry("uae");
getCountry("oman");
getCountry("australia");

// getUser(1, (user) => {
//   console.log(user);
//   getEnrollMent(user.name,(course)=>{
//     console.log(course);
//     getPrice(user.price,()=>{
//         console.log(`${course[0]} Price is ${user.price}`);
//     })
//   })
// });

// function getUser(num, callback) {
//   setTimeout(() => {
//     callback({
//       id: num,
//       name: "nazim uddin",
//       pass: "12345",
//       price: "4000"
//     });
//   }, 2000);
// }

// function getEnrollMent(firstName,callback){
//     setTimeout(()=>{
//         callback(["JS","React","Node.js"]);
//     },3000);
// }

// function getPrice(courseNo,callback){
//     setTimeout(()=>{
//         callback();
//     },4000);
// }


// function one(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject("2")
//     },2000);
//   })
// }

// one().then((msg)=>{
//   console.log(msg);
// }).catch((err)=>{
//   console.log(err);
// });