// ===== LANDING BUTTON =====
const openBtn = document.getElementById("btnOpen");

if (openBtn) {
    openBtn.addEventListener("click", function () {

        for (let i = 0; i < 80; i++) {
            createConfetti();
        }

        setTimeout(() => {
            document.body.classList.add("fade-out");
        }, 700);

        setTimeout(() => {
            window.location.href = "birthday.html";
        }, 1300);
    });
}


// ===== GIFT IMAGE =====
const gift = document.getElementById("giftImage");

if (gift) {
    gift.addEventListener("click", function () {
        for (let i = 0; i < 80; i++) {
            createConfetti();
        }
    });
}


// ===== CONFETTI FUNCTION =====
function createConfetti() {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    let size = Math.random() * 8 + 8; 
    // ukuran antara 4px sampai 12px

    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 60%)";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
// ===== AUTO SLIDER =====
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");

        current++;
        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");
    }, 3000);
}

// LOVE PARTICLES
const heartsContainer = document.querySelector(".hearts");

if(heartsContainer){

setInterval(()=>{

let heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "💖";

heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (15 + Math.random()*20) + "px";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},800);

}