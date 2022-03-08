const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
}

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx){
        backToTopButton.removeAttribute("hidden");
    } else {
        backToTopButton.setAttribute("hidden", true);
    }
})

function goToTop () {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
}

backToTopButton.addEventListener("click", goToTop);