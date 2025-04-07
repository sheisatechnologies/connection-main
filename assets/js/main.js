

jQuery(document).ready(function($) {
    var icon = $(".mobile-menu-icon");
    var menu = $(".mobile-slider");
    var tl = new TimelineLite({
        paused: true,
        reversed: true
    });
    tl.fromTo(
        ".mobile-slider",
        0.7, {
            x: 200,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            ease: Power4.easeOut
        }
    );
    tl.to(
        ".filter",
        0.7, {
            autoAlpha: 1
        },
        0
    );
    icon.click(function() {
        tl.play();
    });
    $(".ri-close-large-fill").click(function() {
        tl.reverse();
    });
    $(".filter").click(function() {
        tl.reverse();
    });
});


const secondTab = document.querySelectorAll("#secondTab li button");
const secondTabWrap = document.querySelectorAll("#secondTab li");
const secondTabContent = document.querySelectorAll("#secondTabContent .tab-pane");

secondTab.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        secondTabContent.forEach(content => {
            content.classList.remove("show", "active");
        });
        secondTab.forEach(tab => tab.classList.remove("active"));
        secondTabWrap.forEach(wrap => wrap.style.opacity = 0.5);
        item.classList.add("active");
        secondTabWrap[index].style.opacity = 1;
        if (index + 1 < secondTabContent.length) {
            secondTabContent[index + 1].classList.add("show", "active");
        }
    });
});




$('#main-slider9').owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    center: true,
    margin: 0,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});

$('#main-slider99').owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    center: true,
    margin: 0,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});

$('#main-slider999').owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    center: true,
    margin: 0,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});

$('#main-slider9999').owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    center: true,
    margin: 0,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});



document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Prevent double-click from toggling the active state off
            if (!this.classList.contains('active-button')) {
                buttons.forEach(btn => btn.classList.remove('active-button'));
                this.classList.add('active-button');
                showContent(this.id.replace('button', 'content'));
            }
        });
    });
});

function showContent(contentId) {
    hideAllContents();
    document.getElementById(contentId).classList.add('active');
}

function hideAllContents() {
    const contents = document.querySelectorAll('.tab-pane');
    contents.forEach(content => content.classList.remove('active'));
}



// let mm2 = gsap.matchMedia();

// mm2.add("(min-width: 1800px)", () => {
//     const parallax = document.getElementById("parallax");


//     window.addEventListener("scroll", function () {
//         let offset = window.scrollY;
//         parallax.style.backgroundPositionY = offset * 0.5 + "px";
//     });

// });


// document.querySelector(".ri-close-large-fill").addEventListener("click", function () {
//     document.querySelector(".menu-overlay").style.left = "100%";
// })

// document.querySelector("#nav-menu").addEventListener("click", function () {
//     document.querySelector(".menu-overlay").style.left = "0%";
// })


let mm9 = gsap.matchMedia();


mm9.add("(min-width: 1000px)", () => {
    const parallax7 = document.getElementById("parallax7");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax7.style.backgroundPositionY = offset * 0.5 + "px";
    });

});















