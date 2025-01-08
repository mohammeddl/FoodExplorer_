package com.foodExplorer.demo.service.implt;

import com.foodExplorer.demo.repository.RestaurantSearchRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.dto.resp.RestaurantResponseDTO;
import com.foodExplorer.demo.mapper.RestaurantMapper;
import com.foodExplorer.demo.model.Restaurant;
import com.foodExplorer.demo.service.RestaurantService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@Transactional
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantSearchRepository restaurantRepository;
    private final RestaurantMapper restaurantMapper;

    @Override
    public RestaurantResponseDTO createRestaurant(RestaurantRequestDTO requestDTO) {
        Restaurant restaurant = restaurantMapper.toRestaurant(requestDTO);
        Restaurant savedRestaurant = restaurantRepository.save(restaurant);
        return restaurantMapper.toRestaurantResponseDTO(savedRestaurant);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<RestaurantResponseDTO> searchRestaurants(RestaurantRequestDTO params, Pageable pageable) {
        return restaurantRepository.searchRestaurants(params, pageable)
                .map(restaurantMapper::toRestaurantResponseDTO);
    }

    @Override
    @Transactional(readOnly = true)
    public RestaurantResponseDTO getRestaurantById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Restaurant not found with id: " + id));
        return restaurantMapper.toRestaurantResponseDTO(restaurant);
    }

    @Override
    public void deleteRestaurant(Long id) {
        if (!restaurantRepository.existsById(id)) {
            throw new EntityNotFoundException("Restaurant not found with id: " + id);
        }
        restaurantRepository.deleteById(id);
    }
}
}