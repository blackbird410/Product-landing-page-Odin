const btn =  document.querySelectorAll('.btn');

function alertFunction() {
    alert("Sorry! Option not available for the moment.");
}

btn.forEach((button) => {
    button.addEventListener('click', alertFunction);
});
