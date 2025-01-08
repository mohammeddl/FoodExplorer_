package com.foodExplorer.demo.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.dto.resp.RestaurantResponseDTO;

public interface RestaurantService {

    RestaurantResponseDTO createRestaurant(RestaurantRequestDTO requestDTO);
    Page<RestaurantResponseDTO> searchRestaurants(RestaurantRequestDTO params, Pageable pageable);
    RestaurantResponseDTO getRestaurantById(Long id);
    void deleteRestaurant(Long id);

}