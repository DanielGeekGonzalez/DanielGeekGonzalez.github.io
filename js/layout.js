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
      <div class="container footer-content">
        <small>${year} Daniel Gonzalez</small>

          <div class="footer-links">
            <a
              href="mailto:danielgonzalez10663@gmail.com"
              class="footer-link"
              aria-label="Email Daniel Gonzalez"
            >
              ${gmailIcon()}
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/danielg26"
              target="_blank"
              rel="noopener"
              class="footer-link"
              aria-label="LinkedIn profile"
            >
              ${linkedinIcon()}
              <span>LinkedIn</span>
            </a>
          </div>

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

function linkedinIcon() {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="#0A66C2"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8z"/>
    </svg>
  `;
}

function gmailIcon() {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <!-- Red -->
      <path fill="#EA4335" d="M12 13.5L2 6.75V18c0 .55.45 1 1 1h3V9.5L12 13.5z"/>

      <!-- Blue -->
      <path fill="#4285F4" d="M22 18V6.75L12 13.5l6 4V19h3c.55 0 1-.45 1-1z"/>

      <!-- Yellow -->
      <path fill="#FBBC04" d="M18 9.5V19h-6l-6-4V9.5l6 4 6-4z"/>

      <!-- Green -->
      <path fill="#34A853" d="M2 6.75L12 13.5l10-6.75V6c0-.55-.45-1-1-1h-3l-6 4-6-4H3c-.55 0-1 .45-1 1v.75z"/>
    </svg>
  `;
}

// Run after the DOM is parsed
document.addEventListener("DOMContentLoaded", injectLayout);
