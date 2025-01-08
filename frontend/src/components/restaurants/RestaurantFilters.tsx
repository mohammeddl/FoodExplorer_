import { Filter, Search } from "lucide-react";
import { useState } from "react";

interface RestaurantFiltersProps {
  onFilter: (filters: any) => void;
}

export const RestaurantFilters = ({ onFilter }: RestaurantFiltersProps) => {
  const cuisineTypes = [
    "All",
    "Italian",
    "Japanese",
    "Mexican",
    "Indian",
    "Chinese",
  ];
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [minRating, setMinRating] = useState("0");

  const handleFilter = () => {
    onFilter({
      cuisineType: selectedCuisine === "All" ? "" : selectedCuisine,
      rating: parseFloat(minRating),
    });
  };

  return (
    <div className='bg-white rounded-xl shadow-sm p-6 mb-8'>
      <div className='flex items-center gap-2 mb-4'>
        <Filter className='w-5 h-5 text-indigo-600' />
        <h2 className='text-lg font-semibold text-gray-900'>Filters</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Cuisine Type
          </label>
          <select
            className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}>
            {cuisineTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Minimum Rating
          </label>
          <select
            className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}>
            {[0, 1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} {rating === 1 ? "Star" : "Stars"}
              </option>
            ))}
          </select>
        </div>

        <div className='flex items-end'>
          <button
            onClick={handleFilter}
            className='w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-2'>
            <Search className='w-5 h-5' />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
