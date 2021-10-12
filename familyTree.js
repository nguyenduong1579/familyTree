var first = [
    {
        const: ["King Georger VI","Queen Elizabeth"],
    }
]
var secondgen = [
    {
        const : ["Price Phillip","Queen Elizabeth II"],
        childOf: first[0],
    },
    {
        const : ["Prince Margaret"],
        childOf: first[0],
    },
]
var thirdgen = [
    {
        const: ["camila"],
        childOf: secondgen[0]
    },
    {
        const: ["Charles"],
        childOf: secondgen[0]
    },
    {
        const: ["Diana"],
        childOf: secondgen[0]
    },
    {
        const: ["Anne"],
        childOf: secondgen[0]
    },
    {
        const: ["Prince Andrew"],
        childOf: secondgen[0]
    },
    {
        const: ["Prince Edward"],
        childOf: secondgen[0]
    },

]
console.log(thirdgen[5].childOf.const);



