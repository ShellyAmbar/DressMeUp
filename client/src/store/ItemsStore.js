import { action, makeAutoObservable, observable } from "mobx";

class ItemsStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  filterItemsByType(typeFilter) {
    const list = this.items.filter((item) => item.type === typeFilter);
    return list;
  }
  filterItemsByKey(items, key) {
    const list = items.filter(
      (item) =>
        item.name.includes(key) ||
        item.brand.includes(key) ||
        item.sizes.includes(Number(key)) ||
        item.colors.includes(key)
    );
    return list;
  }
  setItems(items) {
    this.items = items;
  }
}

const itemsStore = new ItemsStore();

fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    if (data.results) {
      itemsStore.setItems(data.results);
    }
  })
  .catch((err) => console.log(err));

export default itemsStore;
