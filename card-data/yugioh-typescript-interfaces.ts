export interface Output {
    cardEntities: Record<string, YuGiOhCard>,
    setEntities: Record<string, YuGiOhCardSetInformation>,
    cards: Array<string>,
    sets: Array<string>,
    stats: YuGiOhStats
}

interface YuGiOhStats {
    normalTraps: number,
    continuousTrap: number,
    counterTrap: number,
    normalSpells: number,
    fieldSpells: number,
    continuousSpells: number,
    quickPlaySpells: number,
    equipSpells: number,
    pendulumMonsters: number,
    fusionMonstersWithEffects: number,
    fusionMonstersWithNoEffects: number,
    synchroMonstersWithEffects: number,
    synchroMonstersWithNoEffects: number,
    flipMonsters: number,
    linkMonstersWithEffects: number,
    linkMonstersWithNoEffects: number,
    effectMonsters: number,
    normalMonsters: number,
    totalUniqueCards: number
}


export interface YuGiOhCard {
    cardType : string,
    linkLevel : string,
    attribute : string,
    level : number,
    type : string,
    atk : number,
    def : number,
    species : string,
    cardText : string,
    featuredInSets: Record<string, YuGiOhCardSetOverview>,
    konamiCardId: number
    masterDuelInfo : MasterDuelInfo
}

export interface MasterDuelInfo {
    cardRarity?: string,
    containedInPacks?: Array<string>
    isInMasterDuel: boolean
}

export interface YuGiOhCardSetInformation {
    setCode: string
    cardCode: string
    setName: string
    rarity: string
    rarityCode: string
}

export interface YuGiOhCardSetOverview {
    rarity: string
    cardCode: string
}
