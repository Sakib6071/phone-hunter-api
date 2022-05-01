function findPhone(){
    const searchTextField=document.getElementById('searchText');
    const searchText=searchTextField.value;
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data.data))

}
function showData(data){
    console.log(data);
    const alertFiled= document.getElementById('alertMessage');
    const phoneContainer=document.getElementById('phone-container');
    alertFiled.textContent="";
    phoneContainer.textContent="";
    document.getElementById('phoneDetails').textContent="";
    if(data.length==0){
        
        const p=document.createElement('p');
        p.innerText="Search result not found";
        p.style.color = "red";
        p.style.fontSize = "30px";
        p.style.textAlign="center"
        p.style.fontWeight="bold"
        alertFiled.appendChild(p);
    }else{


            for(let i=0;i<20;i++){
                div=document.createElement('div');
                div.innerHTML=`
                <div class="card w-75 mx-auto p-2">
                <img class="card-img-bottom" src="${data[i].image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Name : ${data[i].phone_name}</h5>
                  <p class="card-text">Brand : ${data[i].brand}</p>
                  <button onclick="explore('${data[i].slug}')" class="btn btn-primary d-block w-75 mx-auto">Explore</button>
                </div>
              </div>
                
                `
                
                phoneContainer.appendChild(div);
            }
/*         for(item of data){
            //console.log(item.slug);

        }
 */


    }





}

function explore(id){
       const url = `https://openapi.programming-hero.com/api/phone/${id}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>showSingleDetails(data))
}
function showSingleDetails(data){
    console.log(data.data)
    const singleContainer=document.getElementById('phoneDetails');
    singleContainer.textContent="";
    const div=document.createElement('div');
    singleContainer.classList.add('w-50');
    singleContainer.classList.add('mx-auto');
    singleContainer.classList.add('border');
    singleContainer.classList.add('mb-5');
    singleContainer.classList.add('p-2');
    div.classList.add('row')
    div.classList.add('gx-4')
    div.innerHTML=`
    <div class="image col-md-6 col-lg-4">
      <img src="${data.data.image}" alt="">
  </div>
  <div class="details col-md-6 col-lg-8">
      <h4>Name : ${data.data.name}</h4>
      <h5>Brand : ${data.data.brand}</h5>
      <span>${data.data.releaseDate? data.data.releaseDate : 'Release Date Not Found'}</span></br>
      <span>Sensors :${data.data.mainFeatures.sensors[0]} ${data.data.mainFeatures.sensors[1]} ${data.data.mainFeatures.sensors[2]} </span></br>
      <span class="text-primary">Others : </span></br>
      <span>WLAN : ${data?.data?.others?.WLAN? data?.data?.others?.WLAN:'no'}</span></br>
      <span>Bluetooth : ${data?.data?.others?.Bluetooth? data?.data?.others?.Bluetooth:'no'}</span></br>
      <span>GPS : ${data?.data?.others?.GPS? data?.data?.others?.GPS:'no'}</span></br>
  </div>

    `
    singleContainer.appendChild(div);
}