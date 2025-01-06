
                        /* h1 skills  */
var typed = new Typed(".skill",{
    strings:[" ", "Web designer","Web Developer","Junior SEO","Programmer"],
    typespeed:250,
    Backspeed:150,
    loop:true
})
  
                                        /* tab opening and closing */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab")
}

                            /* <!-- for menu button --> */



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
    closeIcon.style.display = "block"; // Show the close icon when the menu is open
}
function closemenu(){
    sidemenu.style.right = "-200px";
    closeIcon.style.display = "none"; // Hide the close icon when the menu is closed
}


                    /* / Automatically close the menu when any item inside it is clicked */
var menuItems = sidemenu.querySelectorAll("a"); // Select all links inside the menu
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", closemenu);
});


                        /* For submit of data from website to google sheet */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzh8ydMBDxrDbdBnqwIwFhf7QzePclmwVQavsSNwUsg_VFYHKWWONdA1VvuSs84zSE/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTMl = ""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})
