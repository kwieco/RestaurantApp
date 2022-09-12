import burger from './img/burger.png';
import frytki from './img/frytki.png';
import kebab from './img/kebab.png';
import spagetti from './img/spagetti.png';
import zapiekanka from './img/zapiekanka.png';

const data = {
    productData:[
        {
            id: 1,
            img: burger,
            title: 'Berger',
            desc: 'American Classic Burger ',
            price: 14,
        },
        {
            id: 2,
            img: frytki,
            title: 'Chips',
            desc: ' Fries with ketchap ',
            price: 12,
        },
        {
            id: 3,
            img: kebab,
            title: 'Kebab',
            desc: 'Turkish kebab with berenin',
            price: 20,
        },
        {
            id: 4,
            img: spagetti,
            title: 'Spagetti',
            desc: 'Spagetti bolognese',
            price: 25,
        },
        {
            id: 5,
            img: zapiekanka,
            title: 'Casserole',
            desc: 'casserole with mushrooms',
            price: 10,
        }
    ],
};

export default data;