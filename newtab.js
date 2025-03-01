document.addEventListener("DOMContentLoaded", function() {
  // Check if a custom URL has already been set in localStorage.
  let customUrl = localStorage.getItem("customUrl");
  if (customUrl) {
    // Redirect immediately if a URL is found.
    window.location.href = customUrl;
    return;
  }
  
  // Listen for the form submission.
  document.getElementById("urlForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let urlInput = document.getElementById("customUrl").value.trim();
    
    // Basic URL validation: prepend "https://" if missing.
    if (!/^https?:\/\//i.test(urlInput)) {
      urlInput = "https://" + urlInput;
    }
    
    // Store the URL and redirect.
    localStorage.setItem("customUrl", urlInput);
    window.location.href = urlInput;
  });
});
