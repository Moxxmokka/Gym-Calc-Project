async function muskelapi() {
  let muskler = document.getElementById("muskler").value;
  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muskler}`;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "Vxlwi0EF50Y9FHIhvnHWcQ==xjAJd2cdqQ3wtrV6",
    },
    contentType: "application/json",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    displayExercises(result);
  } catch (error) {
    console.error(error);
  }
}

function displayExercises(exercises) {
  const mainElement = document.querySelector("main");

  mainElement.innerHTML = "";

  exercises.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.classList.add("exercise");

    exerciseDiv.innerHTML = `
        <div class="instruction">
        <hr/>
        <h3>${exercise.name}</h3>
        <p><strong>Typ:</strong> ${exercise.type}</p>
        <p><strong>Muskelgrupp:</strong> ${exercise.muscle}</p>
        <p><strong>Utrustning:</strong> ${exercise.equipment}</p>
        <p><strong>Instruktioner:</strong> ${exercise.instructions}</p>
        </div>
        `;

    mainElement.appendChild(exerciseDiv);
  });
}

let button = document.querySelector(`button`);
button.onclick = getExercise;

function getExercise() {
  muskelapi();
}
