

// for(let i=0;i<=10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*2000)
    
// }

let i =1
 let loopatopper = setInterval(()=>{
    console.log(i);
    i++;
    if(i>10){
    clearInterval(loopatopper)
}
},2000)
  