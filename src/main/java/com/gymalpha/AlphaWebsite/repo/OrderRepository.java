package com.gymalphastore.GymAlphaStore.repo;

import org.springframework.data.repository.CrudRepository;

import com.gymalphastore.GymAlphaStore.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}