package com.foodExplorer.demo.controller;

import com.foodExplorer.demo.dto.req.FilterRestaurantDTO;
import com.foodExplorer.demo.dto.req.RestaurantRequestDTO;
import com.foodExplorer.demo.dto.resp.RestaurantResponseDTO;
import com.foodExplorer.demo.service.RestaurantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/restaurants")
@RequiredArgsConstructor
@Tag(name = "Restaurant API", description = "Restaurant management APIs")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @Operation(
            summary = "Create a new restaurant",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Bad Request",
                            responseCode = "400"
                    )
            }
    )
    @PostMapping
    public ResponseEntity<RestaurantResponseDTO> createRestaurant(@Valid @RequestBody RestaurantRequestDTO requestDTO) {
        return ResponseEntity.ok(restaurantService.createRestaurant(requestDTO));
    }

    @Operation(
            summary = "Search restaurants",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    )
            }
    )
    @GetMapping("/search")
    public ResponseEntity<Page<RestaurantResponseDTO>> searchRestaurants(
            @Valid FilterRestaurantDTO params,
            @Parameter(description = "Pageable parameters") Pageable pageable) {
        return ResponseEntity.ok(restaurantService.searchRestaurants(params, pageable));
    }

    @Operation(
            summary = "Get restaurant by ID",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found",
                            responseCode = "404"
                    )
            }
    )
    @GetMapping("/{id}")
    public ResponseEntity<RestaurantResponseDTO> getRestaurantById(
            @Parameter(description = "Restaurant ID") @PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getRestaurantById(id));
    }

    @Operation(
            summary = "Delete restaurant",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "204"
                    ),
                    @ApiResponse(
                            description = "Not Found",
                            responseCode = "404"
                    )
            }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(
            @Parameter(description = "Restaurant ID") @PathVariable Long id) {
        restaurantService.deleteRestaurant(id);
        return ResponseEntity.noContent().build();
    }
}