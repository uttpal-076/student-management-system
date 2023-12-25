
function setSessionStorage(log_name){
    sessionStorage.setItem('loginname', log_name);
}

function getSessionStorage(){
    const text = document.getElementById('user_name');
    text.textContent = sessionStorage.getItem('loginname');
}

function clearSessionStorage(){
    sessionStorage.setItem('loginname','');
}

function getSessionStorage1(){
    console.log(sessionStorage.getItem('loginname'));
}