/* Curreny */

function calculate() {
    // Elementreferenzen abrufen
    const euroField = document.getElementById('euroField');
    const usdField = document.getElementById('usdField');

    // Umrechnungskurs definieren
    const exchangeRate = 0.981; // Beispielwert von USD zu EUR (falls USD zu EUR, musst du den Wert anpassen)

    // Die Eingabefelder abrufen
    const euroValue = parseFloat(euroField.value.replace(',', '.'));
    const usdValue = parseFloat(usdField.value.replace(',', '.'));

    // Berechnungen und Aktualisierungen der Eingabefelder
    if (!isNaN(usdValue) && usdValue > 0) {
        // Wenn der USD-Wert eingegeben wurde, berechne den EUR-Wert
        const resultEUR = usdValue / exchangeRate;
        euroField.value = resultEUR.toFixed(2).replace('.', ',');
    } else if (!isNaN(euroValue) && euroValue > 0) {
        // Wenn der EUR-Wert eingegeben wurde, berechne den USD-Wert
        const resultUSD = euroValue * exchangeRate;
        usdField.value = resultUSD.toFixed(2).replace('.', ',');
    }
}

// Event Listener für den Button
document.querySelector('.arrow').addEventListener('click', function() {
    const euroField = document.getElementById('euroField');
    const usdField = document.getElementById('usdField');
    const euroValue = parseFloat(euroField.value.replace(',', '.'));
    const usdValue = parseFloat(usdField.value.replace(',', '.'));

    // Tausche die Werte der Felder
    if (!isNaN(euroValue) && euroValue > 0) {
        const resultUSD = euroValue * 1.1; // Umrechnung von EUR zu USD
        usdField.value = resultUSD.toFixed(2).replace('.', ',');
    } else if (!isNaN(usdValue) && usdValue > 0) {
        const resultEUR = usdValue / 1.1; // Umrechnung von USD zu EUR
        euroField.value = resultEUR.toFixed(2).replace('.', ',');
    }
});

let isEurToUsd = true; // Initialer Umrechnungsmodus: EUR zu USD

function calculator() {
    const euroField = document.getElementById('euroField');
    const usdField = document.getElementById('usdField');
    const exchangeRate = 1.1; // Beispielkurs USD zu EUR (kann angepasst werden)

    if (isEurToUsd) {
        // EUR zu USD
        const euroValue = parseFloat(euroField.value.replace(',', '.'));
        if (!isNaN(euroValue) && euroValue > 0) {
            const resultUSD = euroValue * exchangeRate;
            usdField.value = resultUSD.toFixed(2).replace('.', ',');
        }
    } else {
        // USD zu EUR
        const usdValue = parseFloat(usdField.value.replace(',', '.'));
        if (!isNaN(usdValue) && usdValue > 0) {
            const resultEUR = usdValue / exchangeRate;
            euroField.value = resultEUR.toFixed(2).replace('.', ',');
        }
    }
}

function toggleConversion() {
    isEurToUsd = !isEurToUsd; // Umschalten des Modus

    const statusElement = document.getElementById('conversion-status');
    if (isEurToUsd) {
        statusElement.innerHTML = 'Aktuelle Umrechnung: <br>EUR zu USD';
    } else {
        statusElement.innerHTML = 'Aktuelle Umrechnung: <br> USD zu EUR';
    }

    // Optional: Leere die Felder beim Umschalten
    document.getElementById('euroField').value = '';
    document.getElementById('usdField').value = '';
}


/* navigate */

function navigate(url) {
    window.location.href = url;
}





/* Calculator */

function appendOperation(operation) {
    document.getElementById('resultarea').innerHTML += operation;
}

function calculateresult() {
    let container = document.getElementById('resultarea');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}


function clearAll() {
    container = document.getElementById('resultarea').innerHTML = '';
}

function deleteLast() {
    let container = document.getElementById('resultarea');
    if (container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
    }
}