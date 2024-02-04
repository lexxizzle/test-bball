
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function sendRegistrationLink() {
    var editionId = document.getElementById('edition').value;
    var communeId = document.getElementById('commune').value;
    var lastName = document.getElementById('name').value;
    var firstName = document.getElementById('firstname').value;
    var birthday = document.getElementById('birthday').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var isFibb = document.getElementById('licenciefibb').checked;

    console.log({ editionId, commune, lastName, firstName, birthday, email, phone, isFibb })

    postData(`/register-team/${editionId}`, { editionId, communeId, lastName, firstName, birthday, email, phone, isFibb })
        .then(() => {

        }).catch((error) => { console.log({error}); })
}