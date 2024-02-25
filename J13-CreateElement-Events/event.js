// ***********EVENTS****************//
// ! event tanımlamaları ilk yöntem 
//? ÖRNEĞİN:    ADD NEW ITEM  başlığının üzerine mouse geldiğinde bir olay istiyorum bir değişiklik istiyorum .MESELA BİR ALERT ÇIKSIN İSTİYORUM.
// selektorler
 const h2 =  document.querySelector(".add-item h2")
 
//  event tanımlamaları
// *mouse h2 elemntinin üzerine geldiğinde tetiklenir.
 
h2.onmouseover = function(){
    alert("mouse over")
 }

h2.onmouseover = function(){
    h2.style.color ="red"
 }

// birden fazla özellik için: classlist.add("","")
 h2.onmouseover = function(){
    h2.classList.add ("red","center") //bu şekilde oluyor ama geri düzelmiyor classlarını aldığı gibi kalıyor.

   
 } 
 
 // mouse ayrıldığında ikinci bir event yazabiliriz. onmouseout
// *arrow function ile yaptık bunu da 
h2.onmouseout=()=>{
    h2.classList.remove("red","center")
}

// ?örnek: onload eventi

const body = document.querySelector("body")

body.onload=function(){
    alert("uygulama yüklendi...")
}
// **DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
 // uygulama hemöen yüklendikten sonra inputun fokuslanmasını istiyorum.yani içerik yüklendikten sonra onload olduktan sonra hemen inputa yazab,ileyim.
const myinput = document.getElementById("input")
body.onload=function(){
   
    myinput.focus()
}

// ?NOT DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim , link gibi içeriklerin yüklenmesini benklmez)

// body.DOMContentLoaded=function(){
   
//     myinput.focus()
// }