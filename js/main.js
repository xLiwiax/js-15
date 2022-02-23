let btnDodaj = document.getElementById("dodaj");
let btnUsun = document.getElementById("usun");

function wstawTekst() {
    let tekst = document.querySelector('p#tekst');
    tekst.textContent = "tekst";    
}

function usunTekst() {
    let tekst = document.querySelector('p#tekst');
    tekst.textContent = "";
}

btnDodaj.onclick = wstawTekst;
btnUsun.onclick = usunTekst;