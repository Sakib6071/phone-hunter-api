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
    alertFiled.textContent="";
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
            console.log(item.phone_name)
        }



    }

}