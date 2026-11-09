// Use the Revor favicon on the docs mounted under revor.ai/docs/mcp.
// Mintlify's generated icon URL is outside this subpath and is not served by the host.
(() => {
  if (window.__revorDocsFaviconReady) return;
  window.__revorDocsFaviconReady = true;

  const updateFavicon = () => {
    if (window.location.hostname !== "revor.ai" ||
        !window.location.pathname.startsWith("/docs/mcp")) return;

    const faviconUrl = "/favicon.ico";
    const links = document.head.querySelectorAll('link[rel~="icon"]');

    if (links.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/x-icon";
      link.href = faviconUrl;
      document.head.appendChild(link);
      return;
    }

    links.forEach((link) => {
      if (link.getAttribute("href") !== faviconUrl) {
        link.setAttribute("href", faviconUrl);
      }
      link.setAttribute("type", "image/x-icon");
      link.removeAttribute("sizes");
    });
  };

  updateFavicon();
  document.addEventListener("mintlify:navigate", updateFavicon);
})();
