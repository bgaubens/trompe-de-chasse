import laLaie from '../medias/audios/la-laie.mp3'
import LaMarcheDeVenerie from '../medias/audios/la-marche-de-vènerie.mp3'
import laRentreeAuChenil from '../medias/audios/la-rentrée-au-chenil.mp3'
import laRetraiteDeGrace from '../medias/audios/la-retraite-de-grâce.mp3'
import laRetraiteManquee from '../medias/audios/la-retraite-manquée.mp3'
import laRetraitePrise from '../medias/audios/la-retraite-prise.mp3'

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
  ];

export default fanfares;