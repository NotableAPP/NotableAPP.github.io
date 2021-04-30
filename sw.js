self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('notableapp').then(function(cache) {
        return cache.addAll([
          'https://notableapp.github.io/',
          'https://notableapp.github.io/?openTask=true',
          'index.html',
          'index.html?openTask=true',
          'create.html',
          'create.html?edit=true',
          'view.html',
          'app.js',
          'style.css',
          'screen/toolbar.jpg',
          'screen/Ntmg.jpg',
          'app data/ico@max.png',
          'app data/ico@192.png',
          'app data/ico@384.png',  
          'app data/ico@512.png',
          'app data/Mail.png',
          'app data/Sms.png',
          'app data/598px-WhatsApp.svg.png',
          'app data/1024px-Telegram_logo.svg.png',
          'app data/done.png', 	
          'app data/edit.png',
	  'res/bs.css',
          'res/bs.js',
          'res/ghmdsindre.css',	 
          'res/sd.js',
          'res/share.js',
          'res/swalt@codeninja02.js' 	
        ]);
      })
    );
   });
   
self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
