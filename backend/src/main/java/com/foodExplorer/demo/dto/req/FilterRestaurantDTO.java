package com.foodExplorer.demo.dto.req;

public record FilterRestaurantDTO(
        String name,
        String cuisineType,
        Double rating,
        Double distance
) {}