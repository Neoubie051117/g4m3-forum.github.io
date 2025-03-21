document.addEventListener("DOMContentLoaded", () => {
    // Load Footer HTML
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading the footer:', error));
});