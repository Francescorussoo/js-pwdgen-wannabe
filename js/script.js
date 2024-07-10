function askUserDetails() {
    let nome = prompt("Inserisci il tuo nome:");
    let cognome = prompt("Inserisci il tuo cognome:");
    let colorePreferito = prompt("Inserisci il tuo colore preferito:");
    
    document.getElementById("output").innerText = nome + cognome + colorePreferito + "130";
}

window.onload = askUserDetails;