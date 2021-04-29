/*Share.js by 
notable:SGI
and
gh/@codeninja02's swalt.js
thanks gh/@codeninja02
profile to codeninja
https://github.com/codeninja02

*/
/* starts code */
/*popular sites and their share links/urls*/
const urls = {
				tg:{
								fun: function (data){
window.location.assign(`								https://t.me/share/url?url=${data.url}&text=${data.text}`);				
       
				},icon:"app data/1024px-Telegram_logo.svg.png"},
				wa:{
					  fun: function (data){
					  				window.location.assign(`whatsapp://send?text=${data.text+" "+data.url}`);
					  	},
					  	
					  			att:{
					  							"data-action":"share/whatsapp/share",
					  							} ,
					  		icon:"app data/598px-WhatsApp.svg.png" 
				},
				sms:{
								icon:"app data/Sms.png",
								fun: function (data){
								console.log(data.text)
												window.location.assign(`
																sms:?body=${data.text} ${data.url}
																`)
								}
				},
				mail:{
				    icon:"app data/Mail.png",
								fun: function (data){
								
												window.location.assign(`
																mailto:?subject=${data.title}&body=${data.text} ${data.url}
																`)
								}
				}
				
				}
function share(shareData){
				var tit = shareData.title;
				var cont = shareData.cont;
				var url = shareData.url;
				swalt(`complete action using
         <div id="share-buttons" style="display:flex;margin-top:10px;">
         				
         </div>
         <br><hr>
         <div id="share-buttons-other" style="width:100%;margin:5px;">
         				
         </div>
         `,{
         				title:'share : '+ tit,
         				mode: localStorage.mode||"light"
         })
				for(shr in Object.keys(urls)){
				sh = Object.values(urls)[shr];
				thisKey= Object.keys(urls)[shr];
								var shareBtn = document.createElement("button");
								shareBtn.classList.add("shareBtns","btn","btn-outline-primary");
								shareBtn.style.backgroundImage="url('"+sh.icon+"')";
								shareBtn.dataset.name=thisKey;
								shareBtn.addEventListener('click', function (){
												urls[this.dataset.name].fun({title:tit,url:url,text:cont});
								});
								
								$("#share-buttons").append(shareBtn);
								if(sh.att){
								for(atr in Object.keys(sh.att)){
												shareBtn.setAttribute(Object.keys(sh.att)[atr],Object.values(sh.att)[atr]);
								}}
				}
			var more =	document.createElement('button');
			more.innerHTML="other applications.."
			more.classList.add('btn');
			more.style.width='100%';
			more.style.color="#408cff";
			more.addEventListener('click', function (){
							if(navigator.share){
											navigator.share({url:url, title:tit, text: cont});
							}else{
							
							swalt(`
											Browser is not compatible for this action.
											<code>navigator.share is not defined</code> <br> means : Your browser is not compatible for doing navigator.share function in browser.
											`,{
															title:"browser is not valid/compatible...",
															btnValue:"okay",
															mode: localStorage.mode
											});
							}
			});
			$("#share-buttons-other").append(more);
}
console.log("share.js loaded")
