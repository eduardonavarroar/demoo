
   // console.log("soporta sw");
 self.addEventListener('fetch' , event => {
     //console.log("hola");
     //return event.request;
     event.respondWith(fetch(event.request));
 });

 self.addEventListener('install' , e => {
    console.log("hola instalacion");
    // return event.request;
    // event.respondWith(fetch(event.request));
});
