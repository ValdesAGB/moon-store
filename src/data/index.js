import ChemiseHomme1 from '../assets/ChemiseHomme1.jpg'
import ChemiseHomme2 from '../assets/ChemiseHomme2.jpg'
import ChemiseHomme3 from '../assets/ChemiseHomme3.jpg'
import ChemiseFemme1 from '../assets/ChemiseFemme1.jpg'
import ChemiseFemme2 from '../assets/ChemiseFemme2.jpg'
import RobeFemme1 from '../assets/RobeFemme1.jpg'
import RobeFemme2 from '../assets/RobeFemme2.jpg'
import RobeFemme3 from '../assets/RobeFemme3.jpg'
import ShortHomme1 from '../assets/ShortHomme1.png'
import ShortHomme2 from '../assets/ShortHomme2.jpg'
import ShortFemme1 from '../assets/ShortFemme1.jpg'
import ShortFemme2 from '../assets/ShortFemme2.jpg'
import ShortFemme3 from '../assets/ShortFemme3.jpg'
import shotEnfant from '../assets/shotEnfant.jpg'

export const welcomeMessage = ['Bienvenue dans notre boutique en ligne']

export const siteName = ['MoonStore']

export const navItems = [
  'Acceuil',
  'Femme',
  'Homme',
  'Collection',
  'Enfant',
  'à propos',
]

export const clothes = [
  {
    id: 'H1',
    name: 'Chemise simple',
    categorie: 'Chemise',
    cut: {
      cutL: false,
      cutM: false,
      cutX: true,
      cutXL: true,
      cutXXL: false,
    },
    price: 30,
    onSale: false,
    sex: 'male',
    forWho: 'Adulte',
    cover: ChemiseHomme1,
  },

  {
    id: 'M2',
    name: 'Chemise blanc',
    categorie: 'Chemise',
    cut: {
      cutL: true,
      cutM: false,
      cutX: false,
      cutXL: false,
      cutXXL: true,
    },
    price: 25,
    onSale: true,
    sex: 'male',
    forWho: 'Adulte ',
    cover: ChemiseHomme2,
  },

  {
    id: 'M3',
    name: 'Chemise veste',
    categorie: 'Chemise',
    cut: {
      cutL: false,
      cutM: true,
      cutX: false,
      cutXL: true,
      cutXXL: true,
    },
    price: 45,
    onSale: false,
    sex: 'male',
    forWho: 'Adult',
    cover: ChemiseHomme3,
  },

  {
    id: 'F1',
    name: 'Chemise - robe ',
    categorie: 'Chemise',
    cut: {
      cutL: true,
      cutM: true,
      cutX: true,
      cutXL: false,
      cutXXL: false,
    },
    price: 35,
    onSale: false,
    sex: 'feminine',
    forWho: 'Adult',
    cover: ChemiseFemme1,
  },

  {
    id: 'F2',
    name: 'Chemise veste',
    categorie: 'Chemise',
    cut: {
      cutL: false,
      cutM: false,
      cutX: false,
      cutXL: false,
      cutXXL: false,
    },
    price: 20,
    onSale: false,
    sex: 'feminine',
    forWho: 'Adult',
    cover: ChemiseFemme2,
  },

  {
    id: 'R-F1',
    name: 'Robe chic',
    categorie: 'Robe',
    cut: {
      cutL: false,
      cutM: false,
      cutX: true,
      cutXL: false,
      cutXXL: false,
    },
    price: 67,
    onSale: false,
    sex: 'feminine',
    forWho: 'minor',
    cover: RobeFemme1,
  },

  {
    id: 'R-F2',
    name: 'Robe soirée',
    categorie: 'Robe',
    cut: {
      cutL: false,
      cutM: false,
      cutX: false,
      cutXL: false,
      cutXXL: false,
    },
    price: 90,
    onSale: false,
    sex: 'feminine',
    forWho: 'Adult',
    cover: RobeFemme2,
  },

  {
    id: 'R-F3',
    name: 'Robe droite',
    categorie: 'Robe',
    cut: {
      cutL: false,
      cutM: false,
      cutX: false,
      cutXL: true,
      cutXXL: true,
    },
    price: 95,
    onSale: false,
    sex: 'feminie',
    forWho: ' Adult and minor',
    cover: RobeFemme3,
  },

  {
    id: 'S-H1 ',
    name: 'Short fiesta',
    categorie: 'Short',
    cut: {
      cutL: false,
      cutM: true,
      cutX: true,
      cutXL: false,
      cutXXL: false,
    },
    price: 45,
    onSale: false,
    sex: 'male',
    forWho: 'All',
    cover: ShortHomme1,
  },

  {
    id: 'S-H2',
    name: 'Short décontracté',
    categorie: 'Short',
    cut: {
      cutL: true,
      cutM: true,
      cutX: true,
      cutXL: true,
      cutXXL: true,
    },
    price: 105,
    onSale: false,
    sex: 'male',
    forWho: 'All',
    cover: ShortHomme2,
  },

  {
    id: ' S-F1',
    name: 'Short sexy',
    categorie: 'Short',
    cut: {
      cutL: true,
      cutM: true,
      cutX: true,
      cutXL: true,
      cutXXL: true,
    },
    price: 125,
    onSale: false,
    sex: 'feminine',
    forWho: 'All',
    cover: ShortFemme1,
  },

  {
    id: 'S-F2',
    name: 'Short court',
    categorie: 'Short',
    cut: {
      cutL: true,
      cutM: true,
      cutX: true,
      cutXL: false,
      cutXXL: true,
    },
    price: 99,
    onSale: false,
    sex: 'feminine',
    forWho: 'All and minor',
    cover: ShortFemme2,
  },

  {
    id: 'S-F3',
    name: 'Short pour sport',
    categorie: 'Short',
    cut: {
      cutL: false,
      cutM: false,
      cutX: true,
      cutXL: true,
      cutXXL: true,
    },
    price: 130,
    onSale: false,
    sex: 'Feminine',
    forWho: ' Adult',
    cover: ShortFemme3,
  },

  {
    id: 'E1',
    name: 'Complet pour enfant',
    categorie: 'Complet',
    cut: {
      cutL: true,
      cutM: true,
      cutX: true,
      cutXL: false,
      cutXXL: false,
    },
    price: 150,
    onSale: false,
    sex: 'All',
    forWho: 'Child',
    cover: shotEnfant,
  },
]
