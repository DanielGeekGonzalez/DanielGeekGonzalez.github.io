function getCurrentPage() {
  const path = window.location.pathname;

  if (path.endsWith("/")) return "index.html";

  // Otherwise take the last piece of the path
  const parts = path.split("/");
  return parts[parts.length - 1];
}

function renderHeader(currentPage) {
  return `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="index.html">Daniel Gonzalez</a>
        <nav class="nav">
          <a href="index.html" ${currentPage === "index.html" ? 'aria-current="page"' : ""}>Home</a>
          <a href="about.html" ${currentPage === "about.html" ? 'aria-current="page"' : ""}>About</a>
          <a href="projects.html" ${currentPage === "projects.html" ? 'aria-current="page"' : ""}>Projects</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();

  return ` 
    <footer class="site-footer">
      <div class="container">
        <small> ${year} Daniel Gonzalez</small>
      </div>
    </footer>
  `;
}

function injectLayout() {
  const currentPage = getCurrentPage();

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    headerTarget.innerHTML = renderHeader(currentPage);
  }

  if (footerTarget) {
    footerTarget.innerHTML = renderFooter();
  }
}

// Run after the DOM is parsed
document.addEventListener("DOMContentLoaded", injectLayout);
