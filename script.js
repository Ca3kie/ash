document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    // allow normal open-in-new-tab behavior
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;

    e.preventDefault();
    const page = link.getAttribute("href");

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = page;
    }, 200);
  });
});
