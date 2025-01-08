package com.foodExplorer.demo.repository;

import com.foodExplorer.demo.dto.req.FilterRestaurantDTO;
import com.foodExplorer.demo.model.Restaurant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RestaurantSearchRepositoryCustom {
    Page<Restaurant> searchRestaurants(FilterRestaurantDTO params, Pageable pageable);
}
