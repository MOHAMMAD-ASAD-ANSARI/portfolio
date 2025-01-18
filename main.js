var tabLinks= document.getElementsByClassName("tabLinks");
var tabContents= document.getElementsByClassName("tabContents");
console.log(tabLinks);
console.log(tabContents);

function openTab(tabName){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:605069351.
    for (tabLink of tabLinks){
        tabLink.classList.remove('activeLink');
    }
    for (tabContent of tabContents){
        tabContent.classList.remove('activeTab');
    }
    event.currentTarget.classList.add('activeLink');
    document.getElementById(tabName).classList.add('activeTab');
}
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("RIGHT CLLICK PROTECTED");
});
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0CKqcx9lB0cqQJGQ4_gI0K8LB1av-bckEn3rEfa7uyF-Wrw2hqk-aIHCGXVWtaIa_GQ/exec'
  const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="message sent successfully"
        setTimeout(function(){
            msg.innerHTML =""
        },5000)
        msg.style.display='block';
        msg.style.transition= '0.5s' ;
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })