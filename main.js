document.getElementById('textInputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var textInput = document.getElementById('textInput').value.toLowerCase();

    var wordsMap = {
        "chairman": "Chairperson (or Chair)",
        "policeman": "Police officer",
        "fireman": "Firefighter",
        "stewardess": "Flight attendant",
        "mankind": "Humanity",
        "waitress": "Server",
        "forefathers": "Ancestors",
        "sportsmanship": "Sportsmanship (this one is fine)",
        "manpower": "Workforce (or Personnel)",
        "freshman": "First-year student",
        "mailman": "Postal worker",
        "penmanship": "Handwriting",
        "salesman": "Salesperson (or Sales representative)",
        "craftsman": "Artisan",
        "congressman": "Representative (or Legislator)",
        "spokesman": "Spokesperson",
        "cameraman": "Videographer",
        "middleman": "Intermediary",
        "postman": "Postal worker",
        "milkman": "Delivery person",
        "repairman": "Technician",
        "businessman": "Businessperson (or Entrepreneur)",
        "airman": "Aviator",
        "watchman": "Security guard",
        "anchorman": "Anchor",
        "fisherman": "Fisher",
        "garbageman": "Waste collector",
        "landlord": "Property owner",
        "statesman": "Statesperson (or Stateswoman)"
    };

    var wordsUsed = [];
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results

    textInput.split(/\s+/).forEach(function(word) {
        if (wordsMap.hasOwnProperty(word)) {
            wordsUsed.push(word);
        }
    });

    if (wordsUsed.length > 0) {
        wordsUsed.forEach(function(word) {
            var p = document.createElement('p');
            p.textContent = `Non-inclusive word used: ${word}. Inclusive alternative: ${wordsMap[word]}.`;
            resultContainer.appendChild(p);
        });
    } else {
        resultContainer.textContent = 'No non-inclusive words found.';
    }
});