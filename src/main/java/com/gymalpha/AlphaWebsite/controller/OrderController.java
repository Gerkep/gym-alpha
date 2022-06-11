package com.gymalpha.AlphaWebsite.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gymalpha.AlphaWebsite.model.Order;
import com.gymalpha.AlphaWebsite.repo.OrderRepository;

@RestController
@RequestMapping("/api")
public class OrderController {
    
    @Autowired
    private OrderRepository orderRepository;

    OrderController(OrderRepository repository) {
        this.orderRepository = repository;
    }

    @CrossOrigin
    @PostMapping(path = "/finalizeOrder", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public Long addOrder(@RequestBody Order order) {
        Order newOrder = orderRepository.save(order);

        return newOrder.getId();
    }

    @CrossOrigin
    @GetMapping(path = "/orders", produces = { MediaType.APPLICATION_JSON_VALUE })
    List<Order> all() {
        return (List<Order>) orderRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/orders/{id}")
    Optional<Order> one(@PathVariable Long id) {

        return orderRepository.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/orders/{id}/delete")
    void deleteEmployee(@PathVariable Long id) {
        orderRepository.deleteById(id);
    }
}
