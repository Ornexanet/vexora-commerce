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
        name: "Ornexa Shop Stockholm",
        address: "Stockholm Sverige",
        city: "Stockholm",
        country: "Sverige",
        latitude: 59.3292,
        longitude: 18.0686,
    },
        
];
