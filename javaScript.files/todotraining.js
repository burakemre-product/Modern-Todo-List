// let value;

// value = document
// value = document.all
// value = document.all[2]
// value = document.all[document.all.length - 1]
// value = document.all.length

// value = document.body
// value = document.head
// value = document.location.hostname
// value = document.scripts.length
// value = document.links

// for (let index = 0; index < document.all.length; index++) {
//     console.log(document.all[index]);
// }

// HTML Collection üzerinde foreach uygulayamazsın. document bir HTML Collection
// ve foreach dönebilmek için önce array a çevirmemiz gerkeiyor.

// const collections = Array.from(document.all)

// collections.forEach(function(x){
//     console.log(x)
// })


// Get Attribute Aşağıdak ikisi aynı (Attrinbute = class, id, placceholder vs..)
// value = document.forms[1].getAttribute("class")
// value = document.forms[1].className

// value = document.forms[1].classList
// value = document.forms["..name.."]
// value = document.forms[1].method


// ELEMENT SEÇME
// Element ID ye göre seçme 
// value = document.getElementById("search-container")

// Class Name e göre seçme 
// value = document.getElementsByClassName("form-col-25")

// Element Tag a göre seçme
// value = document.getElementsByTagName("li")
// value = document.getElementsByTagName("div")

// Query Selector (CSS Selector) - Tek bir element dönüyor
// value = document.querySelector("#form-container")
// value = document.querySelector(".form-col-25")
// value = document.querySelector(".form-col-75 > Option")

// Query Selector ALL (CSS Selector) - Bütün elementleri dönüyor
// value = document.querySelectorAll(".form-col-75 > Option")
// value = document.querySelectorAll(".form-col-75")

// value = document.querySelectorAll(".form-col-75")
// value.forEach(function(x){
//     console.log(x)
// })

// Element Özellikleri
// let element;
// element = document.querySelector("#search-container")

// value = element.id
// value = element.classList
// value = element.textContent
// value = element.innerHTML
// value = element.href
// value = element.style


// Style ve Element Özellilerini Değiştirme

// let element;
// element = document.querySelector("input[name=add-todo]")

// element.className = "inherit-background"
// element.name  = "menu"
// element.style.letftmargin = "209px"
// element.style.display = "none"
// element.value = "deneme"
// element.style.color="red"
// element.textContent = "deneme"
// element.innerHTML = "<p style = '<color:green'>Todo Added</p>"

// let element;
// element = document.querySelectorAll("li")
// element.forEach(function(x){
//     x.style.color="red"
//     x.style.background = "#eee"
// })

// let element;
// element = document.querySelector("li:nth-child(2)")
// element.style.color="red"

// let element;
// element = document.querySelectorAll("li:nth-child(odd)")
// element.forEach(function(x){
//     x.style.color = "red"
// })

// DOM ELEMENTLERİ ÜZERİNDE GEZİNME 
// Child ile satır atlamaları bile alıyor
// Children ile sadece çocukları alıyor

// const todolist = document.querySelector(".todo-container")

// // let element;
// element = todolist.childNodes
// element = todolist.children
// element = todolist.children[2]
// element = todolist.children[1].textContent = "değişti"
// element = todolist.children[1].innerHTML = "değişti"
// element = todolist.childElementCount
// element = todolist.children[1].children
// element = todolist.children[1].children.length
// element = todolist.firstElementChild.firstElementChild.style.color = "red"

// element = todolist.parentElement
// element = todolist.parentElement.parentElement

// const todo = todolist.children[1]
// element = todo.previousElementSibling
// element = todo.nextElementSibling.nextElementSibling


// YENİ ELEMENT OLUŞTURMA (Create Element - Append - Append Child / methods)
// const newlink = document.createElement("input")
// const todos = document.querySelector(".todo-container")

// newlink.id = "clear-element"
// newlink.type = "button"

// // Text Content
// // newlink.textContent = "Delete"  (text  content pek sağlıklı değil, son çocuğu gibi seçimler yapamıyorsun ve girdiğin text bütün divin texti oluyor. Yani sonuna ekle ortaya ekle vs yapamıyorsun)

// // Text Node
// newlink.append(document.createTextNode("Delete"))
// // todos.appendChild(newlink)
// todos.appendChild(document.createTextNode("Deneme"))


// DİNAMİK ELEMENT SİLME
// Remove Methodu
// const todos = document.querySelector("#todo-container")

// let element
// element = todos.children[1]
// element.remove()

//Remove Child Methodu
// todos.removeChild(todos.lastElementChild)
// todos.removeChild(todos.children[2])

// ELEMENTLERİ DEĞİŞTİRME(replace child)
// const search_container = document.querySelectorAll(".part")[2]
// const newelement = document.createElement("h4")
// newelement.textContent = "Search Engine"
// const oldelement = search_container.firstElementChild
// search_container.replaceChild(newelement, oldelement)

// Dinamik Attribute(class id vs) Ekleme, Değiştirme, Silme (Add, Remove, Replace, SetAttribute, Hasattribute(var mı))
// const todos = document.querySelector("#todo-container")
// todos.classList.add("new-class")
// todos.classList.remove("part")
// todos.removeAttribute("class")
// todos.classList.replace("new-class","part")
// todos.setAttribute("class","new_class2")
// todos.setAttribute("title", "new-title")
// console.log(todos.hasAttribute("class"))


// DOM EVENTLERİ (addeventlistener)

// const searchbox = document.getElementById("search-container")
// const searcharea = document.getElementById("todo-search")

// searchbox.onfocus = function(){
//     console.log("naber")
// }

// ONFOCUS methodu eski bir yöntem ve tıklayınca işe yarıyor. İnputların üzerine gelince işe yarıyor
// yani searchboxda işe yaramadı! Buttonlarda işe yarıyor mu? 

// searcharea.onfocus = function(){
//     console.log("naber")
// }

// searcharea.addEventListener("focus", function(){
//     console.log("naber")
// })

// functionda parantez içine bir değer girersen o değer event'i temsil eder. Console log ile 
// özelliklerini görebilirsin.

// searcharea.addEventListener("focus",function(e){
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)   //eventin gerçekleştiği yer(event eleemntin childrenlarında da gerçekleşmiş olabilir)
//     console.log(e.target.placeholder)
//     console.log(e.target.name)
// })

// const addtodobutton = document.querySelector("input[name=add-todo]")

// function submitForm(e){
//     console.log("todo eklendi")
//     e.preventDefault()
// }

// addtodobutton.addEventListener("submit", submitForm)

// KLAVYE EVENTLERİ (Keypress, keydown, keyup)
// Keypress sadece harfler ve sayılar diğer ikisinde özel karakterler de var. keyup karakterden elini çekince çalışıyor.
// Keypress

// searcharea.addEventListener("keypress",run)
// document.addEventListener("keypress",run)

// function run(e){
//     console.log(e.which)  //which klavyede basılan karakterin aski tablosu değerini veriyor.
//     console.log(e.type)   // hangi method(keypress, clikc vs..) kullanıldığını gösteriyor
// }

// KeyUP ile hedeflenen yerde dinamik yazı değiştirme
// const todocontainer = document.querySelector("#todo-container")
// const todo1 = todocontainer.firstElementChild.firstElementChild

// searcharea.addEventListener("keyup",changetext)

// function changetext(e){
//     console.log(e.target)    //e.target searchare oluyor
//     console.log(e.target.value)    //e.target.value ise içine yazdığımız yazı
//     todo1.textContent = e.target.value    //todo1 in searchcontentini dinamik değiştiriyoruz.
// }

// MOUSE EVENTLERİ (Click, Double clik, Mouse up, Mouse down, Mouse Over, Mouse Out, Mouse Enter, Mouse Leave)

// const searchbox = document.getElementById("search-container")
// const searcharea = document.getElementById("todo-search")

// function run(e){
//     console.log(e.which)  //which klavyede basılan karakterin aski tablosu değerini veriyor.
//     console.log(e.type)   // hangi method(keypress, clikc vs..) kullanıldığını gösteriyor
// }

// searchbox.addEventListener("click", run)
// searchbox.addEventListener("dblclick",run)
// searchbox.addEventListener("mousedown",run)    //click ile aynı
// searchbox.addEventListener("mouseup",run)      //keyyup gibi çalışıyor. Elini mouse dan çekince işliyor.
// searchbox.addEventListener("mouseover",run)    //not: elementin içindeki diğer elementlerin üzerine geldikçe de addeventListenerda kullandığın fonksiyonu çağırır
// searchbox.addEventListener("mouseout",run)    //not: elementin içindeki diğer elementlerin üzerine geldikçe de addeventListenerda kullandığın fonksiyonu çağırır
// searchbox.addEventListener("mouseenter",run)     //not: elementin içindeki elementlerin üzerine gelince fonskyion çalışmaz

// INPUT EVENTLERİ (Focus, Blur, Paste, Copy, Cut, Run)

// function run(e){
//     console.log(e.type)   // hangi method(keypress, clikc vs..) kullanıldığını gösteriyor
// }

// searcharea.addEventListener("focus",run)      //tıklayınca
// searcharea.addEventListener("blur",run)          //element üzerinden çıkıp başka yere tıklayınca
// searcharea.addEventListener("paste",run)
// searcharea.addEventListener("copy", run)
// searcharea.addEventListener("select",run)

//EVENT BUBLE, EVENT CAPTURE VEYA DELEGATE
//bir elemente dom eventi (örn; focus, click vs) uyguladığın zaman çocuklarına ve onların da çocuklarına
//focus veya click de yapsan elemntin kendisine focus yapmış sayılırsın çünkü eventler içten en son
//parenta kadar gider.


// Local STORAGE / Key- Value

// Buttons
// const addtodo = document.querySelector("input[name=add-todo]")
// const deletetodo1 = document.querySelectorAll(".delete-icon")
// const deletetodo = document.querySelector("input[name=delete]")
// const deleteall = document.querySelector("input[name=delete-all]")

// Inputs
// const keyarea = document.querySelector("input[name=todo-topic]")
// const valuearea = document.querySelector("input[name=todo-main]")
// const searcharea = document.querySelector("input[name=todo-search]")

// Functions
// function addItem(e) {
//     localStorage.setItem(keyarea.value, valuearea.value)
// }

// function deleteItem(e) {
//     localStorage.removeItem(searcharea.value)
// }

// function deleteitemAll(e) {
//     localStorage.clear()
// }

// Events
// addtodo.addEventListener("click",addItem);

// deletetodo1.forEach(function(element) {
//     element.addEventListener("click",deleteItem)
// })

// deletetodo.addEventListener("click",deleteItem)

// deleteall.addEventListener("click",deleteitemAll)

// console.log(localStorage.getItem("burak"))



// Local Storage Array Yazma
// const todos = ["Todo1","Todo2","Todo3"]

// localStorage.setItem("todos",JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos"))


// ES6 ÖZELLİKLERİ !!!!

// Arrow Function
// const merhaba = () => {
//     console.log("merhaba")
// }

// merhaba()



// const merhaba1 = (firstname,lastname) => console.log("merhaba1",firstname, lastname)
// merhaba1("burak","özel")


// const cube = x => x*x*x   //Normalde Return demen gerekiyor fakat S6 Özelliği ile birlikte return yazmana gerek yok.
// console.log(cube(2))



// Destructing
// const arr = [200,300,400,500]
// const [number1,number2] = arr
// console.log(number1,number2)



// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

// const {a,b,e} = numbers    
// console.log(a,b,e)

// const {a:number1, b:number2, e:number3} = numbers    //yukarıdaki ile aynı
// console.log(number1,number2, number3)


// const getLangs = () => ["python","java","R"]    //S6 İle birlikte Return dememize gerek yok zaten
// const[lang1,lang2,lang3] = getLangs()
// console.log(lang1,lang2,lang3) 


// const person = {
//     name:"burak",
//     year:"1990",
//     salary:"3000",
//     showinfos: () => console.log("bilgiler gösteriliyor")
// }

// const {name:isim, year:yıl, salary:maaş, showinfos:bilgilerigöster} = person
// console.log(isim,yıl,maaş)
// console.log(bilgilerigöster())



// Spread Operator
// const langs = ["Python","Java","R","SQL"]
// console.log(langs[0],langs[1],langs[2],langs[3])
// console.log(...langs)        //yukarıdaki ile aynı

// const langs2 = ["JavaScript","C",...langs]
// console.log(langs2)

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const [a,b, ...numbers2] = numbers    //numbers2 arrayin kalan 8 elemanına sahip oldu
// console.log(a,b,numbers2)

// const addNumbers = (a,b,c) => a+b+c
// const numbers = [10,20,30]
// console.log(addNumbers(...numbers))


// For In   Değerler üzerinden değil İnddexler üzerinden geziniyor. İndexi veriyor.
// Object
// const person = {
//     name:"burak",
//     year:"1990",
//     salary:"3000"
  
// }

// for (let prop in person) {    //keyleri aldı sadece
//     console.log(prop)
// }

// for (let prop in person ) {    //keylere karşılık gelen değerleri de aldı
//     console.log(prop,person[prop])
// }

// const langs = ["Python","Java","R","SQL"]
// for(let x in langs){      //yine sadece indexleri aldı
//     console.log(x)
// }

// for (let x in langs)[       //indexlere karşılık gelen değerleri de aldı
//     console.log(x,langs[x])
// ]


// For Of       Objeceler üzerinde gezinemiyor, İndexler üzerinden değil değerler üzerinden dönüyor.form-col-25
// const langs = ["Python","Java","R","SQL"]
// for(let x of langs){
//     console.log(x)
// }

// Map()  -Key - Value şeklinde
// Oluşturma
// const myMap = new Map ()


// Set Etme
// const key1 = "Burak"            //Value ları belirleme
// const key2 = {a:10,b:20}
// const key3 = () => console.log("burak")

// myMap.set("String Değer",key1)      //key isimlerini belirleme
// myMap.set("object",key2)
// myMap.set("fonksiyon",key3)

// Veya....

// myMap.set("String Değer","Burak")
// myMap.set("object",{a:10,b:20})
// myMap.set("fonksiyon",() => console.log("burak"))
// console.log(myMap)

// Get 
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

//Eleman Sayısı
// console.log(myMap.size)

// For Each ile Map Dönme           // her eleman için önce value sonra key değerlerini dönüyor. Arada virgül olmadan
// myMap.forEach(function(key,value){
//     console.log(key,value)
// })

// For Of ile Map Dönme
// for(let key of myMap){          //Bu şekilde key ve value dan oluşan 3 tane liste dönüyor
//     console.log(key)
// }

// for(let [key,value] of myMap) {     // her eleman için önce key sonra value değerlerini dönüyor. Arada virgül olmadan.
//     console.log(key,value)
// }

// Sadece Map Keys Alma
// console.log(myMap.keys())   //{"String Değer", "object", "fonksiyon"} MapIteratorşeklinde dönüyor

// for (let key of myMap.keys()){
//     console.log(key)
// }

//Sadece Values Alma
// console.log(myMap.values())   //Map Iterator şeklinde dönüyor

// for (let value of myMap.values()){
//     console.log(value)
// }

// Arraylerden Map Oluşturma
// const array = [["key1","value1"],["key2","value2"]]
// const newMap = new Map(array)

// console.log(newMap)

// Maplerden Array Oluşturma
// myMap.set("String Değer","Burak")
// myMap.set("object",{a:10,b:20})
// myMap.set("fonksiyon",() => console.log("burak"))

// const array = Array.from(myMap)      //Bu şekilde Mapden 3 tane Array oluşuyor
// console.log(array)



// Primative veri tipleri ve Referans veri tipleri farkı
// const string1 = "mustafa"
// const string2 = "mustafa"

// if (string1 === string2) {
//     console.log("burak")
// }

// const array1 = [3,4]
// const array2 = [3,4]

// if(array1 === array2){
//     console.log("burak")
// }


// OOP ES6 ÖNCESİ
// Constructerlar ve Obje Oluşturma
// function employee(name,age,salary) {    //Constructor (yapıcı fonskiyon)
//     this.name = name
//     this.age = age
//     this.salary = salary

//     this.showinfos = () => console.log(this.name, this.age, this.salary)
// }

// const emp1 = new employee("burak",24,3000)
// const emp2 = new employee("mehmet",22,2000)

// emp1.showinfos()


// Prototype Mantığı
// JavaScript nesne tabanlı değil prototype tabanlı bir dil. Javascriptte aslında class yok.
// S6 ile birlikte class yazabiliyoruz fakat arka tarafta prototype oluşuyor.
// Her oluşturduğumuz objenin veya constructor ın içinde bir prototype var. prototype ın içinde ise
// en temelde bir object prototype ı var. Temelden dışa doğru bir miras durumu var. Bir Method çağırdı
// ğında önce oluşturduğun objenin methodlarına bakıyor, yoksa prototype ın methodlarına bakıyor,
// orada da yoksa object prototypın methodlarına bakıyor. Birinde o method varsa kullanıyor.
// Bu duruma Prototype Chain deniyor.

// function employee2(name,age,salary) {    //Constructor (yapıcı fonskiyon)
//     this.name = name
//     this.age = age
//     this.salary = salary
// }

// employee2.prototype.showinfos = () => console.log(name, age, salary)
// methodları bu şekilde prototype içine yazarsak methodlar boşuna her aynı tür objenin içinde olup fazla yer kaplamaz.


// OBJECT CREATE METHODU İLE MİRAS
// function person (){}
// person.prototype.writetest1 = () => console.log("test1")

// employee2.prototype = Object.create(person.prototype)    //employee 2 nin prototype ı person oldu.

// const burak = new employee2("burak",24,4000)
// burak.writetest1()


// CALL, APPLY Fonksiyonları  (Hepsi aynı syntax farklı)
// const object1 = {
//     number1 : 10,
//     number2 : 20
// }

// const object2 = {
//     number1 : 30,
//     number2 : 40
// }

// function shownumbers(){
//     console.log(this.number1,this.number2)
// }

// function sumnumbers(x,y){
//     console.log(this.number1 + this.number2 + x + y)
// }

// shownumbers.call(object1)   //fonsksiyon içindeki this object 1 olmuş oluyor.
// sumnumbers.call(object1,20,50)
// shownumbers.apply(object1)
// sumnumbers.apply(object1,[20,50])

// BIND (Apply ve Call a benziyor. yapısal olarak farklı. Eventlerde kullanılıyor)
// apply ve calldan farklı olarak kopya bir fonskyion üretiyor

// const copyfunction1 = sumnumbers.bind(object1)
// copyfunction1(20,50)



// ES6 SONRASI CLASS YAPILARI  - SYTANTIC SUGAR
// class employee{

//     constructor(name,age,salary) {
//         this.name = name
//         this.age = age
//         this.salary = salary
//     }
//     showinfos() {
//         console.log(this.name, this.age, this.salary)
//     }
// }

// const emp1 = new employee("Murat",23,3000)

// emp1.showinfos()

// ES6 STATİK METHOTLAR
// static ile yazılmış methodu sadece class kullanabilir, class a bağlı objeler kullanamaz
// çünkü bu methodlar class ın prototype ına yazılmazlar.

// class matematik {

//     cube= (x) => {console.log(x*x*x)}

//     static cube1= (x) => {console.log(x*x*x)}   //static ile obje oluşturmadan methodu çağırabilirsin.
// }
 
// const math1 = new matematik

// console.log(math1)

// math1.cube(3)
// matematik.cube1(3)


//ES6 KALITIM

// class person{  //Super Class, Base CLass

//     constructor(name,age) {
//         this.name = name
//         this.age = age
        
//     }
//     showinfos() {
//         console.log(this.name, this.age)
//     }

// }
// const person1 = new person("Hüstü",25)
// const person2 = new person("Burak",30)

// const list1 = [person1,person2]

// console.log(list1)

// class employee extends person { //Derived Class, Child Class

//     constructor(name,age,salary) {
        
//         super(name,age)
//         this.salary = salary
//     }
//     raiseSalary(amount){   //ekstra method
//         this.salary += amount
//     }

// }

// const employee1 = new employee("burak",33,5600)
// console.log(employee1)

// const emp1 = new employee("burak",25,4000)
// emp1.showinfos()

// console.log(emp1)







// console.log(value)

// console.log(searcharea)

// console.log(newlink)

// console.log(element)

// console.log(value)
