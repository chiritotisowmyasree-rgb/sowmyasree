let slide  = document.querySelectorAll(".reviewCard");
let dark = document.getElementById("dark");
let user = document.getElementById("user");
let bar = document.getElementById("bar");
let logBtn = document.getElementById("logBtn");
let bookBtn = document.getElementById("bookBtn");



console.log(slide);
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`;
})

 
function myFun(){
    slide.forEach(function(data){
        data.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();

}, 2000)


dark.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active1")
})


user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active2")
});

logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Fill Detail");
    }else{
        alert("Thanks You Logged In");
        document.querySelector(".loginPage").style.display="none"
    }

})

bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData")
});


bookBtn.addEventListener("click", function(){
    let placeName = document.getElementById("place");

    if(placeName.value == ""){
        alert("Please Fill Details")
    }else{
        alert(placeName.value + "Tour Booked");
    }
});

const planButtons = document.querySelectorAll('.tourCard button');


planButtons.forEach(button => {
    button.addEventListener('click', function() {
       
        const planDetails = button.parentElement.querySelectorAll('p');
        const planName = planDetails[0].innerText;
        const planPrice = planDetails[1].innerText;

        alert(`You have chosen the ${planName} for ${planPrice}`);

        
    });
});

const exploreButton = document.querySelector('.mainText button');


exploreButton.addEventListener('click', function() {

    const packagesSection = document.getElementById('packages');
    packagesSection.scrollIntoView({ behavior: 'smooth' });

});

const searchButton = document.querySelector('.searchBar i');
const searchInput = document.querySelector('.searchBar input');

searchButton.addEventListener('click', function() {
   
    const searchQuery = searchInput.value.trim();

    
    if (searchQuery) {
        
        window.location.href = `search-results.html?q=${encodeURIComponent(searchQuery)}`;
    } else {
       
        alert('Please enter a search query.');
    }
});


searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
     
        event.preventDefault();
        
        
        const searchQuery = searchInput.value.trim();

        if (searchQuery) {
            
            window.location.href = `search-results.html?q=${encodeURIComponent(searchQuery)}`;
        } else {
           
            alert('Please enter a search query.');
        }
    }
});
const connectButton = document.getElementById('connectBtn');
 const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password'); 

   connectButton.addEventListener('click', function(event) { 
    event.preventDefault(); 
    const name = nameInput.value.trim(); 
    const password = passwordInput.value.trim(); 
     if (name === '' || password === '') { 
        
        alert('Please enter both name and password.'); 
    } else {
         alert('Successfully connected.'); 
         nameInput.value = ''; 
         passwordInput.value = '';
        } 
    });


