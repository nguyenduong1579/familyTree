var firstgen = [
    {
        name: "King Georger VI",
        paren: ["Price Phillip","Queen Elizabeth II","Prince Margaret"],
        ChildOf: "",
        childOf: function (){ 
            return this.childof;
        }
    },

    {
        name: "Queen Elizabeth",
        paren: ["Price Phillip","Queen Elizabeth II","Prince Margaret"],
        childOf: "",
        childOf: function (){ 
            return this.childof;
        }
    }
]

var secondgen = [
    {
        name: "Prince Philip",
        parent: [" "],
        childof: ["King Georger VI","Queen Elizabeth"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Queen Elizabeth II",
        parent: [" "],
        childof: ["King Georger VI","Queen Elizabeth"],
        childOf: function (){ 
            return this.childof;
        }
    }
]

var thirdgen = [
    {
        name: "camila",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Charles",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Diana",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Anne",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Prince Andrew",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
    {
        name: "Prince Edward",
        parent: [" "],
        childof: ["Prince Philip","Queen Elizabeth II"],
        childOf: function (){ 
            return this.childof;
        }
    },
]
  console.log(thirdgen[0].childOf())
