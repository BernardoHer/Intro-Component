const inputInf = document.querySelectorAll('.input-inf');
const submitBtn = document.getElementById('claimBtn');
const form = document.getElementById('form');

const checkValidity =()=>{
    const inputFirstName = document.getElementById('input-first-name');
    const inputLastName = document.getElementById('input-last-name');
    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');

    const firstNameValue = inputFirstName.value.trim();
    const lastNameValue = inputLastName.value.trim();
    const emailValue = inputEmail.value.trim();
    const passwordValue = inputPassword.value.trim();

    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstNameValue ===''){
        inputInf[0].classList.add('error');
    } else {
        inputInf[0].classList.remove('error');
    }
    if(lastNameValue ===''){
        inputInf[1].classList.add('error');
    } else {
        inputInf[1].classList.remove('error');
    }
    if(emailValue.match(regEx)){
        inputInf[2].classList.remove('error');
    } else {
        inputInf[2].classList.add('error');
    }
    if(passwordValue ===''){
        inputInf[3].classList.add('error');
    } else {
        inputInf[3].classList.remove('error');
    }

};

submitBtn.addEventListener('click',(even)=>{
    even.preventDefault();
    checkValidity();
})
