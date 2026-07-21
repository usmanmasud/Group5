function initScrollToTop() {
    "use strict";
    
    const SHOW_AFTER_PX = 350;
    
    const btn = document.createElement("button");
    btn.id = "backToTopBtn";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Scroll back to top");
    btn.setAttribute("title", "Back to top");
    btn.innerHTML = "&uarr;";
    
    document.body.appendChild(btn);
    
    function toggleVisibility() {
        if (window.scrollY > SHOW_AFTER_PX) {
            btn.classList.add("back-to-top--visible");
        } else {
            btn.classList.remove("back-to-top--visible");
        }
    }
    
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    
    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
    
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollToTop);
} else {
    initScrollToTop();
}