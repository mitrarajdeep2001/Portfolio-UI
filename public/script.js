// Constants
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const navItems = document.getElementById("nav-items");
const threshold = 20;
const threshold2 = 560;
const threshold3 = 1450;
const threshold4 = 2120;
const threshold5 = 559;

window.addEventListener("scroll", () => {
  // Adjust the height of the navbar
  if (Math.floor(scrollY) >= threshold) {
    navbar.classList.add("md:h-[70px]");
    logo.classList.add("md:text-[30px]");
  } else {
    navbar.classList.remove("md:h-[70px]");
    logo.classList.remove("md:text-[30px]");
  }

  // Set the active nav item according to the scroll coordinates
  if (Math.round(scrollY) >= threshold2) {
    contact.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    about.classList.add("hover:text-[#1ABC9C]");
    about.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    portfolio.classList.add("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    portfolio.classList.remove("hover:text-[#1ABC9C]");
  }
  if (Math.round(scrollY) >= threshold3) {
    portfolio.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    portfolio.classList.add("hover:text-[#1ABC9C]");
    about.classList.add("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    about.classList.remove("hover:text-[#1ABC9C]");
    contact.classList.add("hover:text-[#1ABC9C]");
  }
  if (Math.round(scrollY) >= threshold4) {
    portfolio.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    about.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    about.classList.add("hover:text-[#1ABC9C]");
    contact.classList.add("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    contact.classList.remove("hover:text-[#1ABC9C]");
  }
  if (Math.round(scrollY) < threshold5) {
    portfolio.classList.remove("md:p-3", "md:bg-[#1ABC9C]", "rounded-lg");
    portfolio.classList.add("hover:text-[#1ABC9C]");
    about.classList.add("hover:text-[#1ABC9C]");
    contact.classList.add("hover:text-[#1ABC9C]");
  }
});

// Scroll to the specific part of the page
navItems.addEventListener("click", function (event) {
  if (event.target.getAttribute("href") === "#portfolio") {
    window.scroll(0, threshold2 + 300);
  }
  if (event.target.getAttribute("href") === "#about") {
    window.scroll(0, threshold3 + 300);
  }
  if (event.target.getAttribute("href") === "#contact") {
    window.scroll(0, threshold4 + 300);
  }
});
