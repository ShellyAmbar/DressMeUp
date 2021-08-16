import { makeAutoObservable, observable, computed, makeObservable } from "mobx";

class OutfitsStore {
  shirt = null;
  pants = null;
  shoes = null;
  lastPickedItem = null;
  allOutfits = [];
  curentStatus = 0;
  allItemsOfSets = [];
  startTime = 0;
  endTime = 0;
  totalTime = 0;
  sumOfPantsShoesSizes = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setItem({ type, name, brand, size, color }) {
    if (!this.shirt && !this.pants && !this.shoes) {
      this.startTime = Date.now();
      this.totalTime = 0;
      this.endTime = 0;
      this.sumOfPantsShoesSizes = 0;
    }
    switch (type) {
      case "shirt":
        this.setShirt({ type, name, brand, size, color });

        break;
      case "pants":
        this.setPants({ type, name, brand, size, color });

        break;
      case "shoes":
        this.setShoes({ type, name, brand, size, color });

        break;
      default:
        break;
    }
  }

  setShirt({ type, name, brand, size, color }) {
    if (!this.shirt) {
      this.curentStatus += 1;
    }
    this.shirt = { type, name, brand, size, color };
    this.lastPickedItem = null;
  }
  setPants({ type, name, brand, size, color }) {
    if (!this.pants) {
      this.curentStatus += 1;
    }
    this.pants = { type, name, brand, size, color };
    this.lastPickedItem = null;
  }
  setShoes({ type, name, brand, size, color }) {
    if (!this.shoes) {
      this.curentStatus += 1;
    }
    this.shoes = { type, name, brand, size, color };
    this.lastPickedItem = null;
  }

  addToOutfits() {
    if (this.curentStatus === 3) {
      const shirt = this.shirt;
      const pants = this.pants;
      const shoes = this.shoes;
      this.endTime = Date.now();
      const ms = this.endTime - this.startTime;
      this.totalTime = ((ms % 60000) / 1000).toFixed(0);
      this.sumOfPantsShoesSizes = this.pants.size + this.shoes.size;

      const newOutfit = { shirt, pants, shoes };
      this.allOutfits.push(newOutfit);
      this.allItemsOfSets.push(shirt);
      this.allItemsOfSets.push(pants);
      this.allItemsOfSets.push(shoes);

      this.shirt = null;
      this.pants = null;
      this.shoes = null;
      this.curentStatus = 0;
    }
  }

  getAllOutfits() {
    return this.allOutfits;
  }

  getAllPickedItemsOfSets() {
    return this.allItemsOfSets;
  }
}

const outfitsStore = new OutfitsStore();
export default outfitsStore;
