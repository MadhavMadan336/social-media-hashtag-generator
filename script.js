// Select elements from the DOM
const keywordsInput = document.getElementById('keywords');
const generateButton = document.getElementById('generate-btn');
const clearButton = document.getElementById('clear-btn');
const copyButton = document.getElementById('copy-btn');
const outputDiv = document.getElementById('output');

// Function to generate hashtags
function generateHashtags() {
    // Get keywords from the textarea
    const keywords = keywordsInput.value.trim();
    
    // Check if input is empty
    if (!keywords) {
        outputDiv.innerHTML = '<p style="color: red;">Please enter some keywords.</p>';
        return;
    }
    
    // Split keywords by commas and generate hashtags
    const keywordsArray = keywords.split(',');
    const hashtags = keywordsArray.map(keyword => `#${keyword.trim().replace(/\s+/g, '').toLowerCase()}`);
    
    // Display hashtags
    outputDiv.innerHTML = `
        <h3>Generated Hashtags:</h3>
        <p>${hashtags.join(' ')}</p>
    `;
}

// Function to clear input and output
function clearFields() {
    keywordsInput.value = '';
    outputDiv.innerHTML = '';
}

// Function to copy hashtags to clipboard
function copyToClipboard() {
    const hashtagsText = outputDiv.innerText;
    if (hashtagsText) {
        navigator.clipboard.writeText(hashtagsText).then(() => {
            alert('Hashtags copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy hashtags.');
        });
    } else {
        alert('No hashtags to copy!');
    }
}

// Event listeners
generateButton.addEventListener('click', generateHashtags);
clearButton.addEventListener('click', clearFields);
copyButton.addEventListener('click', copyToClipboard);
