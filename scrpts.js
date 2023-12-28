document.querySelector("#theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("tema-oscuro");
    let themeIcon = document.querySelector("#theme-icon");
    if (document.body.classList.contains("tema-oscuro")) {
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
    } else {
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
    }
  });
  
  
  
  