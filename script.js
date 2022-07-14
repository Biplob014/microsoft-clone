// /////////////////////////////////////////////
// working with menu
let headerEl = document.querySelector(".mobile-nav-class");
let btnEl = document.querySelector(".mobile-btn");
btnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// /////////////////////////////////////////////
// smooth scrolling
let allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      scrollTo({ top: 0, behavior: "smooth" });
    }

    // scroll to other's link
    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (event.target.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// /////////////////////////////////////////////
// sticky navigation
let heroEl = document.querySelector(".hero");

let obs = new IntersectionObserver(
  (entries) => {
    let ent = entries[0];

    // adding and removing sticky class from the head
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    // rootmargin will basically apply ooutside of (root:null). It will only work with px unit and
    // sticky class height will be present. sticky's height will be add here
    rootMargin: "-70px",
  }
);
obs.observe(heroEl);

// /////////////////////////////////////////////
// Back to top button
let b2topContainer = document.querySelector(".back-to-top");
let mainHero = document.querySelector(".main-hero");
let footer = document.querySelector(".footer");

// click event
b2topContainer.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});

// this code will execute when screen size is greater than 560
// window.addEventListener("resize", () => {
if (window.innerWidth > 560) {
  // footer observer
  let footerObs = new IntersectionObserver(
    (entries) => {
      let ent = entries[0];
      if (!ent.isIntersecting) document.body.classList.add("add");
      if (ent.isIntersecting) document.body.classList.remove("add");
    },
    {
      root: null,
      threshold: 0,
      // rootMargin: "-30px",
    }
  );
  footerObs.observe(footer);

  // main hero observer
  let mainHeroObs = new IntersectionObserver(
    (entries) => {
      let ent = entries[0];
      if (!ent.isIntersecting) document.body.classList.add("add");
      if (ent.isIntersecting) document.body.classList.remove("add");
    },
    {
      root: null,
      threshold: 0,
      // rootMargin:
    }
  );
  mainHeroObs.observe(mainHero);
}
// });
