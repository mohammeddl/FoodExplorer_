
import { Restaurant, RestaurantFormData } from '../types/Restaurant';

const API_URL = 'http://localhost:8080/api/restaurants';

export const restaurantService = {
    searchRestaurants: async (filters: any) => {
        const params = new URLSearchParams();
        if (filters.cuisineType) params.append('cuisineType', filters.cuisineType);
        if (filters.rating) params.append('rating', filters.rating.toString());
        
        const response = await fetch(`${API_URL}/search?${params.toString()}`);
        return response.json();
    },

    createRestaurant: async (data: RestaurantFormData) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
};