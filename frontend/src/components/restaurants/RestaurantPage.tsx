import { useState } from 'react';
import { PlusSquare } from 'lucide-react';
import { Restaurant, RestaurantFormData } from '../../types/Restaurant';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantFilters } from './RestaurantFilters';
import { AddRestaurantForm } from './AddRestaurantForm';

export const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAddRestaurant = async (data: RestaurantFormData) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3030/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        const newRestaurant = await response.json();
        setRestaurants([...restaurants, newRestaurant]);
        setShowAddForm(false);
        setError(null);
      } else {
        setError('Failed to add restaurant');
      }
    } catch (error) {
      setError('Error adding restaurant');
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (filters: any) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.cuisineType) params.append('cuisineType', filters.cuisineType);
      if (filters.rating) params.append('rating', filters.rating.toString());
      
      const response = await fetch(`http://localhost:3030/api/restaurants/search?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data.content);
        setError(null);
      }
    } catch (error) {
      setError('Error fetching restaurants');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Restaurants</h1>
          <p className="text-sm text-gray-500 mt-1">
            Discover and explore amazing restaurants
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
        >
          <PlusSquare className="w-5 h-5" />
          {showAddForm ? 'Hide Form' : 'Add Restaurant'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-400">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add Restaurant Form */}
      {showAddForm && (
        <AddRestaurantForm onAdd={handleAddRestaurant} />
      )}

      {/* Filters */}
      <RestaurantFilters onFilter={handleFilter} />

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {/* Restaurant Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && restaurants.length === 0 && (
        <div className="text-center py-12">
          <span className="text-4xl">🍽️</span>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No restaurants found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your filters or add a new restaurant.
          </p>
        </div>
      )}
    </div>
  );
};