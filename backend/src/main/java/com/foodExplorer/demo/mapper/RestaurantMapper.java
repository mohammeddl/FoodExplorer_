package com.foodExplorer.demo.mapper;

import org.mapstruct.Mapper;

import com.foodExplorer.demo.dto.resp.RestaurantResponseDTO;
import com.foodExplorer.demo.model.Restaurant;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    RestaurantResponseDTO toRestaurantResponseDTO(Restaurant restaurant);

    Restaurant toRestaurant(RestaurantResponseDTO restaurantResponseDTO);

}
