gsap.from(".projects-headings h2, .projects-headings section", {
  y: 400,
  scrollTrigger: {
    trigger: "#sixth-section",
    scroller: "body",
    start: "top 62%",
    end: "top 61%",
    scrub: 5,
  },
});
let loaderHeadings = document.querySelectorAll("#loader h2");
for (let i = 0; i < loaderHeadings.length; i++) {
  setTimeout(() => {
    loaderHeadings[i].classList.remove("hidden");
    loaderHeadings[i - 1].classList.add("hidden");
  }, (i + 1) * 1000);
}
setTimeout(() => {
  gsap.to("#loader", {
    top: "-100%",
    duration: 1,
  });
}, 4000);
document.addEventListener("DOMContentLoaded", () => {
  let biggerContainer = document.querySelector("#project-heading-bigger-con");
  let hoverImages = document.querySelector("#hover-images");
  let projHeadingCon = document.querySelectorAll(".project-heading-containers");

  let seventhSecHeadings = document.querySelectorAll(".seventh-headings");
  let allParas = document.querySelectorAll(".seventh-paras");

  biggerContainer.addEventListener("mouseenter", () => {
    hoverImages.style.display = "block";
  });
  biggerContainer.addEventListener("mouseleave", () => {
    hoverImages.style.display = "none";
  });

  projHeadingCon.forEach((e) => {
    e.addEventListener("mouseover", () => {
      let imageUrl = e.getAttribute("data-images");
      hoverImages.style.backgroundImage = `url(${imageUrl})`;
    });
  });

  seventhSecHeadings.forEach((e) => {
    e.addEventListener("click", () => {
      let imagesUrl = e.getAttribute("data-images-target");
      let paraId = e.getAttribute("data-para-target");
      let para = document.getElementById(paraId);

      seventhSecHeadings.forEach((el) =>
        el.classList.remove("active-seventh-headings")
      );
      allParas.forEach((p) => {
        p.style.display = "none";
      });

      para.style.display = "block";

      e.classList.add("active-seventh-headings");

      document.getElementById(
        "seventh-right"
      ).style.backgroundImage = `url(${imagesUrl})`;
    });
  });

  // swiper in second last section
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 9 / 2,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: true,
  });

  let swiperCon = document.querySelector(".swiper");
  let swiperCircle = document.querySelector("#swiper-circle");
  swiperCon.addEventListener("mouseenter", () => {
    swiperCircle.style.scale = 1;
    swiperCon.style.cursor = "none";
  });
  swiperCon.addEventListener("mousemove", (e) => {
    gsap.to("#swiper-circle", {
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  });
  swiperCon.addEventListener("mouseleave", () => {
    swiperCircle.style.scale = 0;
  });
});
