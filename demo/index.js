 let btn = document.querySelectorAll(".button");
 btn.forEach( function(b){
     
     b.addEventListener("click",function(e){
      console.log(e.target.id);
        switch(e.target.id){

            case 'red':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'violet ':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'orange':
                document.body.style.backgroundColor = e.target.id;
                break;
        }

     });
 });

