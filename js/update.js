var ul = document.getElementById("links");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        var selectedLink = event.target.innerHTML;
        if (selectedLink === "Experience") {
            window.location.href = "Experience.html";
        } else if (selectedLink === "About") {
          window.location.href = "About.html";
        } else if (selectedLink === "Skills") {
          window.location.href = "Skills.html";
        } else if (selectedLink === "Linkedin") {
          window.location.href = "https://www.linkedin.com/in/zubair-baba-1aaa8126a";
        } else if (selectedLink === "Contact Details") {
          window.location.href = "Contact.html";
        }
        event.preventDefault(); // Prevent the default link behavior (navigating to the URL)
    }
});
