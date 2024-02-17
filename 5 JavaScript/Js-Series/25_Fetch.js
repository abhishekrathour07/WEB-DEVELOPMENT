// Fetching data through async function
async function fetchData(){
    let response = await fetch("https://randomuser.me/api/");
    let data =  await response.json()
    console.log(data);
}
fetchData();

// Fetching data through call back hell
fetch("https://randomuser.me/api/").then((response)=>{
    return response.json();
})
.then((data)=>{
   console.log(data);
})
