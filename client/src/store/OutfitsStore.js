import { action, makeAutoObservable, observable } from "mobx";

class OutfitsStore {
  shirt = null;
  pants = null;
  shoes = null;
  lastPickedItem = null;
  allOutfits = [];
  curentStatus = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setItem({ item, size, color }) {
    switch (item.type) {
      case "shirt":
        this.setShirt({ item, size, color });

        break;
      case "pants":
        this.setPants({ item, size, color });

        break;
      case "shoes":
        this.setShoes({ item, size, color });

        break;
      default:
        break;
    }
  }

  setShirt({ item, size, color }) {
    if (!this.shirt) {
      this.curentStatus += 1;
    }
    this.shirt = { item, size, color };
    this.lastPickedItem = null;
  }
  setPants({ item, size, color }) {
    if (!this.pants) {
      this.curentStatus += 1;
    }
    this.pants = { item, size, color };
    this.lastPickedItem = null;
  }
  setShoes({ item, size, color }) {
    if (!this.shoes) {
      this.curentStatus += 1;
    }
    this.shoes = { item, size, color };
    this.lastPickedItem = null;
  }

  addToOutfits() {
    if (this.curentStatus === 3) {
      const shirt = this.shirt;
      const pants = this.pants;
      const shoes = this.shoes;

      const newOutfit = { shirt, pants, shoes };
      this.allOutfits.push(newOutfit);
      this.shirt = null;
      this.pants = null;
      this.shoes = null;
      this.curentStatus = 0;
    }
  }
}

const outfitsStore = new OutfitsStore();
export default outfitsStore;
