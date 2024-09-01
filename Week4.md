<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>
</head>
<body>
    <h1>Tip Calculator</h1>
    <p>Enter the service amount and quality to calculate the recommended tip.</p>

    <label for="serviceAmount">Service Amount ($): </label>
    <input type="number" id="serviceAmount" placeholder="Enter amount" step="0.01" min="5.00" max="500.00" required>
    <br><br>

    <label for="serviceQuality">Service Quality: </label>
    <select id="serviceQuality">
        <option value="great">Great (20% tip)</option>
        <option value="ok">Ok (15% tip)</option>
        <option value="poor">Poor (10% tip)</option>
    </select>
    <br><br>

    <button onclick="calculateTip()">Calculate Tip</button>

    <p id="result"></p>

    <script>
        // JavaScript code from the previous message goes here
        function verifyServiceQuality(serviceQuality) {
            const validQualities = ["great", "ok", "poor"];
            if (validQualities.includes(serviceQuality.toLowerCase())) {
                return true;
            } else {
                alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
                return false;
            }
        }

        function verifyServiceAmount(serviceAmount) {
            if (serviceAmount >= 5.00 && serviceAmount <= 500.00) {
                return true;
            } else {
                alert("Invalid service amount. Please enter an amount between $5.00 and $500.00.");
                return false;
            }
        }

        function calculateTip() {
            let serviceAmount = parseFloat(document.getElementById('serviceAmount').value);
            if (verifyServiceAmount(serviceAmount)) {
                let serviceQuality = document.getElementById('serviceQuality').value;
                if (verifyServiceQuality(serviceQuality)) {
                    let tipAmount = serviceAmount * (serviceQuality === 'great' ? 0.20 : serviceQuality === 'ok' ? 0.15 : 0.10);
                    document.getElementById('result').textContent = `For a service amount of $${serviceAmount.toFixed(2)}, a ${serviceQuality} service deserves a tip of $${tipAmount.toFixed(2)}.`;
                }
            }
        }
    </script>
</body>
</html>
