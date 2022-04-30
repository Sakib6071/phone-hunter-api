function findPhone(){
    const searchTextField=document.getElementById('searchText');
    const searchText=searchTextField.value;
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data.data))

}
function showData(data){
    const alertFiled= document.getElementById('alertMessage');
    const phoneContainer=document.getElementById('phone-container');
    alertFiled.textContent="";
    phoneContainer.textContent="";
    if(data.length==0){
        
        const p=document.createElement('p');
        p.innerText="Search result not found";
        p.style.color = "red";
        p.style.fontSize = "30px";
        p.style.textAlign="center"
        p.style.fontWeight="bold"
        alertFiled.appendChild(p);
    }else{


        for(item of data){
            console.log(item);
            div=document.createElement('div');
            div.innerHTML=`
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${item.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Name : ${item.phone_name}</h5>
              <p class="card-text">Brand : ${item.brand}</p>
              <a href="#" class="btn btn-primary">Explore</a>
            </div>
          </div>
            
            `
            phoneContainer.appendChild(div);
        }



    }

}