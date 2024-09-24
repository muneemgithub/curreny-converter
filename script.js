// Mouse Trail Effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);

    // Position the trail
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Randomize color with gradient effect
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.background = `radial-gradient(circle at center, ${color}, transparent)`;

    // Animation to fade out and remove the trail
    trail.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    requestAnimationFrame(() => {
        trail.style.transform = 'scale(2)';
        trail.style.opacity = '0';
    });

    // Remove the trail after the animation
    setTimeout(() => {
        trail.remove();
    }, 500);
});

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);

    // Position the trail
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Randomize color with gradient effect
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.background = `radial-gradient(circle at center, ${color}, transparent)`;

    // Animation to fade out and remove the trail
    trail.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    requestAnimationFrame(() => {
        trail.style.transform = 'scale(2)';
        trail.style.opacity = '0';
    });

    // Remove the trail after the animation
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Currency Converter Functionality
const api = `https://v6.exchangerate-api.com/v6/b723168d3504e1b656d38af2/latest/USD`;
const fromDropdown = document.getElementById("from-currency-select");
const toDropdown = document.getElementById("to-currency-select");

const currencies = ["USD", "INR", "EUR", "GBP", "AUD", "CAD", "JPY", "CNY", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BZD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

currencies.forEach((currency) => {
    const optionFrom = document.createElement("option");
    const optionTo = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.text = currency;
    optionTo.value = currency;
    optionTo.text = currency;
    fromDropdown.add(optionFrom);
    toDropdown.add(optionTo);
});

fromDropdown.value = "USD";
toDropdown.value = "INR";

let convertCurrency = () => {
    const amount = document.getElementById("amount").value;
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropdown.value;

    if (amount.length != 0) {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            })
            .catch((error) => {
                console.error("Error fetching the conversion data:", error);
            });
    } else {
        alert("Please fill in the amount");
    }
};

document.getElementById("convert-btn").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
