// var deg= document.getElementsById("degree").value
// var type=document.getElementById("type").value
// var text = type.options[e.selectedIndex].text;

// function result(){
//     if (text=="Fahrenheit"){
//         const fahrenheitResult = (deg * 9/5) + 32;
//       document.getElementById("result").innerText = `Result: ${fahrenheitResult.toFixed(2)} °F`;
//     }
// }


function result(event) {
    // Get user input
    event.preventDefault();
    const degreeInput = parseFloat(document.getElementById('degree').value);
    const typeSelect = document.getElementById('type');
    const selectedType = typeSelect.options[typeSelect.selectedIndex].value;

    // Check if the degree input is a valid number
    if (isNaN(degreeInput)) {
        alert('Please enter a valid number for the degree.');
        return;
    }

    // Perform temperature conversion
    let resultText = '';
    if (selectedType === 'fahrenheit') {
        resultText = `Value: ${convertCtoF(degreeInput)} Fahrenheit.`;
    } else if (selectedType === 'kelvin') {
        resultText = `Value: ${convertCtoK(degreeInput)} Kelvin.`;
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
}

// Helper functions for temperature conversion
function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
}

function convertCtoK(celsius) {
    return celsius + 273.15;
}

