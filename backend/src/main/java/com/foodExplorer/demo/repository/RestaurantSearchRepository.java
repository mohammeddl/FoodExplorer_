package com.foodExplorer.demo.repository;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.model.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantSearchRepository extends JpaRepository<Restaurant, Long>, RestaurantSearchRepositoryCustom {
}