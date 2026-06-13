export interface StoreLocation {
    id: string;
    name: string;
    address: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
}

export const storeLocations: StoreLocation[] = [
    {
        id: "ny-5th-ave",
        name: "Vexora 5th Avenue",
        address: "689 5th Ave",
        city: "New York, NY 10022",
        country: "USA",
        latitude: 40.7614,
        longitude: -73.9776,
    },
    {
        id: "berlin-kurfurstendamm",
        name: "Vexora Kurfürstendamm",
        address: "Kurfürstendamm 202",
        city: "10719 Berlin",
        country: "Germany",
        latitude: 52.5025,
        longitude: 13.3272,
    },
    {
        id: "tokyo-shibuya",
        name: "Vexora Shibuya Smart Tech Center",
        address: "1-10-41 Jinnan, Shibuya City",
        city: "Tokyo 150-0041",
        country: "Japan",
        latitude: 35.6628,
        longitude: 139.6982,
    },
    {
        id: "sydney-george",
        name: "Vexora George Street",
        address: "412 George St",
        city: "Sydney NSW 2000",
        country: "Australia",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        id: "seoul-gangnam",
        name: "Vexora George Street",
        address: "Ulsan-si, Hwanggeum-ro",
        city: "Gangnam-gu, Seoul",
        country: "South Korea",
        latitude: 37.4979,
        longitude: 127.0276,
    },
];
