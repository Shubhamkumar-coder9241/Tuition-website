let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {

    // Agar menu already exist karta hai to remove kar do
    const existingMenu = document.querySelector(".side-menu");

    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    // Create Menu
    const sideMenu = document.createElement("div");
    sideMenu.className = "side-menu";

    sideMenu.innerHTML = `
        <div class="side-menu-inner">

            <button class="side-close">&times;</button>

            <nav class="side-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#course">Courses</a></li>
                    <li><a href="#teachersection">Teachers</a></li>
                    <li><a href="#resultsection">Results</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact-cta">Contact</a></li>
                </ul>
            </nav>

        </div>
    `;

    document.body.appendChild(sideMenu);

    // Close Button
    sideMenu.querySelector(".side-close")
        .addEventListener("click", () => {
            sideMenu.remove();
        });
});


window.addEventListener("mousemove", function (dets) {

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out",
    })
});

const images = gsap.utils.toArray('#carousel .carousel-img');
let current = 0;

// Set initial state with GSAP instead of relying on the CSS "active" class
gsap.set(images, { opacity: 0 });
gsap.set(images[0], { opacity: 1 });

function nextSlide() {
    const next = (current + 1) % images.length;

    gsap.to(images[current], { opacity: 0, duration: 1, ease: 'power1.inOut' });
    gsap.to(images[next], { opacity: 1, duration: 1, ease: 'power1.inOut' });

    current = next;
}

setInterval(nextSlide, 4000);


function hoverAnimation() {

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('#testimonials .test-card');

  cards.forEach(function (card) {
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function (e) {
      // If the device has real hover (mouse), let CSS :hover handle it, do nothing here
      if (window.matchMedia('(hover: hover)').matches) return;

      var isOpen = card.classList.contains('slide-open');

      // close any other open card first
      cards.forEach(function (c) {
        if (c !== card) c.classList.remove('slide-open');
      });

      card.classList.toggle('slide-open', !isOpen);
    });
  });

  // tapping anywhere outside a card closes it
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#testimonials .test-card')) {
      cards.forEach(function (c) { c.classList.remove('slide-open'); });
    }
  });
});
}
hoverAnimation();
// let courseSearch=document.querySelector("#courseSearch");
// let courseContainer=document.querySelector("#coursesContainer");
//   courseSearch.addEventListener("input",function(dets){
//   ;
// })

const input = document.querySelector("#courseSearch");
const container = document.querySelector("#coursesContainer");

input.addEventListener("input", () => {

    const search = input.value.trim().toLowerCase();

    const cards = [...container.querySelectorAll(".course")];

    cards.sort((a, b) => {

        const titleA = a.querySelector("h2").textContent.toLowerCase();
        const titleB = b.querySelector("h2").textContent.toLowerCase();

        const matchA = titleA.includes(search);
        const matchB = titleB.includes(search);

        if (matchA && !matchB) return -1;
        if (!matchA && matchB) return 1;

        return 0;
    });

    cards.forEach(card => container.appendChild(card));

});
const state = Flip.getState(".course");

// sort and append cards

Flip.from(state, {
    duration: 0.5,
    ease: "power2.inOut",
    absolute: true
});

