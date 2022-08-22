const inputs = document.querySelectorAll('.input');
const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleChange = () => {
    const [username,password] = inputs;

    if(username.value && password.value.length >= 8)
    {
        button.removeAtribute('disabled');
    }
}

inputs.forEach((input) => input.addEventListener('input',handleChange));