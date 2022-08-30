import ImageOne from './images/food.jpg';
import ImageTwo from './images/house-two.jpg'
import ImageThree from './images/house.jpg';
import ImageFour from './images/interior-two.jpg';
import ImageFive from './images/interior.jpg';
import ImageSix from './images/light.jpg'
import ImageSeven from './images/housing.jpg'

export const menuItems = [
  {
    id: 1,
    title: 'About',
    link: './about',
  },
  {
    id: 2,
    title: 'Home',
    link: './home',
  },
  {
    id: 3,
    title: 'FAQS',
    link: './faqs',
  },
  {
    id: 4,
    title: 'Feedback',
    link: './feedback',
  },
];

export const sliderImages = [
  {
    id: 1,
    title: 'Beauty in interiors',
    price: '5000 Dollars',
    path: './home',
    label: 'Beauty and comfort',
    Image: ImageFour,
    alt: 'Bedroom',
  },
  {
    id: 2,
    title: 'Living the dream with your children',
    price: '250,000 Dollars',
    path: './home',
    label: 'Live the dream',
    Image: ImageTwo,
    alt: 'House',
  },
  {
    id: 3,
    title: 'Living healthy means living long',
    price: '300,000 Dollars',
    path: './home',
    label: 'Live healthy',
    Image: ImageThree,
    alt: 'House',
  },
  {
    id: 4,
    title: 'Eat Beautiful',
    price: '1000 Dollars',
    path: './home',
    label: 'Eat with joy',
    Image: ImageOne,
    alt: 'Dining',
  },
  {
    id: 5,
    title: 'Beautify your home',
    price: '5000 Dollars',
    path: './contact',
    label: 'Live in beauty',
    Image: ImageFive,
    alt: 'Interior Decoration',
  },
];
export const secone = [
  {
    id: 10,
    heading: 'Explore beautiful home',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo cum autem distinctio, repudiandae mollitia aperiam esse quidem, iure exercitationem eligendi omnis alias totam, non quod cumque possimus a ea dicta!',
    paragraphTwo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt assumenda fuga officiis ullam eligendi? Dolorum eius iusto ex dolorem eveniet.',
    button: 'View More',
    image: ImageSix,
    reverse: false,
    animations: 100,
  },
]
export const sectwo = [
  {
    id: 12,
    heading: 'View our newest Homes',
    image: ImageTwo,
    description: '8 Bed 10 Bath House in Banana Island Lekki',
    button: 'View Details',
    imageTwo: ImageFive,
    descriptionTwo: '4 Bed 2 Bath House in Ajah Oceanbay'
  },
]
export const secthree = [
  {
    id: 13,
    heading: 'Stunning Interior',
    paragraph:
      'Lorem ipsum dolor repudiandae mollitia aperiam esse quidem, iure exercitationem eligendi omnis alias totam, non quod cumque possimus a ea dicta!',
    paragraphTwo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt assumenda fuga officiis ullam eligendi?',
    button: 'Learn More',
    image: ImageFive,
    reverse: true,
    animations: 50,
  },
];
export const secfour = [
  {
    id: 14,
    heading: 'Modern designs',
    paragraph:  'Lorem ipsum dolor repudiandae mollitia aperiam esse quidem, iure exercitationem eligendi omnis alias totam, non quod cumque possimus a ea dicta!',
    paragraphTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt assumenda fuga officiis ullam eligendi?',
    button: 'View more',
    image: ImageSeven,
    reverse: true,
    animations: 50,
  },
]
