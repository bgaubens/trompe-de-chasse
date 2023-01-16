import deer from '../medias/images/deer.png'
import equipage from '../medias/images/equipage.png'
import horn from '../medias/images/horn.png'
import boar from '../medias/images/boar.png'

const exercices = [
    {name: "Voir toutes les fanfares", imgSrc: boar, class:"fullList", componentName:"FanfaresFullList", visible: false},
    {name: "Reconnaître les fanfares", imgSrc: equipage, class:"recognize", componentName:"Recognize", visible: false},
    {name: "Apprendre les paroles", imgSrc: deer, class:"lyrics", componentName:"Lyrics", visible: false},
    {name: "Apprendre les mélodies", imgSrc: horn, class:"melodies", componentName:"Melodies", visible: false}
  ]

export default exercices;