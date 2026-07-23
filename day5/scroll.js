// Print lines to make the page scrollable
for (let i = 1; i <= 100; i++) {
    document.write("<p>Line number " + i + ": This is a very long text to test the auto-scrolling feature. The page will keep scrolling down automatically.</p>");
}

// Scroll down automatically every half a second
setInterval(() => {
    window.scrollBy(0, 20);
}, 500);