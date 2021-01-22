// fonction d'incrementation de la quantité

let plus = document.getElementsByClassName('plus-btn');

for ( let btn of plus){

    btn.addEventListener('click',function(){

   btn.nextElementSibling.innerHTML ++
   somme(); 

    })
}



// fonction de la décrementation de la quantité

let moins = document.getElementsByClassName('minus-btn');

for ( let btnmoins of moins){

    btnmoins.addEventListener('click',function(){

         if (btnmoins.previousElementSibling.innerHTML > 0) {

        
   btnmoins.previousElementSibling.innerHTML --
        
   somme(); 
}

})
}



// fonction somme Total 

function somme(){
    var sum = 0;
    let prix = Array.from (document.getElementsByClassName ('qte'));
    let quantity = Array.from (document.getElementsByClassName('quantity'));
    // var pricetotalId= document.etElementById("pricetotal") 
    // console.log("prix",prix);
    // console.log("quantity",quantity);
    // console.log("pricetotal",pricetotal);
    

    for (let i=0 ; i<prix.length ; i++){

    sum = sum + (parseInt(prix[i].innerHTML) * parseInt(quantity[i].innerHTML));
    
    // console.log("Number(prix[i].innerHTML)",parseInt(prix[i].innerHTML))
    // console.log("Number(quantity[i].innerHTML)",Number(quantity[i].innerHTML))
    } 
    // console.log("suuum",sum);
// pricetotal.innerHTML=sum;
return document.getElementById('total-price').innerHTML = "$ " + sum

}




// fonction Remove

let botremove= Array.from (document.getElementsByClassName('bot2'));
let artic= Array.from (document.getElementsByClassName('article'));

for ( let i=0 ; i<artic.length ; i++){

    botremove[i].addEventListener("click",function(){

artic[i].remove();
somme(); 

    })

}


// // colorer le coeur de favoris en rouge 
let hearts = Array.from (document.getElementsByClassName('heart'));

for(let heart of hearts){

heart.addEventListener("click", function () {
 
//     // if( heart.style.fill === "red"){
//     //     heart.style.fill = "grey"
//     // }else {
//     //     heart.style.fill = "red"
//     // }
    heart.classList.toggle("red");
 })
}
