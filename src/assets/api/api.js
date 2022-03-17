const api = [
    {
        id: 1,
        name: 'Plum tomato',
        category: 'fruits',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_540x.jpg?v=1565592563',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_540x.jpg?v=1565592563',
        popularity: 'top'
    },
    {
        id: 2,
        name: 'pinkerton avocado',
        category: 'fruits',
        price: '5.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_540x.jpg?v=1565594363',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_540x.jpg?v=1565594363',
        popularity: 'top'
    },
    {
        id: 3,
        name: 'red pithaya',
        category: 'fruits',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_540x.jpg?v=1565594423',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_540x.jpg?v=1565594423',
        popularity: 'top'
    },
    {
        id: 4,
        name: 'banana',
        category: 'fruits',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302',
        popularity: 'best'
    },
    {
        id: 5,
        name: 'fresh strawberries',
        category: 'fruits',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_540x.jpg?v=1565591604',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_540x.jpg?v=1565591604',
        popularity: 'best'
    },
    {
        id: 6,
        name: 'violet cauliflower',
        category: 'fruits',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_540x.jpg?v=1565592922',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_540x.jpg?v=1565592922',
        popularity: 'best'
    },
    {
        id: 7,
        name: 'eggplant',
        category: 'fruits',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_540x.jpg?v=1565594063',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_540x.jpg?v=1565594063'
    },
    {
        id: 8,
        name: 'organic lemon',
        category: 'fruits',
        price: '20.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_50x50.jpg?v=1565592743',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_540x.jpg?v=1565592743'
    },
    {
        id: 9,
        name: 'red pithaya',
        category: 'vegetables',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_540x.jpg?v=1565594423',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_540x.jpg?v=1565594423'
    },
    {
        id: 10,
        name: 'pinkerton avocado',
        category: 'vegetables',
        price: '5.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_540x.jpg?v=1565594363',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_540x.jpg?v=1565594363'
    },
    {
        id: 11,
        name: 'banana',
        category: 'vegetables',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302'
    },
    {
        id: 12,
        name: 'peanut butter',
        category: 'vegetables',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/978a7499-ce93-4da0-a805-fb449a34e3be_540x.jpg?v=1565594242',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2cc67697-7856-4b5c-8f04-fe5cd3112e2b_540x.jpg?v=1565594242',
        popularity: 'sale'
    },
    {
        id: 13,
        name: 'butter pista',
        category: 'vegetables',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181',
        popularity: 'sale'
    },
    {
        id: 14,
        name: 'basil pesto',
        category: 'vegetables',
        price: '8.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_540x.jpg?v=1565594123',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_540x.jpg?v=1565594123',
        popularity: 'sale'
    },
    {
        id: 15,
        name: 'eggplant',
        category: 'vegetables',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_540x.jpg?v=1565594063',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_540x.jpg?v=1565594063'
    },
    {
        id: 16,
        name: 'violet cauliflower',
        category: 'vegetables',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_540x.jpg?v=1565592922',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_540x.jpg?v=1565592922'
    },
    {
        id: 17,
        name: 'banana',
        category: 'milk',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302'
    },
    {
        id: 18,
        name: 'butter pista',
        category: 'milk',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181'
    },
    {
        id: 19,
        name: 'basil pesto',
        category: 'milk',
        price: '8.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_540x.jpg?v=1565594123',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_540x.jpg?v=1565594123'
    },
    {
        id: 20,
        name: 'eggplant',
        category: 'milk',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_540x.jpg?v=1565594063',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_540x.jpg?v=1565594063'
    },
    {
        id: 21,
        name: 'violet cauliflower',
        category: 'milk',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_540x.jpg?v=1565592922',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_540x.jpg?v=1565592922'
    },
    {
        id: 22,
        name: 'organic lemon',
        category: 'milk',
        price: '20.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_50x50.jpg?v=1565592743',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_540x.jpg?v=1565592743'
    },
    {
        id: 23,
        name: 'orange cauliflower',
        category: 'milk',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower_50x50.jpg?v=1565592622',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower-2_50x50.jpg?v=1565592622'
    },
    {
        id: 24,
        name: 'sorbet ice cream',
        category: 'milk',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19_50x50.jpg?v=1565592383',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49_50x50.jpg?v=1565592383'
    },
    {
        id: 25,
        name: 'Plum tomato',
        category: 'banana',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_540x.jpg?v=1565592563',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_540x.jpg?v=1565592563'
    },
    {
        id: 26,
        name: 'pinkerton avocado',
        category: 'banana',
        price: '5.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_540x.jpg?v=1565594363',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_540x.jpg?v=1565594363'
    },
    {
        id: 27,
        name: 'red pithaya',
        category: 'banana',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_540x.jpg?v=1565594423',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_540x.jpg?v=1565594423'
    },
    {
        id: 28,
        name: 'banana',
        category: 'banana',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302'
    },
    {
        id: 29,
        name: 'fresh strawberries',
        category: 'banana',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_540x.jpg?v=1565591604',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_540x.jpg?v=1565591604'
    },
    {
        id: 30,
        name: 'violet cauliflower',
        category: 'banana',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_540x.jpg?v=1565592922',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_540x.jpg?v=1565592922'
    },
    {
        id: 31,
        name: 'eggplant',
        category: 'banana',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_540x.jpg?v=1565594063',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_540x.jpg?v=1565594063'
    },
    {
        id: 32,
        name: 'organic lemon',
        category: 'banana',
        price: '20.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_50x50.jpg?v=1565592743',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_540x.jpg?v=1565592743'
    },
    {
        id: 33,
        name: 'red pithaya',
        category: 'sea',
        price: '15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_540x.jpg?v=1565594423',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_540x.jpg?v=1565594423'
    },
    {
        id: 34,
        name: 'pinkerton avocado',
        category: 'sea',
        price: '5.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_540x.jpg?v=1565594363',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_540x.jpg?v=1565594363'
    },
    {
        id: 35,
        name: 'banana',
        category: 'sea',
        price: '18.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302'
    },
    {
        id: 36,
        name: 'peanut butter',
        category: 'sea',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/978a7499-ce93-4da0-a805-fb449a34e3be_540x.jpg?v=1565594242',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2cc67697-7856-4b5c-8f04-fe5cd3112e2b_540x.jpg?v=1565594242'
    },
    {
        id: 37,
        name: 'butter pista',
        category: 'sea',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_540x.jpg?v=1565594181'
    },
    {
        id: 38,
        name: 'basil pesto',
        category: 'sea',
        price: '8.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_540x.jpg?v=1565594123',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_540x.jpg?v=1565594123'
    },
    {
        id: 39,
        name: 'eggplant',
        category: 'sea',
        price: '12.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_540x.jpg?v=1565594063',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_540x.jpg?v=1565594063'
    },
    {
        id: 40,
        name: 'violet cauliflower',
        category: 'sea',
        price: '10.00', 
        image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_540x.jpg?v=1565592922',
        imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_540x.jpg?v=1565592922'
    }
]

export default api;


export let slide = [
    {
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/e94f6f87-244e-4443-8604-9cdbc7c24fd3_540x.jpg?v=1565592202',
        hovered: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/b431fc16-4874-4b0d-8cfa-34b8e7977ed1_540x.jpg?v=1565592202',
        title: 'Pineapple slices',
        price: '$20.00',
        discount: '$22.00'
    },
    {
        id: 100,
        img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_540x.jpg?v=1565592743',
        hovered: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_540x.jpg?v=1565592743',
        title: 'Organic lemon',
        price: '$20.00',
        discount: '$25.00'
    },
    {
        id: 200,
        img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19_540x.jpg?v=1565592383',
        hovered: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49_540x.jpg?v=1565592383',
        title: 'Sorbet ice cream',
        price: '$12.00',
        discount: '$15.00'
    },
    {
        id: 300,
        img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime_540x.jpg?v=1565592262',
        hovered: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime-1_540x.jpg?v=1565592262',
        title: 'Purea Lime',
        price: '$12.00',
        discount: '$18.00'
    }
]