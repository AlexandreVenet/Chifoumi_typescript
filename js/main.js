"use strict";
const correspondance = {
    0: "👊",
    1: "✋",
    2: "✌️"
};
const iconDefault = "🎲";
const audioPerd = document.querySelector('#audioPerd');
const audioGagne = document.querySelector('#audioGagne');
const audioEgalite = document.querySelector('#audioEgalite');
const audioRestart = document.querySelector('#audioRestart');
const nav = document.querySelector('#nav');
const coupMCP = document.querySelector('#coupMCP');
const coupHuman = document.querySelector('#coupHuman');
const scoreMCP = document.querySelector('#scoreMCP');
const scoreHuman = document.querySelector('#scoreHuman');
const restart = document.querySelector('#restart');
nav === null || nav === void 0 ? void 0 : nav.addEventListener('click', NavClick);
function NavClick(e) {
    const element = e.target;
    const button = element.closest('button');
    if (button) {
        const datasetNom = button.dataset.nom;
        if (datasetNom) {
            const resultat = chifoumi.JouerCoup(Number(datasetNom));
            const iconOrdinateur = correspondance[resultat.coupOrdinateur];
            const iconUtilisateur = correspondance[resultat.coupUtilisateur];
            coupMCP.textContent = iconOrdinateur;
            coupHuman.textContent = iconUtilisateur;
            scoreMCP.textContent = resultat.pointsOrdinateur.toString();
            scoreHuman.textContent = resultat.pointsUtilisateur.toString();
            ResetCssElements();
            if (resultat.resultat == ResultatTest.Egalite) {
                coupMCP.classList.add("egalite");
                coupHuman.classList.add("egalite");
                JouerAudio(audioEgalite);
            }
            else if (resultat.resultat == ResultatTest.VictoireOrdinateur) {
                coupMCP.classList.add("ordinateurGagne");
                JouerAudio(audioPerd);
            }
            else {
                coupHuman.classList.add("utilisateurGagne");
                JouerAudio(audioGagne);
            }
        }
    }
}
restart === null || restart === void 0 ? void 0 : restart.addEventListener('click', RestartClick);
function RestartClick(e) {
    coupMCP.textContent = iconDefault;
    coupHuman.textContent = iconDefault;
    scoreMCP.textContent = (0).toString();
    scoreHuman.textContent = (0).toString();
    ResetCssElements();
    chifoumi.Relancer();
    JouerAudio(audioRestart);
}
function ResetCssElements() {
    coupMCP.classList.remove("egalite");
    coupMCP.classList.remove("ordinateurGagne");
    coupHuman.classList.remove("egalite");
    coupHuman.classList.remove("utilisateurGagne");
}
function JouerAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}
const chifoumi = new Chifoumi();
