import { useState, FormEvent } from "react";
import { PlusSquare, Camera } from "lucide-react";
import { RestaurantFormData } from "../../types/Restaurant";

interface AddRestaurantFormProps {
  onAdd: (data: RestaurantFormData) => void;
}
const CUISINE_IMAGES = {
  Italian: "/api/placeholder/400/300?text=Italian+Food",
  Japanese: "/api/placeholder/400/300?text=Japanese+Food",
  Mexican: "/api/placeholder/400/300?text=Mexican+Food",
  Indian: "/api/placeholder/400/300?text=Indian+Food",
  Chinese: "/api/placeholder/400/300?text=Chinese+Food",
} as const;

export const AddRestaurantForm = ({ onAdd }: AddRestaurantFormProps) => {
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: "",
    cuisineType: "",
    address: "",
    rating: 0,
    imageUrl: "/api/placeholder/400/300?text=Select+Cuisine",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RestaurantFormData, string>>
  >({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof RestaurantFormData, string>> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.cuisineType)
      newErrors.cuisineType = "Cuisine type is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0 and 5";
    if (!formData.imageUrl) newErrors.imageUrl = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onAdd(formData);
      setFormData({
        name: "",
        cuisineType: "",
        address: "",
        rating: 0,
        imageUrl: "/api/placeholder/400/300?text=Select+Cuisine",
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-sm p-6 mb-8'>
      <div className='flex items-center gap-2 mb-6'>
        <Camera className='w-6 h-6 text-indigo-600' />
        <h2 className='text-xl font-semibold text-gray-900'>
          Add New Restaurant
        </h2>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Restaurant Name
            </label>
            <input
              type='text'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              placeholder='Enter restaurant name'
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Cuisine Type
            </label>
            <select
              value={formData.cuisineType}
              onChange={(e) =>
                setFormData({ ...formData, cuisineType: e.target.value })
              }
              className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'>
              <option value=''>Select cuisine type</option>
              <option value='Italian'>Italian</option>
              <option value='Japanese'>Japanese</option>
              <option value='Mexican'>Mexican</option>
              <option value='Indian'>Indian</option>
              <option value='Chinese'>Chinese</option>
            </select>
            {errors.cuisineType && (
              <p className='mt-1 text-sm text-red-500'>{errors.cuisineType}</p>
            )}
          </div>

          <div className='md:col-span-2'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Address
            </label>
            <input
              type='text'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              placeholder='Enter restaurant address'
            />
            {errors.address && (
              <p className='mt-1 text-sm text-red-500'>{errors.address}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Rating
            </label>
            <input
              type='number'
              step='0.1'
              min='0'
              max='5'
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: parseFloat(e.target.value) })
              }
              className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
            {errors.rating && (
              <p className='mt-1 text-sm text-red-500'>{errors.rating}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Image URL
            </label>
            <input
              type='url'
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              className='w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              placeholder='Enter image URL'
            />
            {errors.imageUrl && (
              <p className='mt-1 text-sm text-red-500'>{errors.imageUrl}</p>
            )}
          </div>
        </div>

        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-indigo-600 text-white rounded-lg px-6 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2'>
            <PlusSquare className='w-5 h-5' />
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};
