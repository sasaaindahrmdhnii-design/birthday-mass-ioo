/* =========================================================
   BIRTHDAY WEBSITE
   MASS IOOO — 20TH BIRTHDAY
========================================================= */


/* =========================================================
   1. OPEN GIFT
========================================================= */

const openGift = document.getElementById("openGift");
const gift = document.getElementById("gift");
const opening = document.getElementById("opening");
const hero = document.getElementById("hero");

openGift.addEventListener("click", function () {

    gift.classList.add("opening-animation");

    createConfetti(80);

    setTimeout(() => {

        opening.style.transition = "1s ease";
        opening.style.opacity = "0";

        setTimeout(() => {

            opening.style.display = "none";

            hero.scrollIntoView({
                behavior: "smooth"
            });

        }, 800);

    }, 700);

});


/* =========================================================
   2. SMOOTH SCROLL
========================================================= */

function goToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   3. MUSIC PLAYER
========================================================= */

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const playMusic = document.getElementById("playMusic");
const musicCard = document.querySelector(".music-card");

let musicPlaying = false;


/* tombol kecil pojok */

musicButton.addEventListener("click", toggleMusic);


/* tombol music card */

playMusic.addEventListener("click", toggleMusic);


function toggleMusic() {

    if (!music) return;

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "♫";
        playMusic.innerHTML = "▶";

        musicCard.classList.remove("playing");

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML = "Ⅱ";
                playMusic.innerHTML = "Ⅱ";

                musicCard.classList.add("playing");

            })
            .catch(() => {

                alert(
                    "Musiknya belum bisa diputar. Pastikan file lagu.mp3 ada di folder music."
                );

            });

    }

}


/* =========================================================
   4. INTERSECTION OBSERVER
========================================================= */

const animatedElements = document.querySelectorAll(
    ".timeline-item, .wish-card, .memory-card, .photo-card, .message-container, .music-card, .cake, .final-content"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   5. STAGGER ANIMATION
========================================================= */

const staggerGroups = [
    ".wish-card",
    ".memory-card",
    ".timeline-item"
];


staggerGroups.forEach(selector => {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${index * 0.08}s`;

    });

});


/* =========================================================
   6. WISH CARD INTERACTION
========================================================= */

const wishCards = document.querySelectorAll(".wish-card");


wishCards.forEach(card => {

    card.addEventListener("click", function () {

        card.classList.toggle("opened");

        if (card.classList.contains("opened")) {

            card.style.transform =
                "translateY(-12px) scale(1.04)";

            card.style.borderColor =
                "rgba(255,159,197,.6)";

        } else {

            card.style.transform = "";

            card.style.borderColor = "";

        }

    });

});


/* =========================================================
   7. PHOTO INTERACTION
========================================================= */

const photos = document.querySelectorAll(".photo-card");


photos.forEach(photo => {

    photo.addEventListener("click", function () {

        photos.forEach(item => {

            item.classList.remove("selected");

        });

        photo.classList.add("selected");

        photo.style.zIndex = "100";

        photo.style.transform =
            "rotate(0deg) scale(1.12)";

    });

});


/* klik area kosong untuk mengembalikan foto */

document.addEventListener("click", function (event) {

    if (!event.target.closest(".photo-card")) {

        photos.forEach(photo => {

            photo.classList.remove("selected");

            photo.style.zIndex = "";

            photo.style.transform = "";

        });

    }

});


/* =========================================================
   8. FLOATING HEARTS
========================================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = [
        "♡",
        "♥",
        "✦",
        "✧"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* tidak terlalu banyak supaya tetap elegan */

setInterval(createHeart, 3500);


/* =========================================================
   9. CONFETTI
========================================================= */

function createConfetti(amount = 50) {

    const symbols = [
        "✦",
        "✧",
        "•",
        "♡",
        "★"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (8 + Math.random() * 15) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}


/* =========================================================
   10. BIRTHDAY CAKE
========================================================= */

const makeWish =
    document.getElementById("makeWish");

const cake =
    document.querySelector(".cake");

const wishResult =
    document.getElementById("wishResult");


makeWish.addEventListener("click", function () {

    cake.classList.add("blown");

    wishResult.classList.add("show");

    makeWish.innerHTML =
        "Wish made ✨";

    createConfetti(60);

    createBigHearts();

});


/* =========================================================
   11. BIG HEARTS
========================================================= */

function createBigHearts() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML = "♡";

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom = "-50px";

            heart.style.fontSize =
                (20 + Math.random() * 25) + "px";

            heart.style.color = "#ff8fbc";

            heart.style.zIndex = "3000";

            heart.style.pointerEvents = "none";

            heart.style.transition =
                "transform 4s ease, opacity 4s ease";

            document.body.appendChild(heart);


            requestAnimationFrame(() => {

                heart.style.transform =
                    `translateY(-${window.innerHeight + 100}px)
                     rotate(${Math.random() * 90 - 45}deg)`;

                heart.style.opacity = "0";

            });


            setTimeout(() => {

                heart.remove();

            }, 4500);

        }, i * 120);

    }

}


/* =========================================================
   12. LAST SURPRISE
========================================================= */

const lastButton =
    document.getElementById("lastSurprise");

const lastMessage =
    document.getElementById("lastMessage");


lastButton.addEventListener("click", function () {

    lastMessage.classList.toggle("show");


    if (lastMessage.classList.contains("show")) {

        lastButton.innerHTML =
            "♡";

        createConfetti(40);

        createBigHearts();

    } else {

        lastButton.innerHTML =
            "one last thing...";

    }

});


/* =========================================================
   13. FINAL SECTION EFFECT
========================================================= */

const finalSection =
    document.getElementById("final");


const finalObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    createConfetti(70);

                }

            });

        },
        {
            threshold: 0.4
        }
    );


if (finalSection) {

    finalObserver.observe(finalSection);

}


/* =========================================================
   14. MOUSE SPARKLE
========================================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        if (Math.random() > 0.85) {

            const sparkle =
                document.createElement("span");

            sparkle.innerHTML = "✦";

            sparkle.style.position = "fixed";

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            sparkle.style.pointerEvents =
                "none";

            sparkle.style.zIndex = "5000";

            sparkle.style.color =
                "#ffd166";

            sparkle.style.fontSize =
                "10px";

            sparkle.style.transition =
                "all .8s ease";

            document.body.appendChild(sparkle);


            requestAnimationFrame(() => {

                sparkle.style.transform =
                    "translateY(-20px) scale(1.5)";

                sparkle.style.opacity = "0";

            });


            setTimeout(() => {

                sparkle.remove();

            }, 900);

        }

    }
);


/* =========================================================
   15. PAGE LOAD
========================================================= */

window.addEventListener("load", function () {

    console.log(
        "♡ Happy 20th Birthday, Mass Iooo ♡"
    );

});