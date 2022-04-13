var appShellFiles = [
    '/web/index.html',
    '/web/article-details.html',
    '/web/log-in.html',
    '/web/privacy-policy.html',
    '/web/sign-up.html',
    '/web/terms-conditions.html',
    '/web/css/bootstrap.css',
    '/web/css/fontawesome-all.css',
    '/web/css/magnific-popup.css',
    '/web/css/styles.css',
    '/web/css/swiper.css',
    '/web/images/article-details-large.jpg',
    '/web/images/article-details-small.jpg',
    '/web/images/customer-logo-1.png',
    '/web/images/customer-logo-2.png',
    '/web/images/customer-logo-3.png',
    '/web/images/customer-logo-4.png',
    '/web/images/customer-logo-5.png',
    '/web/images/customer-logo-6.png',
    '/web/images/description-1.png',
    '/web/images/description-2.png',
    '/web/images/description-3.png',
    '/web/images/details-lightbox.png',
    '/web/images/details.png',
    '/web/images/down-arrow.png',
    '/web/images/favicon.png',
    '/web/images/header-software-app.png',
    '/web/images/features-1.png',
    '/web/images/features-2.png',
    '/web/images/features-3.png',
    '/web/images/logo.svg',
    '/web/images/testimonial-1.jpg',
    '/web/images/testimonial-2.jpg',
    '/web/images/testimonial-3.jpg',
    '/web/images/testimonial-4.jpg',
    '/web/images/up-arrow.png',
    '/web/images/video-image.png',
    '/web/js/bootstrap.min.js',
    '/web/js/jquery.easing.min.js',
    '/web/js/jquery.magnific-popup.js',
    '/web/js/jquery.min.js',
    '/web/js/popper.min.js',
    '/web/js/scripts.js',
    '/web/js/swiper.min.js',
    '/web/js/validator.min.js',

  ];
  
  self.addEventListener('install', event => {  
  
    const endInstall = caches.open('box').then( cache =>{  
      return cache.addAll(appShellFiles);
    });
  
    event.waitUntil( endInstall);
  
    //self.skipWaiting();
  });
  
  self.addEventListener('fetch', e =>{
  
    const respuesta = caches.open( 'box' ).then( cache => {
  
           fetch( e.request ).then( newRes => 
                   cache.put( e.request, newRes ));
  
           return cache.match( e.request );
  
       });
  
       e.respondWith( respuesta );
  });
