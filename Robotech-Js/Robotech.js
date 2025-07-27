// Navigation Bar Section Js
const navOpenBtn = document.querySelector(".Open-bar");
const navCloseBtn = document.querySelector(".Close-x");
const overLayBg = document.querySelector(".Bg-Over-lay");
const openClassAdd = document.querySelector(".Nav-bar");

// Open Navigation Bar
navOpenBtn.addEventListener("click", () => {
  openClassAdd.classList.add("Toggle-Open");
  overLayBg.classList.add("Toggle-Open");
});

// Close Navigation Bar
navCloseBtn.addEventListener("click", () => {
  openClassAdd.classList.remove("Toggle-Open");
  overLayBg.classList.remove("Toggle-Open");
});

// Overlay Click Close
overLayBg.addEventListener("click", () => {
  openClassAdd.classList.remove("Toggle-Open");
  overLayBg.classList.remove("Toggle-Open");
});

// Accordians Js
const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    const currentItem = toggle.closest(".slide-down");

    // Close other items
    document.querySelectorAll(".slide-down").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    // Toggle current
    currentItem.classList.toggle("active");
  });
});

// Animation jS..
new WOW().init();
