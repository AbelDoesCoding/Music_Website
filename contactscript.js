const musicButton = document.querySelector("#music-button");
musicButton.addEventListener("mouseover", () => {
    musicButton.style.background = '#B02851';
});
musicButton.addEventListener("mouseout", () => {
    musicButton.style.background = 'rgb(193, 167, 203)';
});

const showsButton = document.querySelector("#shows-button");
showsButton.addEventListener("mouseover", () => {
    showsButton.style.background = '#B02851';
});
showsButton.addEventListener("mouseout", () => {
    showsButton.style.background = 'rgb(193, 167, 203)';
});

const merchButton = document.querySelector("#merch-button");
merchButton.addEventListener("mouseover", () => {
    merchButton.style.background = '#B02851';
});
merchButton.addEventListener("mouseout", () => {
    merchButton.style.background = 'rgb(193, 167, 203)';
});

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("mouseover", () => {
    homeButton.style.background = '#B02851';
});
homeButton.addEventListener("mouseout", () => {
    homeButton.style.background = 'rgb(193, 167, 203)';
});

// Form submit functions
var emailCorrect = false;

const submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", () => {
    var email = document.getElementById("email").value;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            emailCorrect = true;
        }
    }
    if (emailCorrect == false) {
        alert("You might wanna recheck that email address, friend.");
        // eventually use this part of function to block sending form info if false
    }
})

