import { Filter } from "lucide-react";
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
};
