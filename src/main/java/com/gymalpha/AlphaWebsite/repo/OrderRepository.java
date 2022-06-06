package com.gymalpha.AlphaWebsite.repo;

import org.springframework.data.repository.CrudRepository;

import com.gymalpha.AlphaWebsite.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}