package com.foodExplorer.demo.repository;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.model.Restaurant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RestaurantSearchRepositoryCustom {
    Page<Restaurant> searchRestaurants(RestaurantRequestDTO params, Pageable pageable);
}
