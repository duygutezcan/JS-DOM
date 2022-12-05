// Window Object
// window.document()
let value;
value = document;  // tüm html i gösterir
value = document.all; // çizmesinin sebebi artık destletlenmiyor ama çalışıyor
value = document.all.length;  // kaç nesne olduğunu gösterir
value = document.all[0]; // 0. nesne
value = document.all[document.all.length-1]
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port; // her sitenin poru var yazmıyorsa default 8080 dir bazıları özel portta çalışır firewall da o portu kapatırsak çalışmaz


console.log(value)