function createStars() {
    const container = document.querySelector("body")
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.width = ".1px"
        star.style.height = ".1px"

        star.style.top = Math.random() * 100 + "%"
        star.style.left = Math.random() * 100 + "%"

        container.appendChild(star)
    }
}

function changeMode() {
    console.log(document.querySelector("body").style.backgroundColor)
    if (document.querySelector("body").style.backgroundColor == "rgb(255, 255, 255)") {
        document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)"
        document.querySelector("i").style.color = "#fff"
        document.querySelector(".mercury").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".venus").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".earth").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".mars").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".jupiter").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".saturn").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".uranus").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".neptune").style.borderColor = "#fff transparent transparent transparent"
        document.querySelector(".pluto").style.borderColor = "#fff transparent transparent transparent"
    }
    else {
        document.querySelector("body").style.backgroundColor = "rgb(255, 255, 255)"
        document.querySelector("i").style.color = "#000"
        document.querySelector(".mercury").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".venus").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".earth").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".mars").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".jupiter").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".saturn").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".uranus").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".neptune").style.borderColor = "#000 transparent transparent transparent"
        document.querySelector(".pluto").style.borderColor = "#000 transparent transparent transparent"
    }
}

//createStars()