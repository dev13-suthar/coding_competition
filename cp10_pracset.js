// let url = "https://anapioficeandfire.com/api/characters/567";

// let fetched = fetch(url);
// fetched.then((v)=>{
//     v.json();
// }).then((r)=>{
//     console.log(r)
// })

let p = fetch("https://kontests.net/api/v1/all");
p.then((response)=>{
    console.log(response.status);
    return response.json();
}).then((contest)=>{
    // document.write(value['name'])
    console.log(contest);
    // console.log(value.books);

    let cards = document.getElementsByClassName('cardContainer');
    let ihtml = ""
    
    console.log(cards);
    let urls = {"img1":"https://media.istockphoto.com/id/1347310666/photo/processor-chip-tech-environment-blockchain-concept.jpg?s=1024x1024&w=is&k=20&c=kM2FDuKb8KNMQjUn8QEvSmAn3PIX2jE-eDLdbaV_Kw0=", "img2":"https://media.istockphoto.com/id/1406459641/photo/electronic-spreadsheet-on-analyst-auditor-computer.jpg?s=612x612&w=is&k=20&c=Pk_9sADIewQK5gon9BrrAx1u0ptSY8D-u5Az01yTseQ="};
    

    let ran_img = urls.img1;
    console.log(ran_img);

    for(let i in contest){
        console.log(contest[i]);

        
        ihtml += `
      
        <div id="cardContainer" class="row" style="justify-content: center;">
            
          <div class="cards_main">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${urls.img2}" alt="Card image cap">
                
                <div class="card-body">
                  <h5 class="card-title">${contest[i].name}</h5>
                  <p class="card-text">Start time: da ${contest[i].start_time}</p>
                  <p class="card-text">end time:  ${contest[i].end_time}</p>
                  <p class="card-text">duration: ${contest[i].duration}</p>
                  <a href="${contest[i].url}" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>

        </div>`

        

    }

    cardContainer.innerHTML = ihtml
    console.log(typeof(ihtml));
   
    // let urls = {"img1":"https://media.istockphoto.com/id/1347310666/photo/processor-chip-tech-environment-blockchain-concept.jpg?s=1024x1024&w=is&k=20&c=kM2FDuKb8KNMQjUn8QEvSmAn3PIX2jE-eDLdbaV_Kw0=", "img2":"https://media.istockphoto.com/id/1406459641/photo/electronic-spreadsheet-on-analyst-auditor-computer.jpg?s=612x612&w=is&k=20&c=Pk_9sADIewQK5gon9BrrAx1u0ptSY8D-u5Az01yTseQ="};

    // let ran_img = urls.img1;
    // console.log(ran_img);

        
        
})