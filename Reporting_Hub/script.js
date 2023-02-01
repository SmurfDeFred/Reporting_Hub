const fileForm = document.querySelector('#file-form');
const textForm = document.querySelector('#text-form');
const outputContainer = document.querySelector('#output-container');

fileForm.addEventListener('submit', handleFileSubmit);
textForm.addEventListener('submit', handleTextSubmit);

function handleFileSubmit(event) {
  event.preventDefault();
  const fileInput = document.querySelector('#file-input');
  const file = fileInput.files[0];
  if (!file) {
    return alert('Please select a file.');
  }
  const reader = new FileReader();
  reader.onload = function() {
    const fileData = reader.result;
    makeApiCalls(fileData, 'file');
  };
  reader.readAsText(file);
}

function handleTextSubmit(event) {
  event.preventDefault();
  const textInput = document.querySelector('#text-input');
  const textData = textInput.value;
  makeApiCalls(textData, 'text');
}

function makeApiCalls(data, dataType) {
// Appel de l'API.
// Variable `data` pour transmettre les données à l'API.
// Variable `dataType` sera soit 'file', soit 'text', en fonction du formulaire qui a été soumis.
// Après avoir reçu la réponse de l'API, vous pouvez générer le rapport.
  generateReport(apiResponse);
}

function generateReport(apiResponse) {
  // Your report generation logic goes here.
  // You can use the `apiResponse` variable to access the data returned from the API.
  // Once you have generated the report, you can display it on the page.

  // Génération de rapport.
  // Variable `apiResponse` pour accéder aux données renvoyées par l'API.
  // Une fois le rapport généré, l'afficher sur la page.
  displayReport(report);
}

function displayReport(report) {
  const output = document.querySelector('#output');
  output.textContent = report;
  outputContainer.style.display = 'block';
}
