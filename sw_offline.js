self.addEventListener('install', event => {  
    self.skipWaiting();
 });
 
 self.addEventListener('fetch' , event => {
   const offlineResp = new Response(`
         Bienvenido, 
        necesitas internet
     `);
   
   const offlineRespPro = new Response(`
     <!DOCTYPE html>
     <html lang="es">
       <head>
         <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Tivoo - Eduardo Navarro</title>
       </head>
       <body>        
         <h1> Bienvenido,
           necesitas internet </h1>
       </body>
     </html>        
   `,{
       headers: {
         'Content-Type':'text/html'
       }
     }
   );
   
   const resp = fetch(event.request)
                     .catch( () => offlineRespPro );
 
   event.respondWith( resp );
 });