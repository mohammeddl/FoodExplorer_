export interface Restaurant {
    id: number;
    name: string;
    cuisineType: string;
    address: string;
    rating: number;
    imageUrl: string;
    distance?: number;
}

export interface RestaurantFormData {
    name: string;
    cuisineType: string;
    address: string;
    rating: number;
    imageUrl: string;
}