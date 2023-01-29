function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

let houserKeeper1 = new HouseKeeper(12, "Abdulmumin", ["bedroom","bedroom","livingroom"]);
let houserKeeper2 = new HouseKeeper(13, "Adam isa", ["bedroom","bathroom","livingroom"]);
let houserKeeper3 = new HouseKeeper(14, "lenovo", ["bedroom","toilet","livingroom"]);
let houserKeeper4 = new HouseKeeper(15, "Apple", ["bedroom","compound","livingroom"]);


console.log(houserKeeper1)
console.log(houserKeeper2)
console.log(houserKeeper3)
console.log(houserKeeper4)