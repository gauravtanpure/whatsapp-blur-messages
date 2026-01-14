// Monitor for dynamically loaded messages
const observer = new MutationObserver((mutations) => {
  // The CSS handles the blurring automatically
  // This observer ensures the styles apply to newly loaded messages
});

// Start observing the document
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('WhatsApp Blur Extension activated');