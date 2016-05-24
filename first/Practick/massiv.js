var str = "Hello, world!!!";
var flag = true;
var notknown = undefined;

//row with no logic

console.log(str);
console.log(flag);
console.log(notknown);

var shoplist = "";
shoplist = shoplist + "lemon";
shoplist = shoplist + ",orange";
shoplist = shoplist + ",kukumber";

// нумерованный список (массив)

var shoplist_2 = [];
shoplist_2[0] = "lemon";
shoplist_2[1] = "orange";
shoplist_2[2] = "tank";
shoplist_2[3] = "cucumber";

console.log(shoplist_2);


delete shoplist_2 [1];
delete shoplist_2 [2];
console.log(shoplist_2);

// push - создает список по порядку(массив)

var list = [];

list.push("lemon");
list.push("orange");
list.push("tank");

console.log(list);


// 2-х, 3-х массивы
var extlist = [
    [
        "rice",
        "grechka",
        "volk"
    ],
    [

        "balalaika",
        [
            "USD",
            "eur",
            "uah",
            "gbp"
        ]
    ]
];
console.log(extlist);
// console.log , console.dir - проверить что выполняется

// именованный список,


var profile = {
    name: "Dima",
    age: 26,
    email: "***.@ua"
};

console.log(profile.name);

// смешанный, вывод на экран "money"

var strukture = {
    name: "Dima",
    address: {
        street: "",
        city: "",
        country: ""
    },
    skills: [
        "testing",
        "debaging",
        "reiding",
        "speaking"
    ],
    things: [
        {
            color: "red",
            price: 20,
            name: "pants",
            packets: {
                first: [
                    "gun",
                    "money"
                ],
                secret: [
                    "condoms"
                ]

            }

        },
        {
            color: "blue",
            price: 300,
            name: "hair"
        },
        {
            color: "yellow",
            price: 500,
            name: "shorts"
        }
    ]
};

console.log(strukture.things[0].packets.first[1]);

var a = 1;
var b = a;

console.log(b);

var a2 = 1;
var b2 = a;

a2 = 2;

console.log(b2);

var a1 = {
    number: 3
};

var b1= a1;

console.log(b1.number);

a1.number = 5;

console.log(b1.number);







