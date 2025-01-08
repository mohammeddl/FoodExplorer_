package com.foodExplorer.demo.mapper;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import org.mapstruct.Mapper;

import com.foodExplorer.demo.dto.resp.RestaurantResponseDTO;
import com.foodExplorer.demo.model.Restaurant;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    RestaurantResponseDTO toRestaurantResponseDTO(Restaurant restaurant);

    Restaurant toRestaurant(RestaurantRequestDTO restaurantResponseDTO);

}
