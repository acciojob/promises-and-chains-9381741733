//your JS code here. If required.
// Event listener for form submission
document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const name = document.getElementById('name').value.trim();

    // Validate inputs
    if (!name || isNaN(age)) {
        alert('Please enter valid details.');
        return;
    }

    // Create and handle promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(message => alert(message))
    .catch(error => alert(error));
});

