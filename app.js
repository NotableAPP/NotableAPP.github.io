
if(!localStorage.viewTobe){localStorage.viewTobe="list"; localStorage.currengView="grid"};
 if(localStorage.noteStores==undefined){
  				localStorage.noteStores=JSON.stringify({
  			"*done":{title:"Getting started with Boosted",	content:atob("PkBnZXR0aW5nLXN0YXJ0ZWQtd2l0aC1ib29zdGVkCj4+IEBub3RlLW1hbmFnZXIKPj4+IEBob3ctaXQtb3BlbnMKCj4+PiBAbmF2aWdhdG9ycwoKPj4gQGVkaXRpbmctd2l0aC1tZAoKPj4+IEBhbHJlYWR5LWxlYXJudC10aGUtbWFya2Rvd24tbGFuZ3VhZ2UKPj4+PiBAZGlmZmVyZW5jZQoKPj4+IEBpbXBvcnRhbnQtbGlua3MtZm9yLWxlYXJuaW5nLW1hcmtkb3duCgojIEdldHRpbmcgc3RhcnRlZCB3aXRoIEJvb3N0ZWQKVGhhbmtzIGZvciBpbnN0YWxsaW5nIGJvb3N0ZWQgCk5vdyBsZXQncyB0YWtlIGEgZ3VpZGUgZm9yIHRoZSBib29zdGVkIApJdCdzIHRvbyBsaWdodCB0byByZWFkCiMjIG5vdGUgbWFuYWdlcgohW05vdGUgbWFuYWdlcl0oc2NyZWVuL050bWcuanBnKQo+IE5vdGU6V2UgYXJlIHVzaW5nIHN3YWx0LmpzIHRvIGdlbmVyYXRlIGFsZXJ0cyBsaWtlIHRoaXMKClRoaXMgaXMgbm90ZSBtYW5hZ2VyIHdoaWNoIHdpbGwgaGVscCB5b3UgdG8gbmF2aWdhdGUgbm90ZSBhcyAqKndoYXRldmVyIHlvdSB3YW50ZWQqKgojIyMjIGhvdyBpdCBvcGVucwpJdCBzaW1wbHkgb3BlbnMgYnkgY2xpY2tpbmcgb24gdGhlIG5vdGUgd2hpY2ggeW91IHdhbnRlZCB0byBiZSBuYXZpZ2F0ZWQuCiMjIyMgTmF2aWdhdG9ycwoKMS4gVGhlIGZpcnN0IG5hdmlnYXRvcihzaGFyZSBidXR0b24pIHdpbGwgc2hhcmUgeW91ciBub3RlLgoxLiBUaGUgc2Vjb25kIG5hdmlnYXRvcihkZWxldGUgYnV0dG9uKSB3aWxsIGRlbGV0ZSB5b3VyIG5vdGUuCjEuIFRoZSB0aGlyZCBuYXZpZ2F0b3IoCkVkaXQgYnV0dG9uKSB3aWxsIHJlZGlyZWN0IHlvdSB0byBlZGl0IHRoYXQgbm90ZS4KMS4gVGhlIGxhc3QgbmF2aWdhdG9yKHZpZXcgYnV0dG9uKSB3aWxsIHJlZGlyZWN0IHlvdSBzbyB0aGF0IHlvdSBjYW4gc2VlIHBhZ2UKCk5vdyB5b3UgbWF5IGhhdmUgZ290IGl0LgoKIyMgRWRpdGluZyB3aXRoIG1kCiFbbWR0b29sYmFyXShzY3JlZW4vdG9vbGJhci5qcGcpClRoaXMgaXMgdG9vbGJhciB3aGljaCBoZWxwcyB5b3UgdG8gZWRpdCBldmVuIGlmIHlvdSBoYXZlIG5vdCBsZWFybnQgdGhlIAogKipNYXJrZG93bioqIAo+IEJ1dCBXZSBzdWdnZXN0IHlvdSBsZWFybnQgaXQKCipJdGFsaWMqOihJIGljb24gb24gdG9vbGJhcik6CkFmdGVyIGNsaWNraW5nIG9uIGljb24geW91IHdpbGwgZ2V0IGAqKmAgdHdvIHN0YXJzIGFuZCB5b3UgaGF2ZSB0byB3cml0ZSB5b3VyIHRleHQgaW4gdGhlbS4KKipCb2xkKio6KEIgaWNvbiBvbiB0b29sYmFyKTpBZnRlciBjbGlja2luZyBvbiBpdCxpdCB3aWxsIHByb3ZpZGUgYCoqKipgIGtlZXAgY3Vyc29yIGluIHN0YXJzIGFuZCB3cml0ZS4KIF9fdW5kZXJsaW5lX18gOiggX191X18gaWNvbiBvbiBtZCB0b29sYmFyKTphZnRlciBjbGlja2luZyBpdCdsbCBwcm92aWRlIHlvdSBgIF9fX18gYCBmb3VyIHVuZGVyc2NvcmVzIGtlZXAgeW91ciBjdXJzb3IgYXQgY2VudHJlCn5+c3RyaWtldGhyb3VnaH5+Oih+fnN+fiBpbiB0b29sYmFyKTppdCdsbCBwcm92aWRlIHlvdSBgfn5+fmAgeW91IGhhdmUgdG8ga2VlcCBjdXJzb3IgYmV0d2VlbiBpdCBhbmQgd3JpdGUuCltsaW5rXSgjKTooIFvwn5SXXSgjKSBpbiB0b29sYmFyKTp0aGlzIHdpbGwgcHJvdmlkZSB5b3UgYSBkaWFsb2d1ZSBpbiB3aGljaCB5b3UgaGF2ZSB0byBwcm92aWRlIGluZm8gb2YgbGluawojIyMgYWxyZWFkeSBsZWFybnQgdGhlIG1hcmtkb3duIGxhbmd1YWdlCklmIHlvdSBoYXZlIGxlYXJudCBtYXJrZG93biB3aXRoIEdpdEh1YiBmbGF2b3VyIHRoZW4geW91IGFyZSBmcmVlIHRvIHVzZSBpdCBoZXJlCiMjIyMgZGlmZmVyZW5jZQp8R2l0SHVifEJvb3N0ZWR8CnwtLS18LS0tfAp8YEBgIGlzIHVzZWQgdG8gbWVudGlvbiBwcm9maWxlc3xgQGAgaXMgdXNlZCB0byBsaW5rIGhlYWRlcnwKCk5vIG1vcmUgZGlmZmVyZW5jZSBpcyBpbiBib29zdGVkCj4gQm9vc3RlZCBtYXJrZG93biBpcyBnZW5lcmF0ZWQgYnkgc2hvd2Rvd24uanMgJiBTdHlsZWQgYnkgc2luZHJlc29yaHVzJ3MgY3NzIHNpbWlsYXIgdG8gR2l0SHViIHVpCgojIyMgaW1wb3J0YW50IGxpbmtzIGZvciBsZWFybmluZyBtYXJrZG93bgogW0dpdEh1Yl0oaHR0cHM6Ly9ndWlkZXMuZ2l0aHViLmNvbS9mZWF0dXJlcy9tYXN0ZXJpbmctbWFya2Rvd24vKSAKIFtNQVJLRE9XTl0oaHR0cHM6Ly93d3cubWFya2Rvd25ndWlkZS5vcmcvYmFzaWMtc3ludGF4LykgCiAK"), generatedId:"1",id:"*done"}});}

$ = (str) =>{
  return document.querySelector(str);
}
$all = (str) =>{
  return document.querySelectorAll(str)
}

HTMLInputElement.prototype.setCursor = (pos) => {var tag = this;var setpos = document.createRange();var set = window.getSelection(); setpos.setStart(tag.childNodes[0], pos); setpos.collapse(true);set.removeAllRanges();  set.addRange(setpos); tag.focus(); }
for(tab of $all('.nav-link')){
  tab.addEventListener('click', function (){
    $(".nav-tabs .active").areaCurrent = null
    $(".nav-tabs .active").classList.remove("active");
    
    this.classList.add('active')
    this.areaCurrent="page";
 
    if(this.dataset.page==="notes"){
    if(localStorage.viewTobe==="list"){currentView="grid";}else{currentView="list";};
    
    
      $("div[data-notable-type=page_containt"
      ).innerHTML=`
      <div class='query--n--btnmenu'>
      <label class="form-control">
      <i style="margin:auto;" class="material-icons">search</i>
      <input placeholder="Tap to search" data-notable-type='form-control' type="search" data-search-input>
      
      </label>
      <div style="margin:auto;">
      <button class="btn mt-ico-nt" data-bs-toggle="dropdown" area-expanded="false"><i class="material-icons" style="margin:auto;" >more_vert</i></button>
      
      <ul class="dropdown-menu">
    <li><a id="view-control-drop" class="dropdown-item">${localStorage.viewTobe} view</a></li>
    <li><a class="dropdown-item" data-dark-mode-manage>dark mode</a></li>
    <li><a id="catogory-maker" class="dropdown-item">Create a catagory</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" onclick="share({url:window.location.href,title:'try now the Boosted', cont:'Boosted is best noting and task app. use it now'})">Share</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="cous.html">About us</a></li>
  </ul>
  </div>
  </div>
  <div data-search-res="true"></div>
      <div data-notable-type="all_notes">
      				
       
      <div class="under_input under_input_light">

      </div>
      
      </div>
      <div class="alert alert-primary">
      				Do you want to create note ?
      				<br><a href="create.html?create=true" class="btn btn-link">click here <i class="hidden">this link redirects to the create.html document of the site</i></a>
      </div>
      `
      $("#catogory-maker").addEventListener('click',()=>{
      				createANotesCatogory();
      });
      $("#view-control-drop").addEventListener('click', function (){
      			if(localStorage.viewTobe==="list"){createListNotes();localStorage.viewTobe="grid";$("#view-control-drop").innerHTML="grid view"}else{createGridNotes();localStorage.viewTobe="list";$("#view-control-drop").innerHTML="list view"};
      });
      if(localStorage.viewTobe==="list"){createGridNotes();}else{createListNotes();};
      var fab = document.createElement('button');
      fab.classList.add("notable-fab","btn","mt-ico-nt");
      fab.dataset.note="yes";
      $(".under_input").append(fab)
      fab.innerHTML=`<i class="material-icons" style="margin:auto;">add</i>`;
      $("#view-control-drop").addEventListener('click', function (){
      				
      });
      fab.addEventListener("click", function (){
      				window.location.assign("create.html")
      });
      
     $("input[data-search-input").addEventListener('input', function (){
     			grab_search(this.value);
     });
     $("a[data-dark-mode-manage]").addEventListener('click',function () {
     if(localStorage.mode==="dark"){
     				toggle=`<div style="width:100%;align-itmes: center; display:flex;"><span class="form-check form-switch" style="margin:auto;">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" data-check="mode" checked>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</span></div>`;
     }else{
     
     toggle=`<div style="width:100%;align-itmes: center; display:flex;"><span class="form-check form-switch" style="margin:auto;">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" data-check="mode">
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</span></div>`;
     }
     				swalt(`<label>Dark mode.<small>enable/disable by toggling following toggle</small> <hr> ${toggle} <hr> <small>then click done</small></label>`,{
     								title:'Dark mode',
     								mode: localStorage.mode||"light",
     								btnValue:"Done"
     				});
     				document.getElementById("alertBtn").addEventListener("click",function(e){
     				if($("input[data-check=mode")){
     								if($("input[data-check=mode").checked){
     												localStorage.mode="dark"
     								}else{
     								localStorage.mode="light"
     								}
     						
     								setTimeout(()=>{
     												window.location.assign('index.html')
     								},300);
     								}
     				});
     });
    }else{
      $("div[data-notable-type=page_containt").innerHTML=`
      <div class="task-container" data-task="container">
      				
      </div>
       <div class="under_input under_input_light">
           
      </div>
      `
      
      if(localStorage.taskStores){
      sync_tasks();
      };
      var fab = document.createElement('button');
      fab.classList.add("notable-fab","btn","mt-ico-nt");
      fab.innerHTML=`<i class="material-icons" style="margin:auto;">add</i>`
      fab.style.margin="auto"
      $(".under_input").append(fab)
      fab.addEventListener('click', function (e){
      				swalt(`WRITE TASK<br><small>then click done to add it.</small><hr><textarea class="alert-input" style="resize:none; outline:none;" placeholder="write here" data-text-for-task></textarea>`,{
     								title:'Add tasks',
     								mode: localStorage.mode||"light",
     								btnValue:"Done",
     								
     				});
     				document.getElementById("alertBtn").addEventListener('click',function () {
     				if($("textarea[data-text-for-task]")){
   var task = $("textarea[data-text-for-task]").value;
   if(task){
   			add_task(task);
   			sync_tasks();
   }
   };
});
      });
  }if(localStorage.mode=="dark"){  $all(".dropdown-menu").forEach(function (e){console.log(e);e.classList.add("dropdown-menu-dark","dropdownmenu-dark","dropdown-dark");});};});}
function createGridNotes() {
if($(".list-of-notes")){$('.list-of-notes').remove();}
if($(".grid-of-notes")){$('.grid-of-notes').remove();}
				var storedNotes = JSON.parse(localStorage.noteStores);
				console.log(localStorage.noteStores)
				var allNotes = document.createElement("div");
                allNotes.classList.add('grid-of-notes');
	            for(noteNum in Object.keys(storedNotes)){
	           note=storedNotes[Object.keys(storedNotes)[noteNum]]
	           if(note!=null){
					var note_ci = document.createElement('div');
					note_ci.classList.add("grid_type_note_container");
					id=note.id;
					tit=note.title;
					cnt=note.content;
				 note_ci.dataset.content=cnt;	html_id=document.createElement("code");
					html_tit=document.createElement("h2");
					html_cnt=document.createElement("div");
					html_cnt.innerHTML=sanitize(cnt);
					html_id.innerHTML=sanitize(id);
					if(note.cat){
									titi=`${sanitize(tit)} <small style="font-size:10px;"class="badge bg-dark">${sanitize(note.cat)}</small>`;
					}else{
					    titi=tit;
					}
					html_tit.innerHTML=titi;
					html_cnt.classList.add("cont");
					note_ci.append(html_tit,html_id,html_cnt);
					allNotes.append(note_ci);
					note_ci.dataset.nid=tit;
					note_ci.dataset.idON=id;
				note_ci.dataset.query=`s-${note.generatedId}`;	
					note_ci.addEventListener('click', function (e){
									swalt(`
												what	would you like to do with
												<b>	${sanitize(this.dataset.nid)}</b>.
													<br><hr><div id="newBtnL" style="width:100%; display:flex;justify-content: center;">
													
											</div>
												`,{
																title:"note manager",
																mode: localStorage.mode||"light"
												});
												
										var delB = document.createElement("button");
										var par = this;
										var view = document.createElement('button');
										view.classList.add("btn","mt-ico-nt");
										view.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">preview</i>"
										view.addEventListener("click", function (e){
												sessionStorage.con=		par.dataset.content;
												sessionStorage.title=par.dataset.nid;
												sessionStorage.id=par.dataset.idON;
												window.location.assign('view.html')
										});
									delB.addEventListener("click", function (){
																del(par.dataset.idON);
												});	delB.classList.add("btn","mt-ico-nt");
										delB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">delete</i>"
										var ediB = document.createElement("button");
										
									ediB.addEventListener("click", function (){
																
				window.location.assign("create.html?edit=true")	;					sessionStorage.i=par.dataset.idON;
																sessionStorage.cnt=par.dataset.content;
																
												});
												ediB.classList.add("btn","mt-ico-nt");
										ediB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">edit</i>"
										var shareB =		document.createElement("button");
										shareB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">share</i>"
										shareB.classList.add("btn","mt-ico-nt");
										$("#newBtnL").append(shareB,delB,ediB,view);
										
								shareB.addEventListener("click", function (){
																share({title:par.dataset.nid,url:window.location.href,cont:par.dataset.content+"\n this code will work on markdown editor"})
												});
					});
					}
				}
	$("div[data-notable-type=all_notes]").append(allNotes)
	
}
function createListNotes() {
if($(".list-of-notes")){$('.list-of-notes').remove();}
if($(".grid-of-notes")){$('.grid-of-notes').remove();}
				var storedNotes = JSON.parse(localStorage.noteStores);
				console.log(localStorage.noteStores)
				var allNotes = document.createElement("div");
                allNotes.classList.add('list-of-notes');
	            for(noteNum in Object.keys(storedNotes)){
	           note=storedNotes[Object.keys(storedNotes)[noteNum]]
	           if(note!=null){
					var note_ci = document.createElement('div');
					note_ci.classList.add("list_type_note_container");
					id=note.id;
					tit=note.title;
					cnt=note.content;
				 note_ci.dataset.content=cnt;	html_id=document.createElement("code");
					html_tit=document.createElement("h2");
					html_cnt=document.createElement("div");
					
					html_cnt.innerHTML=sanitize(cnt);
					html_id.innerHTML=sanitize(id);
					if(note.cat){
					html_tit.innerHTML=sanitize(tit)+` <small style='font-size:10px;' class="badge bg-dark">${sanitize(note.cat)}</small>`;
					}else{
					html_tit.innerHTML=sanitize(tit);
					}
					html_cnt.classList.add("cont");
					note_ci.append(html_tit,html_id,html_cnt);
					allNotes.append(note_ci);
					note_ci.dataset.nid=tit;
					note_ci.dataset.idON=id;
					note_ci.dataset.query=`s-${note.generatedId}`;
										note_ci.addEventListener('click', function (e){
									swalt(`
												what	would you like to do with
												<b>	${sanitize(this.dataset.nid)}</b>.
													<br><hr><div id="newBtnL" style="width:100%; display:flex;justify-content: center;">
													
											</div>
												`,{
																title:"note manager",
																mode: localStorage.mode||"light"
												});
													var par = this;
										var view = document.createElement('button');
										view.classList.add("btn","mt-ico-nt");
										view.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">preview</i>"
										view.addEventListener("click", function (e){
												sessionStorage.con=		par.dataset.content;
												sessionStorage.title=par.dataset.nid;
												sessionStorage.id=par.dataset.idON;
												window.location.assign('view.html')
										});
										var delB = document.createElement("button");
									
									delB.addEventListener("click", function (){
																del(par.dataset.idON);
												});	delB.classList.add("btn","mt-ico-nt");
										delB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">delete</i>"
										var ediB = document.createElement("button");
										
									ediB.addEventListener("click", function (){
																
				window.location.assign("create.html?edit=true")	;					sessionStorage.i=par.dataset.idON;
																sessionStorage.cnt=par.dataset.content;
																
												});
												ediB.classList.add("btn","mt-ico-nt");
										ediB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">edit</i>"
										var shareB =		document.createElement("button");
										shareB.innerHTML="<i class=\"material-icons\" style=\"margin:auto\">share</i>"
										shareB.classList.add("btn","mt-ico-nt");
										$("#newBtnL").append(shareB,delB,ediB,view);
										
								shareB.addEventListener("click", function (){
																share({title:par.dataset.nid,url:window.location.href,cont:par.dataset.content})
												});
					});
					}
				}
	$("div[data-notable-type=all_notes]").append(allNotes)
	
}
createANotesCatogory = () =>{
				var allNotesForCat = JSON.parse(localStorage.noteStores);
				var container = document.createElement("div");
				container.classList.add("alert-super-container",`alert-${localStorage.mode}`);
				var setUp = document.createElement("div");
				container.append(setUp);
				setUp.classList.add("alert-container");
				var ti = document.createElement("div");
				ti.classList.add("alert-heading")
				ti.innerHTML=`
				<h4>Create a catagory</h4>
				<input class="alert-input" placeholder="Enter name for the catogary" data-cat-g>
				
				`;
			  var p = document.createElement("div");
			  p.classList.add('alert-paragraph');
			  setUp.append(ti);
			  setUp.append(p);
			  p.innerHTML="select the notes for catogary"
			  gotEx=0;
				for(note of Object.values(allNotesForCat)){
if(note!=null){
								if(!note.cat){
								gotEx+=1;
												nt = document.createElement("label");
												nt.classList.add("simPreview");
												nt.innerHTML=`
												
												<input class="form-check-input inp_cat" type="checkbox" data-note-id="${note.id}" id="flexCheckDefault">
 
												<h4>${sanitize(note.title)}</h4>
												<code>${sanitize(note.id)}</code>
												
												`;
												p.append(nt);
								}}}
								var butt = `
								<div style="display:flex;width:100%;">
												<button style='border-bottom:0;border-right:0;border-left:0;' class="alert-btn" id="cancel-for-cat">cancel</button>
												<button style='border-bottom:0;border-right:0;border-left:0;'class="alert-btn" data-btn-done-catogary-selection>Done</button>
								</div>
								`;
								setUp.innerHTML+=butt;
								if(gotEx!=0){
								document.body.append(container);
								
								$("button[data-btn-done-catogary-selection]").addEventListener("click", function (){
												$all(".inp_cat").forEach(function (e){
														var idGot = e.dataset.noteId;
														if($("input[data-cat-g]").value!=''){
														allNotesForCat[idGot].cat=$("input[data-cat-g]").value;
														localStorage.noteStores=JSON.stringify(allNotesForCat);setTimeout(function (){container.remove();window.location.assign('index.html');},100);}else{
														;
$("input[data-cat-g]").focus();$("input[data-cat-g]").style.borderColor="red";
														}
														
												});
												
								});
								$("#cancel-for-cat").addEventListener('click', function (e){
																container.remove();
												})
												}else{
								swalt(`No notes available to create catogary may all notes have catogary or there are no notes saved.`,{
												title:"no notes available",
												btnValue:"Okay",mode: localStorage.mode||"light",
								});
								}
}
$('.nav-link').click();
grab_search=(str)=>{
if(str!=""&&str!=" "*str.length){
str = str.toLowerCase();
$("div[data-search-res=true]").innerHTML="";
$("div[data-search-res=true]").style.height="100vh"
				var target = JSON.parse(localStorage.noteStores);
				for(found of Object.values(target)){
if(found!=null){			
if(found.cat){
				cat=(found.cat.toLowerCase().includes(str));
}else{
   cat=false;
}			if(found.title.toLowerCase().includes(str)||found.content.toLowerCase().includes(str)||found.id.toLowerCase().includes(str)||cat){
												$("div[data-search-res=true]").innerHTML+=`<div class="list-item-res" data-res-id="s-${found.generatedId}"><h1>${sanitize(found.title.toLowerCase()).replaceAll(str,`<b style='color:green;'>${sanitize(str)}</b>`)}</h1>
<br>
<code>${sanitize(found.id).toLowerCase().replaceAll(sanitize(str),`<b style='color:green;'>${sanitize(str)}</b>`)}	</code>											
												<hr>${sanitize(found.content.toLowerCase()).replaceAll(sanitize(str),`<b style='color:green;'>${sanitize(str)}</b>`)}</div>`;
								}
				}}
			$all(".list-item-res").forEach(function (e){
							e.addEventListener('click', function (){
											$(`div[data-query=${this.dataset.resId}]`).click();
							});
			});
}else{
$("div[data-search-res=true]").innerHTML="";
$("div[data-search-res=true]").style.height="0vh"
}
}
del=(item)=>{
				var store = JSON.parse(localStorage.noteStores);
				
				store[item]=null;
				localStorage.noteStores=JSON.stringify(store);
				window.location.assign("index.html");
}
function sanitize(str) {
				return str.replaceAll('<','&lt;');
}
add_task=(str)=>{
if(!localStorage.taskStores){
			localStorage.taskStores=JSON.stringify({"first":{title:"getting started",type:"undone",id:"first"}}	);
}
 	var allTasks = JSON.parse(localStorage.taskStores);
			allTasks["i"+Object.keys(allTasks).length]={
				title:str,
				type:"undone",
				id:"i"+Object.keys(allTasks).length
			}
			localStorage.taskStores=JSON.stringify(allTasks);
				
}
sync_tasks=()=>{
				var tasks = JSON.parse(localStorage.taskStores);
				if(tasks){
				var taskCont = document.createElement('div');
				taskCont.classList.add('taskCont')
								for(task of Object.values(tasks)){
								 if(task!="del"){
												var tskC = document.createElement('div');
												tskC.classList.add('task');
												if(task.type=="done"){
																var type = "checked";
																var cls = "disabled"
																var cali = "del";
												}else{
												   var type = "";
												   var cali = "strong";
												   	var cls = ""
												}
												tskC.innerHTML=`
										
														<div style="height:auto; display:flex;">
																		<label>
												<input type="checkbox" class="form-check-input ${cls}" style="margin:5px;" onchange="changed_type('${task.id}',this)" ${type}>												
												<div style="margin:5px">
												<${cali}>
												${task.title}
												</${cali}>
												</div>
												</label>
												<div onclick="delTask('${task.id}')"class=" mt-ico-nt" style="margin:5px;float:right;">
																<i class="material-icons">
																				delete
																</i>
												</div>
												</div>
												
												
												`;
									taskCont.append(tskC);
									}			
								}
								$("div[data-task=container]").innerHTML="";
								$("div[data-task=container]").append(taskCont);
				}
}
changed_type=(id,t)=>{
			var allTasks = JSON.parse(localStorage.	taskStores);
			if(t.checked){
						allTasks[id].type="done"	;
			}else{
			  allTasks[id].type="undone";
			}
			localStorage.taskStores = JSON.stringify(allTasks);
			sync_tasks();
}
delTask=(id)=>{
				var allTasks = JSON.parse(localStorage.	taskStores);
    allTasks[id]="del";
    localStorage.taskStores=JSON.stringify(allTasks);
    sync_tasks();
};
