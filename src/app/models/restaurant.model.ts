export class Restaurant {
  // uid: 'r1',
  // name: 'Yaaro Ka Adda',
  // shortName: 'yaarokaAdda',
  // cover: 'assets/bannerImgs/b5.jpg',
  // cuisines: ['Italian', 'Mexican'],
  // rating: 5,
  // deliveryTime: 23,
  // price: 100,
  // distance: 5,
  constructor(
    public uid: string,
    public name: string,
    public shortName: string,
    public cover: string,
    public cuisines: string[],
    public rating: number,
    public deliveryTime: number,
    public price: number,
    public address?: string,
    public distance?: number //optional parameter
  ) {}
}
