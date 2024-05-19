function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; 
    let regex
     = /^pet_\w+$/;

    if (regex.test(input)) {
        result = 'Valid input✅';
    } else {
        result = 'Invalid input❌. The input should start with "pet_" and be followed by alphanumeric characters.';
    }

    document.getElementById('result').innerText = result;
}
//Event listener to validate input on button click
document.getElementById('validateButton').addEventListener('click', validateSyntax);

