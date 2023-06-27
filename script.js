

const submit = document.getElementById('confirm-password');
submit.addEventListener("change", () =>{
    
    let password = document.getElementById('password').value;
    console.log(password);
    let confirmPassword = document.getElementById('confirm-password').value;
    if(password === confirmPassword){
        let textConfirmation = document.querySelector('form');
        let passwordChecked = document.createElement('p');
        passwordChecked.innerText = 'Passwords match';
        passwordChecked.style.color = 'green';
        textConfirmation.appendChild(passwordChecked);
        document.querySelector('#submit').disable = true;
    } else{
        let textConfirmation = document.querySelector('form');
        let passwordChecked = document.createElement('p');
        passwordChecked.innerText = "Passwords don't match";
        passwordChecked.style.color = 'red';
        textConfirmation.appendChild(passwordChecked);
        document.querySelector('#submit').disable = true;
    }
})


// function onSubmit(event){
//     const test = document.querySelector('#password');
//     const test1 = document.createElement('p');
//     test1.innerText = test.value;
//     test.appendChild(test1);
//     console.log(event.target.value)
// }