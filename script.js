// console.log("hello I am working");

// Function to fetch data from the cat API
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// Function to display cat information on the webpage
const displayCatInfo = (cats) => {
  const catInfoContainer = document.getElementById("catInfo");

  cats.forEach((cat) => {
    const catCard = document.createElement("div");
    catCard.classList.add("card", "mb-3", "bg-dark", "text-light");

    const cardBody = document.createElement("div");
    cardBody.classList.add("row", "card-body", "col-md-12", "p-6");

    const catName = document.createElement("h5");
    catName.classList.add(
      "card-title",
      "text-center",
      "text-info",
      "bg-dark",
      "fs-3",
      "fw-bold",
      "text-decoration-underline",
      "col-md-12"
    );
    catName.textContent = `Name: ${cat.name}`;

    const catImage = document.createElement("div");
    catImage.classList.add(
      "card-text",
      "text-center",
      "card-img-top",
      "col-md-4"
    );
    catImage.innerHTML = `<img src="https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg" alt="${cat.name}"/> `;

    const catOrigin = document.createElement("p");
    catOrigin.classList.add("card-text", "col-md-2");
    catOrigin.textContent = `Region: ${cat.origin}`;

    const lifeSpan = document.createElement("p");
    lifeSpan.classList.add("card-text", "col-md-2");
    lifeSpan.textContent = `Life Span: ${cat.life_span} years`;

    const adaptability = document.createElement("p");
    adaptability.classList.add("card-text", "col-md-2");
    adaptability.innerText = `Adaptability: ${cat.adaptability}`;

    const affectionLevel = document.createElement("p");
    affectionLevel.classList.add("card-text", "col-md-2");
    affectionLevel.innerText = `Affection Level: ${cat.affection_level}`;

    const childFriendly = document.createElement("p");
    childFriendly.classList.add("card-text", "col-md-2");
    childFriendly.innerText = `Child Friendly: ${cat.child_friendly}`;

    const dogFriendly = document.createElement("p");
    dogFriendly.classList.add("card-text", "col-md-2");
    dogFriendly.innerText = `Dog Friendly: ${cat.dog_friendly}`;

    const energyLevel = document.createElement("p");
    energyLevel.classList.add("card-text", "col-md-2");
    energyLevel.innerText = `Energy Level: ${cat.energy_level}`;

    const healthIssues = document.createElement("p");
    healthIssues.classList.add("card-text", "col-md-2");
    healthIssues.innerText = `Health Issues: ${cat.health_issues}`;

    const intelligence = document.createElement("p");
    intelligence.classList.add("card-text", "col-md-2");
    intelligence.innerText = `Intelligence: ${cat.intelligence}`;

    const grooming = document.createElement("p");
    grooming.classList.add("card-text", "col-md-2");
    grooming.textContent = `Grooming: ${cat.grooming}`;

    const sheddingLevel = document.createElement("p");
    sheddingLevel.classList.add("card-text", "col-md-2");
    sheddingLevel.textContent = `Shedding Level: ${cat.shedding_level}`;

    const socialNeeds = document.createElement("p");
    socialNeeds.classList.add("card-text", "col-md-2");
    socialNeeds.textContent = `Social Needs: ${cat.social_needs}`;

    const vocalisation = document.createElement("p");
    vocalisation.classList.add("card-text", "col-md-2");
    vocalisation.textContent = `Vocalisation: ${cat.vocalisation}`;

    const suppressedTail = document.createElement("p");
    suppressedTail.classList.add("card-text", "col-md-2");
    suppressedTail.textContent = `Supperessed Tail: ${cat.suppressed_tail}`;

    const strangerFriendly = document.createElement("p");
    strangerFriendly.classList.add("card-text", "col-md-2");
    strangerFriendly.textContent = `Stranger Friendly: ${cat.stranger_friendly}`;

    const catWeight = document.createElement("p");
    catWeight.classList.add("card-text", "col-md-2");
    catWeight.textContent = `Weight: ${cat.weight.metric} kg`;

    const temperament = document.createElement("p");
    temperament.classList.add("card-text", "col-md-11");
    temperament.textContent = `Temperament: ${cat.temperament}`;

    const vetstreetUrl = document.createElement("p");
    vetstreetUrl.classList.add("card-text", "col-md-11");
    vetstreetUrl.innerHTML = `Vet Street Link: <a rel="noopener" target="_blank" href="${cat.vetstreet_url}">${cat.vetstreet_url}</a>`;

    const wikipediaUrl = document.createElement("p");
    wikipediaUrl.classList.add("card-text", "col-md-11");
    wikipediaUrl.innerHTML = ` Wikipedia URL:
          <a rel="noopener" target="_blank" href="${cat.wikipedia_url}">${cat.wikipedia_url}</a>`;

    const description = document.createElement("p");
    description.classList.add("card-text", "col-md-11");
    description.innerHTML = `<b>Description:</b> ${cat.description}`;

    cardBody.appendChild(catName);
    cardBody.appendChild(catImage);
    cardBody.appendChild(catOrigin);
    cardBody.appendChild(lifeSpan);
    cardBody.appendChild(adaptability);
    cardBody.appendChild(childFriendly);
    cardBody.appendChild(dogFriendly);
    cardBody.appendChild(energyLevel);
    cardBody.appendChild(healthIssues);
    cardBody.appendChild(intelligence);
    cardBody.appendChild(grooming);
    cardBody.appendChild(sheddingLevel);
    cardBody.appendChild(socialNeeds);
    cardBody.appendChild(vocalisation);
    cardBody.appendChild(suppressedTail);
    cardBody.appendChild(strangerFriendly);
    cardBody.appendChild(catWeight);
    cardBody.appendChild(temperament);
    cardBody.appendChild(vetstreetUrl);
    cardBody.appendChild(wikipediaUrl);
    cardBody.appendChild(description);

    catCard.appendChild(cardBody);
    catInfoContainer.appendChild(catCard);
  });
};

// Execute the code when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((data) => displayCatInfo(data))
    .catch((error) => console.error("Error fetching data:", error));
});
