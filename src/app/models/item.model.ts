export class Item {
  //     categoryId: 'e0',
  //     cover: 'assets/itemsImgs/item1.jpg',
  //     desc: 'Great in taste',
  //     id: 'i1',
  //     name: 'Pizza',
  //     price: 120,
  //     rating: 0,
  //     status: true,
  //     uid: 'r2',
  //     variation: false,
  //     veg: false,
  constructor(
    public categoryId: string,
    public cover: string,
    public desc: string,
    public id: string,
    public name: string,
    public price: number,
    public rating: number,
    public status: boolean,
    public uid: string,
    public variation: boolean,
    public veg: boolean,
    public quantity?: number
  ) {}
}
