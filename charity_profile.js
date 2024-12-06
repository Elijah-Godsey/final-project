
document.addEventListener("DOMContentLoaded", () => {
    const volunteerButton = document.querySelector("#volunteerButton");
    const formSection = document.querySelector("#volunteerForm");

    volunteerButton.addEventListener("click", () => {
        formSection.style.display = "block";
        volunteerButton.style.display = "none";
    });

    const charityDetails = document.querySelector("#charityDetails");
    const additionalInfo = document.createElement("p");
    additionalInfo.textContent = "We have been active since 2005 and have impacted over 10,000 lives globally.";
    additionalInfo.style.display = "none";
    additionalInfo.style.marginTop = "1rem";

    charityDetails.appendChild(additionalInfo);

    charityDetails.addEventListener("mouseover", () => {
        additionalInfo.style.display = "block";
    });

    charityDetails.addEventListener("mouseout", () => {
        additionalInfo.style.display = "none";
    });
});
