function displayFact() {
    const facts = [
        "The speed of light in a vacuum is approximately 299,792 km/s.",
        "E=mc² is one of the most famous equations in physics.",
        "Quantum entanglement defies classical intuitions about locality.",
        "Absolute zero is the lowest possible temperature, 0 Kelvin."
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factText').innerText = facts[randomIndex];
}
