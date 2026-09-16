(function () {
  var theme = localStorage.getItem("litteram-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.toggle("dark", theme === "dark");

  document.querySelectorAll("[data-theme]").forEach(function (btn) {
    btn.setAttribute("aria-pressed", String(btn.dataset.theme === theme));
    btn.addEventListener("click", function () {
      theme = btn.dataset.theme;
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("litteram-theme", theme);
      document.querySelectorAll("[data-theme]").forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.theme === theme));
      });
    });
  });

  var menu = document.querySelector(".menu-button");
  var nav = document.querySelector(".mobile-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menu.textContent = "Menu";
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -56px" },
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach(function (element) {
    observer.observe(element);
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
