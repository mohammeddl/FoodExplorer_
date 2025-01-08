// components/restaurants/AddRestaurantForm.tsx
import { useState, FormEvent } from 'react';
import { PlusSquare } from 'lucide-react';
import { RestaurantFormData } from '../../types/Restaurant';

interface AddRestaurantFormProps {
    onAdd: (data: RestaurantFormData) => void;
}

export const AddRestaurantForm = ({ onAdd }: AddRestaurantFormProps) => {
    // ... your form component code
};