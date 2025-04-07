document.querySelector(".ri-close-large-fill").addEventListener("click", function () {
    document.querySelector(".menu-overlay").style.left = "100%";
})

document.querySelector("#nav-menu").addEventListener("click", function () {
    document.querySelector(".menu-overlay").style.left = "0%";
})





let mm = gsap.matchMedia();


mm.add("(min-width: 1000px)", () => {
    const parallax2 = document.getElementById("parallax");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax2.style.backgroundPositionY = offset * 0.5 + "px";
    });

});



mm.add("(min-width: 800px)", () => {
    const parallax2 = document.getElementById("parallax2");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax2.style.backgroundPositionY = offset * 0.8 + "px";
    });

});






mm.add("(max-width: 799px)", () => {
    const parallax2 = document.getElementById("parallax2");

    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax2.style.backgroundPositionY = offset * 0.9 + "px";
    });


});





let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
    const parallax3 = document.getElementById("parallax3");

    function updateParallax() {
        let offset = window.scrollY;
        parallax3.style.backgroundPositionY = offset * 0.5 + "px";
    }

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("load", updateParallax); // Ensures it works after refresh
});

// ✅ For small screens, apply a milder effect
window.addEventListener("scroll", function () {
    if (window.innerWidth < 800) {
        const parallax3 = document.getElementById("parallax3");
        if (parallax3) {
            let offset = window.scrollY;
            parallax3.style.backgroundPositionY = offset * 0.2 + "px"; // Slower effect for mobile
        }
    }
});



let mm3 = gsap.matchMedia();

mm3.add("(min-width: 800px)", () => {
    const parallax3 = document.getElementById("parallax4");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax3.style.backgroundPositionY = offset * 0.5 + "px";
    });

});











let mm4 = gsap.matchMedia();
mm4.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.fifth-section',
            start: '0% 50%',
            end: '100% 50%',
            scrub: true,
            // markers: true,
        }
    });
    tl.to(".overlay-five-png",{
        y: 500,
    })
});





gsap.to('.overlay-four',{y:-100,
    // scale:1.5,
    delay:1,
    scrollTrigger:{
        
        trigger:'.overlay-four-png', 
    start:'top top',
     marker:true, 
     scrub:true}
    
    
    
    
    
    });











