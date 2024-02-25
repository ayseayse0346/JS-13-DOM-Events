//? js tarafından yeni bir element oluşturmak istiyorsak İKİ ALTERNATİFİMİZ VAR:

// 1- innerhtml --> az güvenlikli 

// 2.Sİ AŞAĞĞIDAKİ DÖRT YÖNTEM:
// 1-document.createElement("html elemnti ismi mesala --> "div" dersek bu bize bir div oluşturr, "a","section" vs. bunları belirterek istediğimiz elementi oluşturabiliriz.)--> domda tanımlanmış methot .bir element oluşturabiliyoruz.

// ! ama bu yeterli değil. o element oluştuktan sonra o elemnt bir yazı elemntiyse h1 gibi p gibi div section gibi yani içersinde textnode olan (first child) 

// 2-document.createTextNode(text) -->yani ikinci adımda ilgili element için bir textnode meydana getirmek gerejkiyor. bu da yeterli değil

// 3- document.appendChild(text düğüm) --> oluşturduğumuz bu text nodu oluşturduğumuz textnoda bağlamamız gerek.

// 4- element.removeChild(child düğüm)--> oluşturduğumuz yeni elemnti de domas bağlamamızx gerekiyor. 


//! **************************bu dört methoda örnek  ************************/ 

 

// ? yeni bir li elementi oluşturp doma eklmek istiyorum bunu js ile yapmak istiyorum

//? 1-YENİ BİR Lİ ELEMENTİ OLUŞTUR.
const newLi = document.createElement("li")

console.log(newLi); //burda yeni li elemnti oluşturduk ama içeriği boş ! hiç bir yere bağlı değilk yani doma bağlı değil bağımsız.içeriğinde bilgi deyok . şimdiş buna bişr de text oluşturalım:


// ? 2-EĞER TEXT TABANLI BİR ELEMENT İSE TEXT DÜĞÜMÜNÜ OLUŞTUR.
const textLi = document.createTextNode("Go") //içrtik oluşturdk ama hala göremiyoruz. çünkü hala bir yere bağlı değil.


// ?3-OLUŞTURULAN TEXT DÜĞÜMÜNÜ YENİ ELEMNTE BAĞLA (APPEND)
// ! önce new li ye bağlamamız lazım oluşturduğumuz texti.
newLi.appendChild(textLi) //OLUŞTU FAKAT DOMA BAĞLI DEĞİL. DOM DA NEREYE BAĞLAYACKSAK ORAYA APPAND ETMELİYİZ.


// ? 4- YENİ OLUŞTURULAN ELEMNETİ DOM TREEYE EKLE.
// ! en son doma bağlayacağız:

// document.querySelector("body").appendChild(newLi) // eklendi consoleda elemnt kısmına baktığımızda eklendiğini gördük ama en son akış  neredeyse oraya ekledi body seçtiğimniz için.
//  UL'NİN SONUNA EKLMEK İSTİYORUZ. O YÜZDEN BODY YERİNE UL YAZACAĞIZ.
document.querySelector("ul").appendChild(newLi) // artık ulnin en sonunda go görmüş oluyoruz.

// ? ÖRNEK: 2. BİR Lİ OLUŞTURALIM

const newLi2 = document.createElement("li");
newLi2.textContent = "C++";

const html = document.querySelector("ul li:nth-child(1)")

html.after(newLi2)





// ! MDN den baktık: element.before()  veya elemnet.after() bu şekilde önüne ve sonuna istediğimiz elemnti veya virgülle istediğimniz kadar element ekleyebiliriz.

// ? reactın önüne newli yi ekle yaptık
// element.before() veya elemnt.after() ile bir elementin önüne veya devamına eklemk mümkündür.

const react = document.querySelector("ul li:nth-child(4)")
react.before(newLi)  //bu şekilde go reactın önüne eklenmi,ş oldu.

// **********  Id ,Class gibi özellikleri atama   ************//
// ilgili elementlere ilgili attributleri verebiliriz.2 yöntem var:
// ?1- elemnt.attribute = "yeni değer"
// YAZMA
newLi.className = "list center bold red" //burda da birden fazla class verebiliriz.
newLi2.id = "new-li"
// newLi.type = "button"
newLi.name = "list"
// OKUMA
console.log(newLi.className);


// ? 2- satAttribute() bu methodla (atr ,değer) , getAtribute("atr")
// YAZMA
newLi2.setAttribute("class","list ")

// !birden fazla class verebiliriz. yeni bir style.css oluşturduk orda red classı oluşturup burda da veridk.
newLi2.setAttribute("class","list red bold")//kırmıxı rengini aldı 

// OKUMA
console.log(newLi2.getAttribute("class"));  

// bootstrapta da yapabiliriz.bootstarpta linki alıp html de head kısmına yapıştırdık.

newLi2.setAttribute("class","list text-success bg-warning")
newLi.className = "text-success bg-danger"

// ?3- classList.add("","") eskiyi silmez üzerine eklker
newLi2.classList.add("border", "border-success", "border-5")  
// !bunu silebiliyoruz da classlist.remove("","")
newLi2.classList.remove("bold","border")
// ! içinde şu class bulunur mu bulunmaz mı bunu da sorgulayabilirz. dönüşü true veya false olur yani boolen nbir değer.classList.contains("","")
console.log(newLi2.classList.contains("red"));
console.log(newLi2.classList.contains("text-success"));  

// ? newli nin classlistlerine bak ve değiştir.varsa değiştirir. yoksa ekler. element.classlist.toggle("")

newLi.classList.toggle("center")
newLi2.classList.toggle("bold") //bold classı yoktu onu ekledi 


