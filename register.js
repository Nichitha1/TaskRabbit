document.querySelector('#username').addEventListener('submit',function(event){
    // security issue
    event.preventDefault()
    let isValid = true;

    //using const for strong security 
    const username = document.querySelector('#username').value;
    if(username===''){
        document.querySelector('#usernameError').textContent='Username is required';
        isValid=false;
    }
    else{
        document.querySelector('#usernameError').textContent='';
    }

    const password = document.querySelector('#password').value;
    if(password===''){
        document.querySelector('#passwordError').textContent='password is required';
        isValid=false;
    }
    else{
        document.querySelector('#passwordError').textContent='';
    }

    if(isValid){
        alert('Regsitered successfully!');
    }

});
function generatePassword() {
    var length = 0;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@*#";
    var retVal='';
    for(var i=0,n=charset.length;i<length;i++)
    {
        retVal += charset.charAt(Math.floor(Math.random()+n));
    }
    document.getElementById('password').innerText=retVal;

};
window.onload=generatePassword();