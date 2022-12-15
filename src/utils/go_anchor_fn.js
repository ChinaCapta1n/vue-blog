export const goAnchor = selector => {
    document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
    })
}