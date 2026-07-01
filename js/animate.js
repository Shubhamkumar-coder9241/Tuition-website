// gsap.to(".teacherinfo", {
//   scrollTrigger: {
//     trigger: "#teacherui",
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: 1,
//     endTrigger: ".last",

//   },
//   y: "-300%",
//   ease: "power1",
// })


// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#teacherui",
//     start: "top top",
//     end: "+=4000",
//     scrub: true,
//     pin: "#fright"
//   }
// });

// tl.to("#img1", { yPercent: -100 })
//   .to("#img2", { yPercent: -200 })
//   .to("#img3", { yPercent: -300 })
//   .to("#img4", { yPercent: -400 });
  // let sections = document.querySelectorAll(".teacherinfo");
// gsap.to("#fleft", {
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section) {
//       scrollTrigger.create({
//         trigger: section,
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: 1,
//         onUpdate: function (self) {
//           console.log(self.progress);
//         }
//       }
//       )
//     }),
//   }),
//   }
// })

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function () {
    const cards  = gsap.utils.toArray("#teacher-desktop .teacherinfo");
    const images = gsap.utils.toArray("#teacher-desktop .fimg");
    const steps  = cards.length - 1;

    gsap.timeline({
      scrollTrigger: {
        trigger: "#teacher-desktop",
        start: "top top",
        end: () => `+=${steps * window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })
    .to(cards,  { yPercent: -100 * steps, ease: "none" }, 0)
    .to(images, { yPercent: -100 * steps, ease: "none" }, 0);
  }
});

m