var firstgen = [
    {
        name: "King Georger VI",
        paren: ["Price Phillip","Queen Elizabeth II","Prince Margaret"],
        childof: [""],
        childOf: function () {
            return this.childof.map(parent => firstgen[0].childof).join(' & ') || "unknown"
          }
    },

    {
        name: "Queen Elizabeth",
        paren: ["Price Phillip","Queen Elizabeth II","Prince Margaret"],
        childof: [""],
        childOf: function () {
            return this.childof.map(parent => firstgen[1].childof).join(' & ') || "unknown"
          }
    }
]

var secondgen = [
    {
        name: "Prince Philip",
        parent: [" "],
        childof: ["King Georger VI & Queen Elizabeth"],
        childOf: function () {
            return this.childof.map(parent => secondgen[0].childof).join(' & ') || "unknown"
          }
    },
    {
        name: "Queen Elizabeth II",
        parent: [" "],
        childof: ["King Georger VI & Queen Elizabeth"],
        childOf: function () {
            return this.childof.map(parent => secondgen[1].childof).join(' & ') || "unknown"
          }
    }
]

var thirdgen = [
    {
        name: "camila",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[0].childof).join(' & ') || "unknown"
          }
    },
    {
        name: "Charles",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[1].childof).join(' & ') || "unknown"
          },
    },
    {
        name: "Diana",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[2].childof).join(' & ') || "unknown"
          }
    },
    {
        name: "Anne",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[3].childof).join(' & ') || "unknown"
          }
    },
    {
        name: "Prince Andrew",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[4].childof).join(' & ') || "unknown"
          }
    },
    {
        name: "Prince Edward",
        parent: [" "],
        childof: ["Prince Philip & Queen Elizabeth II"],
        childOf: function () {
            return this.childof.map(parent => thirdgen[5].childof).join(' & ') || "unknown"
          },
    },
]
  console.log(firstgen[0].childOf())
