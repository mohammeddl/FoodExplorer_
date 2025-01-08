package com.foodExplorer.demo.dto.req;

import jakarta.validation.constraints.*;

public record RestaurantRequestDTO(
        @NotBlank(message = "Name is mandatory") String name,
        @NotBlank(message = "Cuisine type is mandatory") String cuisineType,
        @NotBlank(message = "Address is mandatory") String address,
        @Min(value = 0, message = "Rating must be at least 0") @Max(value = 5, message = "Rating must be at most 5") Double rating,
        @NotBlank(message = "Image URL is mandatory") String imageUrl,
        @Min(value = 0, message = "Distance must be at least 0") Double distance) {
}
