// Welcome Message
window.onload = function () {
    alert("Welcome to My Website!");
};

// Contact Form
function submitContact() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Please fill all required fields.");
    }else{
        alert("Thank You " + name + "! Your message has been sent.");
    }
}

// Login Form
function loginUser(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username==="" || password===""){
        alert("Please enter Username and Password.");
    }else{
        alert("Login Successful! Welcome " + username);
    }
}

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});