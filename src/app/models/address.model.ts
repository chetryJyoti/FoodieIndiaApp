export class Address {
  // address: 'Kanuat palace, India',
  // house: 'Ground Floor',
  // id: '8Kox63KlggTvV7ebRKar',
  // landmark: 'Bazar',
  // lat: 26.1830738,
  // lng: 91.74049769999999,
  // title: 'Work',
  // userId: '1',
  constructor(
    public id: string,
    public address: string,
    public title: string,
    public userId: string,
    public house: string,
    public landmark: string,
    public lat: number,
    public lng: number
  ) {}
}
