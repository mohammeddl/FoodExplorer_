import { Star } from "lucide-react";
import { Restaurant } from "../../types/Restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const fallbackImage = "/api/placeholder/400/300";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src = fallbackImage;
  };
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300'>
      <div className='relative'>
        <img
          src={restaurant.imageUrl || fallbackImage}
          alt={restaurant.name}
          onError={handleImageError}
          className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute top-2 right-2 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-gray-700 shadow'>
          {restaurant.cuisineType}
        </div>
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
          {restaurant.name}
        </h3>
        <p className='text-sm text-gray-600 mb-3'>{restaurant.address}</p>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <Star
              className={`w-5 h-5 ${
                restaurant.rating >= 4 ? "text-yellow-400" : "text-gray-400"
              }`}
              fill='currentColor'
            />
            <span className='text-sm font-medium text-gray-700'>
              {restaurant.rating.toFixed(1)}
            </span>
          </div>
          {restaurant.distance && (
            <span className='text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
              {restaurant.distance.toFixed(1)} km
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
