const { url } = require('inspector');
const { Product } = require('../models');

const productData = [
    {
        product_image: "st-tos-phaser.jpg",
        product_name: 'Star Trek TOS Phaser',
        price: 74.99,
        stock: 14,
        category_id: 1,
    },
    {   product_image: "st-tng-phaser.jpg",
        product_name: 'Star Trek TNG Phaser',
        price: 24.99,
        stock: 15,
        category_id: 6,
    },
    {   product_image: "bsg-model.jpg",
        product_name: 'BSG Galactica Model',
        price: 59.99,
        stock: 25,
        category_id: 3,
    },
    {   product_image: "sw-lightsaber.jpg",
        product_name: 'Star Wars Lightsaber',
        price: 22.99,
        stock: 12,
        category_id: 2,
    },
    {   product_image: "naruto-weapons.jpg",
        product_name: 'Naruto Weapons Box',
        price: 35.99,
        stock: 50,
        category_id: 4,
    },
    {   product_image: "hedwig-glass-case.jpg",
        product_name: 'Hedwig in glass case',
        price: 49.99,
        stock: 22,
        category_id: 5,
    },
    {   product_image: "st-voy-shirt.jpg",
        product_name: 'Star Trek Voyager Uniform Shirt',
        price: 79.99,
        stock: 38,
        category_id: 6,
    },
    {   product_image: "drgnbl-z-vol1.jpg",
        product_name: 'DragonBall Z Vol. 1',
        price: 49.99,
        stock: 77,
        category_id: 4,
    },

    {   product_image: "harry-potter-hoodie.jpg",
        product_name: 'Harry Potter Hoodie',
        price: 59.99,
        stock: 62,
        category_id: 5,
    },
    {   product_image: "tower-of-god-hoodie.jpg",
        product_name: 'Tower of God Hoodie',
        price: 39.99,
        stock: 33,
        category_id: 4,
    },

    {   product_image: "st-ent-signed-print.jpg",
        product_name: 'ST Enterprise Signed Print',
        price: 19.99,
        stock: 63,
        category_id: 1,
    },
    {   product_image: "bsg-dogtags.jpg",
        product_name: 'BSG Screen Worn Dog Tags',
        price: 199.99,
        stock: 60,
        category_id: 3,
    },
    {   product_image: "harry-potter-mug.jpg",
        product_name: 'Harry Potter Mug',
        price: 19.99,
        stock: 18,
        category_id: 5,
    },
    {   product_image: "bsg-so-say-we-all-mug.jpg",
        product_name: 'BSG "So say we all" Mug',
        price: 14.99,
        stock: 17,
        category_id: 3,
    },
    {   product_image: "life-size-darth-vader.jpg",
        product_name: 'Life-sized Darth Vader Statue',
        price: 1999.99,
        stock: 96,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;