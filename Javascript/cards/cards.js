import { shuffleCards } from "./shuffleCards.js"

export default class cards {
    constructor() {
        this.cardArray = [
            "backgroundDweller",
            "batteryMonster",
            "evacuationOrders",
            "extraHead",
            "metamorph",
            "opportunist",
            "rootingForTheUnderDog",
            "shrinkRay",
            "completeDestruction",
            "energyDrink",
            "giantBrain",
            "jets",
            "mimic",
            "novaBreath",
            "parasiticTentacles",
            "poisonSpit",
            "alphaMonster",
            "camouflage",
            "gourmet",
            "herbivore",
            "plotTwist",
            "smokeCloud",
            "spikedTail",
            "wereOnlyMakingItStronger",
            "eaterOfTherDead",
            "energyHoarder",
            "extraHead",
            "fireBreathing",
            "friendOfChildren",
            "poisonQuills",
            "rapidHealing",
            "regeneration",
            "alienOrigin",
            "armorPlating",
            "freezeTime",
            "healingRay",
            "herdCuller",
            "itHasAChild",
            "urbavore",
            "wings",
            "acidAttack",
            "burrowing",
            "detritivore",
            "evenBigger",
            "madeInALab",
            "mediaFriendly",
            "psychicProbe",
            "stretchy",
            "energize",
            "evacuationOrders",
            "flameThrower",
            "frenzy",
            "heal",
            "highAltitudeBombing",
            "solarPowered",
            "vastStorm",
            "apartmentBuilding",
            "commuterTrain",
            "cornerStore",
            "deathFromAbove",
            "gasRefinery",
            "jetFighters",
            "nationalGuard",
            "nuclearPowerPlant",
            "skyScrapper",
            "tank"
        ]
    }

    shuffle() {
        return ["backgroundDweller",
                "batteryMonster",
                "evacuationOrders",
                "extraHead",
                "metamorph",
                "opportunist"];
        return shuffleCards(this.cardArray);
    }
}