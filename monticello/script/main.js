const form = document.querySelector('#cont-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.querySelector('.name').value;
    const userEmail = document.querySelector('.email').value;

    console.log(`Username: ${userName}, Email: ${userEmail}`);

    form.reset();
})