<script>
    const header = document.getElementById("header");

    // Boolean to track rotation state
    let isRotated = false;

    // Add click event listener
    header.addEventListener("click", () => {
        if (!isRotated) {
            // Rotate and change to hidden message
            header.classList.add("rotate");
            setTimeout(() => {
                header.querySelector("h1").textContent = "Sule and Zainab, November 16th 2020";
            }, 500); // Change text after half the rotation duration
        } else {
            // Rotate back to the original state
            header.classList.remove("rotate");
            setTimeout(() => {
                header.querySelector("h1").textContent = "Happy 4th Anniversary";
            }, 500); // Change text after rotation back
        }

        // Toggle the state
        isRotated = !isRotated;
    });
</script>
