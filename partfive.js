// Fetch data from the Charity Navigator API and display it on the website
document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.charitynavigator.org/v2/Organizations"; // Replace with actual API endpoint
    const apiKey = "your_api_key_here"; // Replace with your actual API key

    const charityContainer = document.querySelector("#charityContainer");
    const errorMessage = document.querySelector("#errorMessage");

    // Function to fetch charity data
    async function fetchCharityData() {
        try {
            const response = await fetch(`${apiUrl}?app_id=YOUR_APP_ID&app_key=${apiKey}`);

            if (!response.ok) {
                throw new Error("Failed to fetch data from the API.");
            }

            const data = await response.json();
            displayCharityData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            errorMessage.textContent = "Unable to load charity data at this time. Please try again later.";
            errorMessage.style.display = "block";
        }
    }

    // Function to display charity data on the page
    function displayCharityData(data) {
        charityContainer.innerHTML = ""; // Clear previous content

        data.forEach((charity) => {
            const charityCard = document.createElement("div");
            charityCard.className = "charity-card";

            charityCard.innerHTML = `
                <h3>${charity.charityName}</h3>
                <p>${charity.mission}</p>
                <a href="${charity.websiteURL}" target="_blank">Learn More</a>
            `;

            charityContainer.appendChild(charityCard);
        });
    }

    // Fetch and display data when the page loads
    fetchCharityData();
});
