// CoffeeCoin (COFF) - Main JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("CoffeeCoin website loaded successfully ☕");

    const button = document.querySelector("button");

    if(button){
        button.addEventListener("click", () => {
            alert(
                "CoffeeCoin Whitepaper coming soon. Fuel Your Future ☕"
            );
        });
    }


    // Smooth scrolling effect

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const section = document.querySelector(
                this.getAttribute("href")
            );

            if(section){
                section.scrollIntoView({
                    behavior:"smooth"
                });
            }

        });

    });

});
