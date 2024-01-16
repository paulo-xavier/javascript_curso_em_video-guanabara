const formLogin = document.getElementById('form-login'); 



var user = "User"
var password = 12345;

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()


    // const formData = new FormData(formLogin);
    
    const data = Object.fromEntries(new FormData(formLogin).entries()); 

    data.name == user && data.password == password ? window.location.replace('../../main.html') : informDeniedAccess()
    
   

})


const informDeniedAccess = () => {
    alert("Access denied!")
    document.getElementById('name').innerText = ""; 
    document.getElementById('password').innerText = "";  

}