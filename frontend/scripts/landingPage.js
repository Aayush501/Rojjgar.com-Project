const FC = document.getElementById('frm-ctnr');
const form = {
    1  :   document.getElementById('f1'), 
    2  :   document.getElementById('f2'), 
    3  :   document.getElementById('f3'), 
    4  :   document.getElementById('f4'), 
    5  :   document.getElementById('f5'), 
    6  :   document.getElementById('f6'), 
    7  :   document.getElementById('f7')
};

function showUserLoginForm(){
    FC.style.display = (form[1].style.display==='flex')? 'none' : 'block';
    form[1].style.display = (form[1].style.display==='flex')? 'none' : 'flex';
    for (const key in form) {
        if(key!=1){
            form[key].style.display = 'none';
        }
    }
}

function showUserSignupForm(){
    FC.style.display = (form[4].style.display==='block')? 'none' : 'block';
    form[4].style.display = (form[4].style.display==='block')? 'none' : 'block';
    for (const key in form) {
        if(key!=4){
            form[key].style.display = 'none';
        }
    }
}

function showSeekerLoginForm(){
    FC.style.display = (form[5].style.display==='block')? 'none' : 'block';
    form[5].style.display = (form[5].style.display==='block')? 'none' : 'block';
    for (const key in form) {
        if(key!=5){
            form[key].style.display = 'none';
        }
    }
}

function showSeekerSignupForm(){
    FC.style.display = (form[6].style.display==='block')? 'none' : 'block';
    form[6].style.display = (form[6].style.display==='block')? 'none' : 'block';
    for (const key in form) {
        if(key!=6){
            form[key].style.display = 'none';
        }
    }
}

function showUserLoginWithEmailForm(){
    FC.style.display = (form[2].style.display==='flex')? 'none' : 'block';
    form[2].style.display = (form[2].style.display==='block')? 'none' : 'block';
    for (const key in form) {
        if(key!=2){
            form[key].style.display = 'none';
        }
    }
}

function showUserLoginWithContactForm(){
    FC.style.display = (form[3].style.display==='flex')? 'none' : 'block';
    form[3].style.display = (form[3].style.display==='block')? 'none' : 'block';
    for (const key in form) {
        if(key!=3){
            form[key].style.display = 'none';
        }
    }
}

function closeButton(){
    FC.style.display = 'none';
    for (const key in form) {
        form[key].style.display = 'none';
    }
}

function returnButton(){
    form[2].style.display='none';
    form[3].style.display='none';
    form[1].style.display='flex';
}