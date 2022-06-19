import { Address } from './address.model';
import { Item } from './item.model';
import { Restaurant } from './restaurant.model';
// address: {
//   address: 'Indira Nagar Rd, Borsojai, Basistha 781029, India',
//   house: 'dsgd',
//   id: 'cLQdnS8YXk5HTDfM3UQC',
//   landmark: 'fdgs',
//   lat: 26.108991978867923,
//   lng: 91.79069981213378,
//   title: 'yui',
//   userId: 'UA5JWxgjDOYgfXe92H0pFHwulTz2',
// },
// deliveryCharge: 20,
// grandTotal: '540.00',
// id: '5aG0RsPuze8NX00B7uRP',
// order: [
//   {
//     categoryId: 'e10',
//     cover: 'assets/imgs/baha.jpg',
//     desc: 'Great in taste',
//     id: 'i32',
//     name: 'Bahamas',
//     price: 270,
//     quantity: 1,
//     rating: 0,
//     status: true,
//     uid: 'r1',
//     variation: false,
//     veg: false,
//   },
//   {
//     categoryId: 'e10',
//     cover: 'assets/imgs/mofo.jpg',
//     desc: 'Great in taste',
//     id: 'i33',
//     name: 'Mofongo',
//     price: 250,
//     quantity: 1,
//     rating: 0,
//     status: true,
//     uid: 'r1',
//     variation: false,
//     veg: true,
//   },
// ],
// paidVia: 'COD',
// restaurant: {
//   address: 'Christan Basti, India',
//   city: '909090567',
//   closeTime: '21:00',
//   cover: '',
//   cuisines: ['Caribbean food', 'North Indian', 'Vietnamese'],
//   deliveryTime: 25,
//   description: 'dd',
//   email: 'DosaPlaza@gmail.com',
//   latitude: 26.1286243,
//   longitude: 91.8012675,
//   uid: 'r1',
//   isClose: true,
//   name: 'DosaPlaza',
//   openTime: '07:00',
//   phone: 6619563867,
//   price: 27,
//   rating: 4.7,
//   shortName: 'stayfit',
//   status: 'open',
//   totalRating: 13,
// },
// restaurantId: 'r1',
// status: 'created',
// time: 'Jul 6, 2020 11:44 AM',
// total: '520.00',
// userId: '1',
export class Order {
  constructor(
    public restaurant: Restaurant,
    public restaurantId: string,
    public address: Address,
    public order: Item[],
    public total: number,
    public grandTotal: number,
    public deliveryCharge: number,
    public status: string,
    public time: string,
    public paidVia: string,
    public id?: string,
    public userId?: string,
    public instruction?: string
    ) {}
  }