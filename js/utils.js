function setMenuActiveLink(linkId){
    const menuLinks = Array.from(document.getElementsByClassName("section-link"));

    menuLinks.forEach((link) => {
        if (link.id === linkId){
            link.classList.add("active");
        }
        else{
            link.classList.remove("active");
        }
    })
}