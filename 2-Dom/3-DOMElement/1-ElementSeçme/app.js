let element;

element = document.getElementById("ok")
element = document.getElementById("ipt")
element = document.getElementsByClassName("list-group-item") // html collection
element = document.getElementsByClassName("list-group-item")[0]
element = document.getElementsByTagName("li")

// // // queryselector ilk bulduğu DOM
element = document.querySelector("#drinks") // id bazında # olursa birde queryslector hep ilk elemanı getirir 
element = document.querySelector("#ok")
element = document.querySelector(".list-group-item") // . class bazında ilk list-group-item
element = document.querySelector(".list-group") 
element = document.querySelector("li")

// // // queryselectorAll DOM
element = document.querySelectorAll(".list-group-item") // tüm list group item nodelist
// tipi for each ile içinde dönülür
element.forEach(function(item){
    console.log(item)
})


console.log(element)