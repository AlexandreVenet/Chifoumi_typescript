"use strict";
var Coup;
(function (Coup) {
    Coup[Coup["Pierre"] = 0] = "Pierre";
    Coup[Coup["Feuille"] = 1] = "Feuille";
    Coup[Coup["Ciseaux"] = 2] = "Ciseaux";
})(Coup || (Coup = {}));
var ResultatTest;
(function (ResultatTest) {
    ResultatTest[ResultatTest["Egalite"] = 0] = "Egalite";
    ResultatTest[ResultatTest["VictoireOrdinateur"] = 1] = "VictoireOrdinateur";
    ResultatTest[ResultatTest["VictoireUtilisateur"] = 2] = "VictoireUtilisateur";
})(ResultatTest || (ResultatTest = {}));
class Chifoumi {
    constructor() {
        this.scoreOrdinateur = 0;
        this.scoreUtilisateur = 0;
        this.coupOrdinateur = 0;
        this.coupUtilisateur = 0;
        this.resultat = 0;
    }
    JouerCoup(coup) {
        this.coupUtilisateur = coup;
        this.MCPJoue();
        if (this.coupOrdinateur == this.coupUtilisateur) {
            this.resultat = ResultatTest.Egalite;
        }
        else {
            if (this.coupOrdinateur == Coup.Pierre) {
                if (this.coupUtilisateur == Coup.Ciseaux) {
                    this.VictoireOrdinateur();
                }
                else {
                    this.VictoireUtilisateur();
                }
            }
            else if (this.coupOrdinateur == Coup.Feuille) {
                if (this.coupUtilisateur == Coup.Pierre) {
                    this.VictoireOrdinateur();
                }
                else {
                    this.VictoireUtilisateur();
                }
            }
            else if (this.coupOrdinateur == Coup.Ciseaux) {
                if (this.coupUtilisateur == Coup.Feuille) {
                    this.VictoireOrdinateur();
                }
                else {
                    this.VictoireUtilisateur();
                }
            }
        }
        const resultat = {
            coupOrdinateur: this.coupOrdinateur,
            coupUtilisateur: this.coupUtilisateur,
            resultat: this.resultat,
            pointsOrdinateur: this.scoreOrdinateur,
            pointsUtilisateur: this.scoreUtilisateur
        };
        return resultat;
    }
    MCPJoue() {
        const random = Math.floor(Math.random() * Object.keys(Coup).length / 2);
        this.coupOrdinateur = random;
    }
    Relancer() {
        this.scoreOrdinateur = 0;
        this.scoreUtilisateur = 0;
    }
    VictoireOrdinateur() {
        this.resultat = ResultatTest.VictoireOrdinateur;
        this.scoreOrdinateur++;
    }
    VictoireUtilisateur() {
        this.resultat = ResultatTest.VictoireUtilisateur;
        this.scoreUtilisateur++;
    }
}
