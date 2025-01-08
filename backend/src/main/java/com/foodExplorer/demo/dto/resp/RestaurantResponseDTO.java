package com.foodExplorer.demo.dto.resp;

public record RestaurantResponseDTO(String name, String cuisineType, String address, Double rating, String imageUrl,
        Double distance) {
}
