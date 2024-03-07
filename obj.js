// const ultraman = {
//     name: "tiga",
//     height: 168,
//     isDead: false
// }

// console.log(ultraman.name, ultraman.height)
// console.log(ultraman["name"], ultraman["height"])

// const prop = "height"
// console.log(ultraman[prop])

// ultraman.name = "dyna"
// console.log(ultraman)

// ---------------------------------------------------------------------------

// const ultraman = {
//     name: "tiga",
//     height: 168,
//     isDead: false,
//     address: {
//         planet: {
//             name: "namex",
//             moon: [{
//                 name: "moonlight",
//                 sizw: 100
//             }, {
//                 name: "moonshade",
//                 size: 80
//             }, {
//                 name: "moorung",
//                 size: 50
//             }]
//         },
//         galaxy: "andromeda 12",
//     },
//     weapons: ["sword", "shield", "lasso"]
// }

// // console.log(ultraman.address.planet.moon[1].size)

// const hero = { ...ultraman } //menampilkan objek ultraman yang telah diperbarui oleh hero
// const hero2 = { ultraman } //menampilkan objek ultraman yang telah tidak direference oleh hero
// hero.color = "red"
// console.log(hero)
// console.log(hero2)
// console.log(ultraman)


const ultraman = {
    name: "tiga",
    height: 168,
    isDead: false,
    attack: () => {
        console.log("sword atttack!")
    },
    beam: (number) => console.log("spacium ray beam " + number + "%")
}

ultraman.attack()
ultraman.beam(75)
