//document.getElementById("txt").innerHTML = "Merhaba"
var el = document.getElementById("Mavi").children[0]
el.setAttribute("style" , "color:red")
el.innerHTML = "Kıpkırmızı"
//var el = document.getElementById("txt").textContent = "Merhaba" // güvenlik için daha iyi
//var el = document.getElementById("Mavi").innerHTML = "Masmavi"
// document.getElementById("Mavi").textContent = "Masmavi"

console.log(el)

