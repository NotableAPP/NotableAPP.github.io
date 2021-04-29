self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('notableapp').then(function(cache) {
        return cache.addAll([
          'https://notableapp.github.io/',
          'index.html',
          'app.js',
          'style.css',
		  'app data/',
          'app data/ico@max.png',
		  'app data/ico@192.png',
		  'app data/ico@384.png', 
		  'app data/ico@512.png',
          'app data/Mail.png',
          'app data/Sms.png',
          'app data/598px-WhatsApp.svg.png',
          'app data/1024px-Telegram_logo.svg.png',
          'cous.html',
		  'app data/note_add_black_24dp.svg', 	
          'app data/add_task_black_24dp.svg',
		  	
        ]);
      })
    );
   });
   
