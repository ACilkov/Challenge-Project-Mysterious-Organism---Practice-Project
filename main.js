// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function for multiple objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherParm) {
      const similarities = this.dna.reduce((prevVal, currVal, currIndex, array) => {
        if(array[index] === otherParm.dna[index]) {
          return prevVal +1;
        } else {
          return prevVal
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.lenght) * 100;
      const percentToDecimal = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimenNum} and ${otherParm.specimenNum} have ${percentToDecimal}% DNA in common.`)
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const specimenSurvived = [];
let idCounter = 1;

while (specimenSurvived.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    specimenSurvived.push(newOrg);
  }
  idCounter++;
}

console.log(specimenSurvived)