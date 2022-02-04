let shareBtn = document.querySelectorAll("#share-btn");
let profile = document.querySelector(".profile");
let container = document.querySelector(".container");
let social = document.querySelector(".social")

shareBtn[0].addEventListener("click", () => {
    if (container.offsetWidth < 600) {
        profile.remove()
        container.appendChild(social)
        social.style.display = "flex"
    }
    else {
        if (social.style.visibility === '' || social.style.visibility === 'hidden') {
            social.style.visibility = "visible";
        } else {
            social.style.visibility = 'hidden'
        } 
    }
})

shareBtn[1].addEventListener("click", () => {
    if (container.offsetWidth < 600) {
        social.remove()
        container.appendChild(profile)
        profile.style.padding = "20px"
    }
})