import spaceMug from './mugs/spaceMug.png';
import gamerMug from './mugs/gamerMug.png';
import coffeeMug from './mugs/coffeeMug.png';
import catsMug from './mugs/catsMug.png';
import travelerMug from './mugs/travelerMug.png';
import retroMug from './mugs/retroMug.png';

const mugs = [
    {
        id: 1,
        title: "Space Mug",
        description: "Ceramic mug with space print and coating that changes color when heated.",
        price: 990,
        image: spaceMug,
        rating: {
            rate: 4.8,
            count: 152
        },
        quantity: 1,
    },
    {
        id: 2,
        title: "Gamer Mug",
        description: "Stylish mug for gamers with a logo and a comfortable handle in the shape of a gamepad.",
        price: 1200,
        image: gamerMug,
        rating: {
            rate: 4.7,
            count: 97
        },
        quantity: 1,
    },
    {
        id: 3,
        title: "Coffee first Mug",
        description: "Large ceramic mug for true coffee lovers, volume 500 ml.",
        price: 850,
        image: coffeeMug,
        rating: {
            rate: 4.6,
            count: 204
        },
        quantity: 1,
    },
    {
        id: 4,
        title: "Cats and comfort Mug",
        description: "Cute cat print and wool pattern, perfect for warm drinks on cold evenings.",
        price: 750,
        image: catsMug,
        rating: {
            rate: 4.9,
            count: 321
        },
        quantity: 1,
    },
    {
        id: 5,
        title: "Traveler Mug",
        description: "Metal thermo mug with vacuum insulation, keeps heat up to 6 hours.",
        price: 1500,
        image: travelerMug,
        rating: {
            rate: 4.8,
            count: 178
        },
        quantity: 1,
    },
    {
        id: 6,
        title: "Retro Pixels Mug",
        description: "Ceramic mug with a retro 8-bit gaming design inspired by classic arcade games.",
        price: 990,
        image: retroMug,
        rating: {
            rate: 4.7,
            count: 215
        },
        quantity: 1,
    }
];

export default mugs;