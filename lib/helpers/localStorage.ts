// export class LocalStorage {
//   private storage: any;

//   constructor() {
//     this.storage = window?.localStorage;
//   }

//   getItem(key: string) {
//     return JSON.parse(this.storage.getItem(key) || []);
//   }

//   setItem(key: string, value: any) {
//     this.storage.setItem(key, JSON.stringify(value));
//   }

//   removeItem(key: string) {
//     this.storage.removeItem(key);
//   }

//   clear() {
//     this.storage.clear();
//   }

//   key(index: number) {
//     return this.storage.key(index);
//   }

//   length() {
//     return this.storage.length;
//   }

//   getAllItems() {
//     const items = [];

//     for (let i = 0; i < this.length(); i++) {
//       const key = this.key(i);

//       items[key] = this.getItem(key);
//     }

//     return items;
//   }
// }
