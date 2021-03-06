# Use of the JSON file

If using typescript you will find the interfaces helpful, they are included in the file 'yugioh-typescript-interfaces.ts'.

The entity pattern is used in this JSON file, why?

- The card name acts as the key for the information, so if you know the name of the card you are able to quickly and efficiently get hold of that card.
- If you want to iterate over all cards you can do so by using the ```cards``` property

# Examples

Below are a number of examples on how you could use this json, the examples are in ``typescript``, if you need an example in any other language open an issue for now

## Generic

### Access a card by name
```typescript
const data : Output = JSON.parse(fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"}));

console.log(data.cardEntities["Sangan"])
```

### Iterate over all cards

```typescript
 const data : Output = JSON.parse(fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"}));

 data.cards.forEach((cardName: string) => {
   // access each property, see interfaces for available properties
   console.log(data.cardEntities[cardName].konamiCardId)
 })
```

### Get all sets a card belongs to
```typescript
  const data: Output = JSON.parse(fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"}));

  const allSetsForDarkMagician = data.cardEntities["Dark Magician"].featuredInSets;

  Object.keys(allSetsForDarkMagician).forEach((setCode: string) => {
    console.log(data.setEntities[setCode].setName)
    console.log(allSetsForDarkMagician[setCode].rarity)
    console.log("\n")
  })
```

### Get a cards tcg and/or ocg play status
```typescript
const data = fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"})

const output: Output = JSON.parse(data);

const {ocg, tcg} = output.cardEntities["Uni-Zombie"].playStatus

// For those unfamiliar with destructuring
const ocgPlayStatus = output.cardEntities["Uni-Zombie"].playStatus.ocg
const tcgPlayStatus = output.cardEntities["Uni-Zombie"].playStatus.tcg


console.log(ocg)
console.log(tcg)
```

## Master Duel
### Check if a card exists in Master Duel
```typescript
const data = fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"});
const output: Output = JSON.parse(data)

const isInMasterDuel = output.cardEntities["Dark Magician"].masterDuelInfo.isInMasterDuel;

if(isInMasterDuel){
  // Do something
}

```

### Get rarity and/or pack that card is contained in for Master Duel

```typescript
const data = fs.readFileSync("yugioh-cards-sets.json", {encoding: "utf8"});
const output: Output = JSON.parse(data)

const darkMagicianMasterDuelInfo = output.cardEntities["Dark Magician"].masterDuelInfo
const isInMasterDuel = darkMagicianMasterDuelInfo.isInMasterDuel;

if(isInMasterDuel){
  /** 
   * containedInPacks is an array, currently only controls one pack, future work will have this
   * array containing all packs card is contained in.
   */
  const {cardRarity, containedInPacks} = darkMagicianMasterDuelInfo;
  
  // For those not familiar with destructuring
  const cardRarity2 = darkMagicianMasterDuelInfo.cardRarity;
  const containedInPacks2 = darkMagicianMasterDuelInfo.containedInPacks
 
  // Do something
}
```


# Q&A

### Why do sets that are structure decks have ```rarity``` values that when added up do not add up to the total number of cards in that structure deck?
Most decks contain more than one type of the same card, these stats tally the number of UNIQUELY NAMED cards,
so if there are 3 UR Blue-eyes white dragons in a structure deck and those are the only UR cards you will only see
1 against Ultra Rare ``rarity`` value.

### Why is a card missing?
If you see a card or set missing please raise an issue, as of the time of writing this there are a few manual steps to 
kicking off the service that collates this data, so if you are seeing a missing set it is likely I have just not
had time to run it, or I have somehow missed a date for a sets release.

If an individual card is missing this is probably a bug and will be looked into quickly.

### How do I do X with this JSON file ?
If you are having trouble, and you can't find an example then feel free to raise an issue for now and I will answer and add that use case as an example

### Do you have any kind of relationship with Konami?
None at all (aside from being a customer), this is a pet project, all IP is the property of their respective owners, I am only making this available for use for those wanting to create YuGiOh-related
services as I could not find exactly what I needed elsewhere.

### Can you add ..... field to the json?
Perhaps, add it as an issue and I will see what I can do, in order to do this I have to modify the service I have created to generate additional fields so this can take a bit
of time on my end.

### Can you open source the service you use to generate this data?
I could, but I am minded not to at this stage as it was a quick little pet project, in addition there is some potential for abuse

### Any plans to add flags for whether the card or set is available in Duel Links/Master Duel?
Master Duel data is included, included are the rarity and the pack you can find the card; currently only one pack is included, there is some work to do to include all packs in the array the card belongs to.

Duel Links is on the roadmap

### Any plans to add tests to ensure future releases are stable
Yes, this started as a quick piece of work for something larger, it has been released to the community as I feel it is only fair, as a result I have some work to do to assure my work

