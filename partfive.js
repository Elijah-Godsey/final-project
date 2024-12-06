
document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://developer.charitynavigator.org/portal/private/dashboard"; 
    const apiKey = "https://developer.charitynavigator.org/portal/private/dashboard"; 
    const charityContainer = document.querySelector("#charityContainer");
    const errorMessage = document.querySelector("#errorMessage");

    async function fetchCharityData() {
        try {
            const response = await fetch(`${apiUrl}https://developer.charitynavigator.org/portal/private/dashboard${apiKey}`);

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
