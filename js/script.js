let cursor=document.querySelector("#cursor");
let main=document.querySelector("#main");
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


main.addEventListener("mousemove",function(dets){
   
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
    })
})


