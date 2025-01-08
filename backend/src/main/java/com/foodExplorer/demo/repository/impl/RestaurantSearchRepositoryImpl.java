package com.foodExplorer.demo.repository.impl;

import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.model.Restaurant;
import com.foodExplorer.demo.repository.RestaurantSearchRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RestaurantSearchRepositoryImpl implements RestaurantSearchRepositoryCustom {
    private final EntityManager entityManager;

    @Override
    public Page<Restaurant> searchRestaurants(RestaurantRequestDTO params, Pageable pageable) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Restaurant> criteriaQuery = criteriaBuilder.createQuery(Restaurant.class);
        Root<Restaurant> root = criteriaQuery.from(Restaurant.class);
        List<Predicate> predicates = createPredicates(root, params, criteriaBuilder);

        criteriaQuery.where(predicates.toArray(new Predicate[0]));
        addSorting(criteriaQuery, root, pageable, criteriaBuilder);

        TypedQuery<Restaurant> query = entityManager.createQuery(criteriaQuery)
                .setFirstResult((int) pageable.getOffset())
                .setMaxResults(pageable.getPageSize());

        Long total = countTotalResults(params, criteriaBuilder);

        return new PageImpl<>(query.getResultList(), pageable, total);
    }

    private List<Predicate> createPredicates(Root<Restaurant> root, RestaurantRequestDTO params, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();

        if (params.name() != null && !params.name().trim().isEmpty()) {
            predicates.add(criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("name")),
                    "%" + params.name().toLowerCase() + "%"
            ));
        }

        if (params.cuisineType() != null && !params.cuisineType().trim().isEmpty()) {
            predicates.add(criteriaBuilder.equal(
                    criteriaBuilder.lower(root.get("cuisineType")),
                    params.cuisineType().toLowerCase()
            ));
        }

        if (params.rating() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(
                    root.get("rating"),
                    params.rating()
            ));
        }

        if (params.distance() != null) {
            Expression<Double> distanceCalc = criteriaBuilder.function(
                    "earth_distance",
                    Double.class,
                    criteriaBuilder.function(
                            "ll_to_earth",
                            Object.class,
                            root.get("latitude"),
                            root.get("longitude")
                    ),
                    criteriaBuilder.function(
                            "ll_to_earth",
                            Object.class,
                            criteriaBuilder.literal(0.0),
                            criteriaBuilder.literal(0.0)
                    )
            );

            predicates.add(criteriaBuilder.lessThanOrEqualTo(
                    distanceCalc,
                    params.distance() * 1000
            ));
        }

        return predicates;
    }

    private void addSorting(CriteriaQuery<Restaurant> query, Root<Restaurant> root,
                            Pageable pageable, CriteriaBuilder criteriaBuilder) {
        if (pageable.getSort().isSorted()) {
            List<Order> orders = new ArrayList<>();
            pageable.getSort().forEach(sort -> {
                if (sort.isAscending()) {
                    orders.add(criteriaBuilder.asc(root.get(sort.getProperty())));
                } else {
                    orders.add(criteriaBuilder.desc(root.get(sort.getProperty())));
                }
            });
            query.orderBy(orders);
        }
    }

    private Long countTotalResults(RestaurantRequestDTO params, CriteriaBuilder criteriaBuilder) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<Restaurant> countRoot = countQuery.from(Restaurant.class);

        countQuery.select(criteriaBuilder.count(countRoot))
                .where(createPredicates(countRoot, params, criteriaBuilder)
                        .toArray(new Predicate[0]));

        return entityManager.createQuery(countQuery).getSingleResult();
    }
}