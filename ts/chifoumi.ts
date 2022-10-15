enum Coup
{
	Pierre = 0,
	Feuille = 1,
	Ciseaux = 2
}

enum ResultatTest
{
	Egalite = 0,
	VictoireOrdinateur = 1,
	VictoireUtilisateur = 2
}

type ResultatPartie = 
{
	coupOrdinateur:Coup, 
	coupUtilisateur:Coup,
	resultat:ResultatTest,
	pointsOrdinateur:number,
	pointsUtilisateur:number
};

class Chifoumi
{
	scoreOrdinateur:number = 0;
	scoreUtilisateur:number = 0;

	coupOrdinateur:Coup = 0;
	coupUtilisateur:Coup = 0;

	resultat:ResultatTest = 0;

	// Pas de constructeur

	public JouerCoup(coup:number):ResultatPartie
	{
		// Convertir le nombre reçu en enum
		this.coupUtilisateur = coup;
		
		// Calculer le coup de l'ordinateur
		this.MCPJoue();	

		// Tester le résultat de la partie
		if(this.coupOrdinateur == this.coupUtilisateur)
		{
			this.resultat = ResultatTest.Egalite;
		}
		else
		{
			if(this.coupOrdinateur == Coup.Pierre)
			{
				if(this.coupUtilisateur == Coup.Ciseaux)
				{
					this.VictoireOrdinateur();
				}
				else
				{
					this.VictoireUtilisateur();
				}
			}
			else if(this.coupOrdinateur == Coup.Feuille)
			{
				if(this.coupUtilisateur == Coup.Pierre)
				{
					this.VictoireOrdinateur();
				}
				else
				{
					this.VictoireUtilisateur();
				}
			}
			else if(this.coupOrdinateur == Coup.Ciseaux)
			{
				if(this.coupUtilisateur == Coup.Feuille)
				{
					this.VictoireOrdinateur();
				}
				else
				{
					this.VictoireUtilisateur();
				}
			}
		}

		const resultat:ResultatPartie = 
		{
			coupOrdinateur: this.coupOrdinateur, 
			coupUtilisateur:this.coupUtilisateur,
			resultat:this.resultat,
			pointsOrdinateur:this.scoreOrdinateur,
			pointsUtilisateur:this.scoreUtilisateur
		}

		return resultat;
	}

	private MCPJoue()
	{
		const random = Math.floor(Math.random() * Object.keys(Coup).length/2);
		this.coupOrdinateur = random;
	}

	public Relancer()
	{
		this.scoreOrdinateur = 0;
		this.scoreUtilisateur = 0;
	}

	private VictoireOrdinateur()
	{
		this.resultat = ResultatTest.VictoireOrdinateur;
		this.scoreOrdinateur ++;
	}
	
	private VictoireUtilisateur()
	{
		this.resultat = ResultatTest.VictoireUtilisateur;
		this.scoreUtilisateur ++;
	}
}