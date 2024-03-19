gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.2,
  effects: true,
});
gsap.from(".content1_img", {
  scrollTrigger: {
    trigger: ".content1_img",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
  x: -300,
  opacity: 0,
  duration: 1,
});
gsap.from(".content1_text", {
  scrollTrigger: {
    trigger: ".content1_text",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
  x: 300,
  opacity: 0,
  duration: 1,
});

gsap.from(".reg_place", {
  scrollTrigger: {
    trigger: ".reg_place",
    start: "top 80%",
    end: "top 20%",
    scrub: 1,
  },
  y: 150,
  opacity: 0,
  duration: 1,
});

gsap.from(".img_block1", {
  scrollTrigger: {
    trigger: ".img_block1",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
  y: 150,
  opacity: 0,
  duration: 1,
});
gsap.from(".img_block2", {
  scrollTrigger: {
    trigger: ".img_block2",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
  y: 150,
  opacity: 0,
  duration: 1,
});

const races = document.querySelector(".races");
console.log(races.offsetWidth);

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".racesWrapper",
  start: "top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
});

let btnAnimation = () => {
  const tlMessageBtn = gsap.timeline({
    defaults: { duration: 0.3 },
    repeat: -1,
    repeatDelay: 3,
  });
  tlMessageBtn
    .to(".border-btn", { rotate: 3 })
    .to(".border-btn", { rotate: -3 })
    .to(".border-btn", { rotate: 3 })
    .to(".border-btn", { rotate: 0 });
  return tlMessageBtn;
};

const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from(".banner_text", { opacity: 0, y: 30 })
  .from(".sub_banner_text", { opacity: 0, y: 30 })
  .from(".border-btn", { opacity: 0, y: 30 })
  .add(btnAnimation);
const arrayOfClass = [".icon1", ".icon2", ".icon3"];
for (let i = 0; i < 3; i++) {
  gsap.to(arrayOfClass[i], {
    scrollTrigger: {
      trigger: arrayOfClass[i],
      start: "top 60%",
      end: "top 40%",
    },
    y: -30,
    duration: 1,
    delay: i,
    ease: "bounce.out",
  });
}
