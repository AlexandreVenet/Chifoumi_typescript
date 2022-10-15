//////////////////////////
// Icônes
//////////////////////////
const correspondance = 
{
	0:"👊",
	1:"✋",
	2:"✌️"
}

const iconDefault:string = "🎲";

//////////////////////////
// Audio
//////////////////////////
// const audioPerd = new Audio('audio/mixkit-arcade-video-game-explosion-2810.wav');
// const audioGagne = new Audio('audio/mixkit-retro-arcade-casino-notification-211.wav');
// const audioEgalite = new Audio('audio/mixkit-metal-hit-woosh-1485.wav');
// const audioRestart = new Audio('audio/mixkit-funny-cartoon-fast-splat-2889.wav');
const audioPerd = document.querySelector<HTMLAudioElement>('#audioPerd')!;
const audioGagne = document.querySelector<HTMLAudioElement>('#audioGagne')!;
const audioEgalite = document.querySelector<HTMLAudioElement>('#audioEgalite')!;
const audioRestart = document.querySelector<HTMLAudioElement>('#audioRestart')!;

//////////////////////////
// Eléments du DOM
//////////////////////////
// nav
const nav = document.querySelector('#nav');
// Ecran de jeu
const coupMCP = document.querySelector('#coupMCP')!; // "!" = forcer non null
const coupHuman = document.querySelector('#coupHuman')!; 
// Scores
const scoreMCP = document.querySelector('#scoreMCP')!;
const scoreHuman = document.querySelector('#scoreHuman')!;
// Options
const restart = document.querySelector('#restart');

//////////////////////////
// Fonction des boutons
//////////////////////////
nav?.addEventListener('click',NavClick); // "?" tester non null
function NavClick(e:Event)
{
	const element = e.target as HTMLElement;   
	const button = element.closest('button');
	
	if(button)
	{
		// button.tabIndex = -1;
		// button.blur();

		const datasetNom = button.dataset.nom;
		if(datasetNom)
		{
			const resultat:ResultatPartie = chifoumi.JouerCoup(Number(datasetNom));

			// Afficher les icônes
			const iconOrdinateur = correspondance[resultat.coupOrdinateur];
			const iconUtilisateur = correspondance[resultat.coupUtilisateur];
			coupMCP.textContent = iconOrdinateur;
			coupHuman.textContent = iconUtilisateur;

			// Afficher le score
			scoreMCP.textContent = resultat.pointsOrdinateur.toString();
			scoreHuman.textContent = resultat.pointsUtilisateur.toString();

			ResetCssElements();

			// Afficher selon les résultats
			if(resultat.resultat == ResultatTest.Egalite)
			{
				coupMCP.classList.add("egalite");
				coupHuman.classList.add("egalite");
				JouerAudio(audioEgalite);
			}
			else if(resultat.resultat == ResultatTest.VictoireOrdinateur)
			{
				coupMCP.classList.add("ordinateurGagne");
				JouerAudio(audioPerd);
			}
			else
			{
				coupHuman.classList.add("utilisateurGagne");
				JouerAudio(audioGagne);
			}
		}
	}
}

restart?.addEventListener('click',RestartClick);
function RestartClick(e:Event)
{
	coupMCP.textContent = iconDefault;
	coupHuman.textContent = iconDefault;

	scoreMCP.textContent = (0).toString();
	scoreHuman.textContent = (0).toString();

	ResetCssElements();
	
	chifoumi.Relancer();

	JouerAudio(audioRestart);
}

//////////////////////////
// Fonction générales
//////////////////////////
function ResetCssElements()
{
	coupMCP.classList.remove("egalite");
	coupMCP.classList.remove("ordinateurGagne");
	coupHuman.classList.remove("egalite");
	coupHuman.classList.remove("utilisateurGagne");
}

function JouerAudio(audio:HTMLAudioElement)
{
	audio.currentTime = 0;
	audio.play();
}

//////////////////////////
// Jeu
//////////////////////////
const chifoumi = new Chifoumi();