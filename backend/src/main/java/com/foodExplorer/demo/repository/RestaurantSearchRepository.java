package com.foodExplorer.demo.repository;

import com.foodExplorer.demo.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantSearchRepository extends JpaRepository<Restaurant, Long>, RestaurantSearchRepositoryCustom {
}