document.getElementById('submit_btn').addEventListener('click', function(){
    const mail = document.getElementById('user_mail');
    const userMail = mail.value;
    const pass = document.getElementById('user_pass');
    const userPass = pass.value;
    
    if(userMail == 'bank@gmail.com' && userPass == 'secret'){
       window.location.href= 'banking.html';
       
    }
    else{
        alert('wrong username or password!');
    }

})