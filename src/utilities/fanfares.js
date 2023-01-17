import laLaie from '../medias/audios/la-laie.mp3'
import LaMarcheDeVenerie from '../medias/audios/la-marche-de-vènerie.mp3'
import laRentreeAuChenil from '../medias/audios/la-rentrée-au-chenil.mp3'
import laRetraiteDeGrace from '../medias/audios/la-retraite-de-grâce.mp3'
import laRetraiteManquee from '../medias/audios/la-retraite-manquée.mp3'
import laRetraitePrise from '../medias/audios/la-retraite-prise.mp3'
import laRoyale from '../medias/audios/la-royale.mp3'
import laSaintHubert from '../medias/audios/la-saint-hubert.mp3'
import laSortieDeLeau from '../medias/audios/la-sortie-de-leau.mp3'
import laSortieDuChenil from '../medias/audios/la-sortie-du-chenil.mp3'
import laTêteBizarde from '../medias/audios/la-tête-bizarde.mp3'
import laVue from '../medias/audios/la-vue.mp3'
import leDixCorsJeunement from '../medias/audios/le-10-cors-jeunement.mp3'
import leBatLeau from '../medias/audios/le-bat-leau.mp3'
import leChange from '../medias/audios/le-change.mp3'
import leChangementDeForet from '../medias/audios/le-changement-de-forêt.mp3'
import leChevreuil from '../medias/audios/le-chevreuil.mp3'
import leChevreuilDeBourgogne from '../medias/audios/le-chevreuil-de-bourgogne.mp3'
import leDaguet from '../medias/audios/le-débuché.mp3'
import leDebuche from '../medias/audios/le-daguet.mp3'
import leDepartPourLaChasse from '../medias/audios/le-départ-pour-la-chasse.mp3'
import leLancer from '../medias/audios/le-lancer.mp3'
import leLapin from '../medias/audios/le-lapin.mp3'
import leLievre from '../medias/audios/le-lièvre.mp3'
import lePointDuJour from '../medias/audios/le-point-du-jour.mp3'
import leRelanceAVue from '../medias/audios/le-relance-a-vue.mp3'

var fanfares = [
    {
        "source": laLaie,
        "audio": new Audio(laLaie), 
        "name": "La laie",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : true,
        "lyrics" :
        `Madame laie, par les bois, s'en allait,\n
        Un beau matin, menant ses marcassins,\n
        Quand tout à coup près d'un ru rencontra\n
        Messire loup qui, railleur, lui parla.\n
        \n
        Que de boutis ont dû, je pense,\n
        User, ma mie, vos deux défenses.\n
        Ce pauvre nez n'en dirait mot,\n
        Si je croquais tous vos marmots.\n
        \n
        Mais notre laie qui ainsi n'entendait\n
        Tout d'un élan ce bellâtre chargeant,\n
        De son boutoir risible l'expédia,\n
        Par le bois voir là où elle n'était pas.`
    },
    {
        "source": LaMarcheDeVenerie,
        "audio": new Audio(LaMarcheDeVenerie), 
        "name": "La marche de vènerie",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : true,
        "lyrics" :
        `À la chasse nous allons !\n
        Voyez-nous partir en grand équipage.\n
        Belles dames, joyeux garçons,\n
        Chacun nous admire sur notre passage.\n
        \n
        Elégants cavaliers,\n
        Brillants officiers,\n
        Amazones légères !\n
        Mais Jeannette préfère\n
        Un jeune valet\n
        Très fier de ses mollets !\n
        \n
        À la chasse nous allons !\n
        Voyez-nous partir en grand équipage.\n
        Belles dames, joyeux garçons,\n
        Chacun nous admire sur notre passage.`
    },
    {
        "source": laRentreeAuChenil,
        "audio": new Audio(laRentreeAuChenil), 
        "name": "La rentrée au chenil",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : true,
        "lyrics" :
        `Au chenil,\n
        Le piqueur reconduit\n
        Ses chiens qui filent\n
        Bien doux derrière lui.\n
        \n
        Très en colère,\n
        Contre la meute entière\n
        Qui n'a su cette fois,\n
        Rien lancer dans les bois.\n
        \n
        Au chenil,\n
        Le piqueur reconduit\n
        Ses chiens qui filent\n
        Très doux derrière lui.`
    },
    {
        "source": laRetraiteDeGrace,
        "audio": new Audio(laRetraiteDeGrace), 
        "name": "La retraite de grâce",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 2,
        "inRingerCertificate" : false,
        "lyrics" :
        `Voici le soir,\n
        Cessons la chasse\n
        Et donnons-lui grâce !\n
        Il fait bien trop noir !\n
        \n
        Vers la maison,\n
        Amis faisons\n
        Retraite de grâce,\n
        Laissons notre chasse.\n
        \n
        Mais au matin\n
        A notre affaire,\n
        Sous ces noirs sapins,\n
        Y verrons clair !\n
        \n
        Et cette fois,\n
        Il faudra bien\n
        Qu'il cède, ma foi,\n
        Devant nos chiens !`
    },
    {
        "source": laRetraiteManquee,
        "audio": new Audio(laRetraiteManquee), 
        "name": "La retraite manquée",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 2,
        "inRingerCertificate" : false,
        "lyrics" :
        `Retraite manquée\n
        Il faudrait sonner,\n
        Car l'animal\n
        Nous a mis à mal !\n
        \n
        Nous sommes fourbus\n
        Et l'avons perdu !\n
        Il nous a joués,\n
        Il faudra l'avouer !\n
        \n
        Faisons contrition,\n
        Mais quelle confusion !\n
        Il faut sonner\n
        Retraite manquée !`
    },
    {
        "source": laRetraitePrise,
        "audio": new Audio(laRetraitePrise), 
        "name": "La retraite prise",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 2,
        "inRingerCertificate" : false,
        "lyrics" :
        `Sonnons la retraite,\n
        Mes vaillants amis,\n
        L'animal est pris.\n
        \n
        Ce fut belle fête,\n
        Contents et ravis,\n
        Rentrons au logis.\n
        \n
        Déjà, le soleil,\n
        Au couchant, disparaît.\n
        Laissons la forêt.\n
        \n
        Un bon vin pareil\n
        Au sang de notre cour\n
        Boirons tout à l'heure.`
    },
    {
        "source": laRoyale,
        "audio": new Audio(laRoyale), 
        "name": "La royale",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `C'est un dix-cors, qui vient de bondir.\n
        Sonnons la Royale qui, à tous, belle chasse veut dire.\n
        Notre savoir sera éprouvé.\n
        Nous ne pouvions pas mieux tomber.\n
        \n
        Savantes ruses, toujours il nous sert.\n
        Le change, croyez-moi, est l'un de ses méfaits.\n
        Mais plus forts que ce cerf,\n
        Nous saurons bien ravir son royal trophée.`
    },
    {
        "source": laSaintHubert,
        "audio": new Audio(laSaintHubert), 
        "name": "La Saint-Hubert",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Ô Saint-Hubert ! Ô patron de la chasse !\n
        Toi qu'exaltait la fanfare au galop !\n
        En poursuivant l'animal à la trace,\n
        Tu le forçais sous l'élan des chevaux.\n
        \n
        Nous les derniers descendants de ta race,\n
        Arrache-nous aux plaisirs avilis.\n
        Emplis nos cours de jeunesse et d'audace.\n
        Dans la forêt fais-nous chasseurs hardis.\n
        \n
        Quand tu viendras, la chasse terminée,\n
        Pour appeler notre nom à son tour,\n
        Epargne-nous les tristes mélopées,\n
        Tu sonneras pour nous le grand retour.`
    },
    {
        "source": laSortieDeLeau,
        "audio": new Audio(laSortieDeLeau), 
        "name": "La sortie de l'eau",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Il sort de l'eau,\n
        Son échine ruisselle.\n
        Mais il y reviendra bientôt.\n
        \n
        Hardi ! Vite en selle !\n
        Relançons nos chevaux !\n
        Au galop !`
    },
    {
        "source": laSortieDuChenil,
        "audio": new Audio(laSortieDuChenil), 
        "name": "La sortie du chenil",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Sortez du chenil,\n
        Votre ennui est fini.\n
        Aujourd'hui, mes bons chiens,\n
        Vous vous réjouirez bien !\n
        \n
        Arrière ! Ramonot,\n
        Rentre en meute, Faraud,\n
        Réservez votre ardeur\n
        Pour la voie, tout à l'heure !\n
        \n
        Sortez du chenil,\n
        Votre ennui est fini.\n
        Aujourd'hui, mes bons chiens,\n
        Vous vous réjouirez bien !`
    },
    {
        "source": laTêteBizarde,
        "audio": new Audio(laTêteBizarde), 
        "name": "La tête bizarde",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `C'est bien une tête bizarde,\n
        Que nous avons attaquée cette fois.\n
        \n
        Coiffé tout de travers, regarde ce cerf,\n
        Si reconnaissable à ses bois.\n
        \n
        Utile indice, ces bois tors qui causent surprise,\n
        Nous renseignant alors, éviteront des méprises.\n
        \n
        C'est bien une tête bizarde,\n
        Que nous avons attaquée cette fois.\n
        \n
        Coiffé tout de travers, regarde ce cerf,\n
        Si reconnaissable à ses bois.`
    },
    {
        "source": laVue,
        "audio": new Audio(laVue), 
        "name": "La vue",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `C'est bien notre animal, mes bons chiens,\n
        Taïaut ! Taïaut ! A lui, tenez bien.\n
        \n
        La vue sonnons à cette occasion,\n
        Puis sans retard aucun, prenons le départ.\n
        \n
        Déjà les chiens sont sur ses foulées,\n
        Poussons joyeux bien-allers.`
    },
    {
        "source": leDixCorsJeunement,
        "audio": new Audio(leDixCorsJeunement), 
        "name": "Le dix-cors jeunement",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Le rude et galant\n
        Dix-cors jeunement\n
        Se fait chasser longtemps.\n
        \n
        Les veneurs prudents\n
        Colleront à la voie\n
        De ce cerf, jusqu'aux abois.\n
        \n
        Beau, rude et galant\n
        Dix-cors jeunement\n
        Ruse et aime longtemps.`
    },
    {
        "source": leBatLeau,
        "audio": new Audio(leBatLeau), 
        "name": "Le bat-l'eau",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Il est à l'eau, mais dans son sillage,\n
        Les chiens progressent rapidement.\n
        \n
        Il fuit tout droit, activant sa nage\n
        Pour échapper au sort qui l'attend.\n
        \n
        Bat-l'eau, bat-l'eau, hardis, mes beaux,\n
        S'il se ménage, il aura vos dents.\n
        \n
        Nous verrons bien, sur l'autre rivage,\n
        Dans peu de temps, l'hallali courant.`
    },
    {
        "source": leChange,
        "audio": new Audio(leChange), 
        "name": "Le change",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `C'est un change, arrête mes chiens.\n
        Derrière, en meute reviens,\n
        Mon fouet a claqué.\n
        \n
        Vous avez manqué votre animal,\n
        Qui vous a sans mal\n
        Sa voie échangée.\n
        \n
        Mes valets, gare au forlongé.\n
        Allez, reprenez son pied\n
        Et mieux vous méfiez.`
    },
    {
        "source": leChangementDeForet,
        "audio": new Audio(leChangementDeForet), 
        "name": "Le changement de forêt",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Sonnons le changement de forêt,\n
        Nos chiens ont dans l'autre pénétré.\n
        \n
        Piquons des deux pour serrer de près,\n
        L'animal a de bons jarrets.\n
        \n
        Ô belle forêt,\n
        Où donc l'as-tu caché ?\n
        Livre-nous ton secret,\n
        Est-il loin ou près ?\n
        \n
        Allons, nous saurons le retrouver\n
        Dans cette nouvelle forêt.`
    },
    {
        "source": leChevreuil,
        "audio": new Audio(leChevreuil), 
        "name": "Le chevreuil",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Dans la blonde forêt parée de bruyère,\n
        L'agile chevreuil a fui.\n
        \n
        Hardis, mes beaux, ne vous laissez pas faire,\n
        Soyez rapides, rusés comme lui.\n
        \n
        Dans l'immense forêt, ras sur la fougère,\n
        L'habile chevreuil s'enfuit.`
    },
    {
        "source": leChevreuilDeBourgogne,
        "audio": new Audio(leChevreuilDeBourgogne), 
        "name": "Le chevreuil de Bourgogne",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Vivent les chevreuils de Bourgogne.\n
        Et la chasse au pays du vin.\n
        \n
        Et qu'aille au diable, l'humide Sologne,\n
        Où l'eau nous barre partout le chemin.\n
        \n
        Vivent les chevreuils de Bourgogne.\n
        Et la chasse au pays du vin.`
    },
    {
        "source": leDaguet,
        "audio": new Audio(leDaguet), 
        "name": "Le daguet",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `L'animal n'a sur la tête,\n
        Que deux perches modestement.\n
        \n
        Il faut que nos chiens s'apprêtent,\n
        Un daguet, ça court lestement.`
    },
    {
        "source": leDebuche,
        "audio": new Audio(leDebuche), 
        "name": "Le débuché",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `L'animal quitte la forêt\n
        Pour les terres labourées ou les guérets.\n
        \n
        En débuchant, il s'est crû le maitre,\n
        Va, la ruse est connue.\n
        \n
        Mais maintenant il voudrait bien être\n
        Dans les bois pour qu'on ne le voit plus.`
    },
    {
        "source": leDepartPourLaChasse,
        "audio": new Audio(leDepartPourLaChasse), 
        "name": "Le départ pour la chasse",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `L'animal quitte la forêt\n
        Pour les terres labourées ou les guérets.\n
        \n
        En débuchant, il s'est crû le maitre,\n
        Va, la ruse est connue.\n
        \n
        Mais maintenant il voudrait bien être\n
        Dans les bois pour qu'on ne le voit plus.`
    },
    {
        "source": leLancer,
        "audio": new Audio(leLancer), 
        "name": "Le lancer",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Les rapprocheurs sont en émoi.\n
        Ils ont, j'en suis sûr, empaumé la voie.\n
        \n
        Afin de le bien publier\n
        Ils saluent d'un superbe récri le hallier.\n
        \n
        C'est le lancé, il faut aller\n
        Nous verrons bientôt si l'on doit découpler.`
    },
    {
        "source": leLapin,
        "audio": new Audio(leLapin), 
        "name": "Le lapin",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Vers sa garenne, le lapin\n
        Effrayé, peine, fuyant les chiens.\n
        \n
        Croit-il, qu'atteint le beau domaine\n
        Où il les mène, le gardera bien.\n
        \n
        C'est peu sûr, le pauvret,\n
        Ne connaît le furet,\n
        Qui viendra visiter ses cachettes.\n
        \n
        Affamé, ce dernier,\n
        Pourrait bien l'y saigner,\n
        Si elles n'ont des sorties bien secrètes.\n
        \n
        Vers sa garenne, le lapin\n
        Effrayé, peine, fuyant les chiens.\n
        \n
        Croit-il, qu'atteint le beau domaine\n
        Où il les mène, le gardera bien.`
    },
    {
        "source": leLievre,
        "audio": new Audio(leLievre), 
        "name": "Le lièvre",
        "copyright": "Vènerie.org",
        "type": "Fanfare d'animaux",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `De même que Jean Lapin, son compère,\n
        Le capucin, aussi poltron que lui,\n
        \n
        Voudrait être à cent pieds sous terre,\n
        Mais c'est en vain qu'il cherche un abri.\n
        \n
        Le malheureux, dans cette misère,\n
        Couche et se rase derrière un épi.\n
        \n
        De même que Jean Lapin, son compère,\n
        Le capucin, aussi poltron que lui,\n
        \n
        Voudrait être à cent pieds sous terre,\n
        Mais c'est en vain qu'il cherche un abri.`
    },
    {
        "source": lePointDuJour,
        "audio": new Audio(lePointDuJour), 
        "name": "Le point du jour",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `C'est la blonde aurore\n
        Qui vient encore\n
        Dorer les roches\n
        Des forêts proches,\n
        Eclairer les monts.\n
        \n
        Chantons à pleins poumons,\n
        Le gai retour\n
        De la vie et du jour.\n
        \n
        Piqueur ! la voie,\n
        Nous met en joie,\n
        Prends ton limier,\n
        Au bois arrive premier.\n
        \n
        C'est la blonde aurore\n
        Qui vient encore\n
        Dorer les roches\n
        Des forêts proches,\n
        Eclairer les monts.\n
        \n
        Chantons à pleins poumons,\n
        Le gai retour\n
        De la vie et du jour.`
    },
    {
        "source": leRelanceAVue,
        "audio": new Audio(leRelanceAVue), 
        "name": "Le relancé à vue",
        "copyright": "Vènerie.org",
        "type": "Fanfare de circonstances",
        "fame": 1,
        "inRingerCertificate" : false,
        "lyrics" :
        `Le fol, il se croyait sauvé\n
        Dans ce fossé.\n
        Mais nos chiens l'ont retrouvé\n
        Et l'ont, à vue, relancé.\n
        \n
        A lui mes beaux !\n
        Tenez bien à sa peau !\n
        Taïaut !\n`
    },
  ];

export default fanfares;