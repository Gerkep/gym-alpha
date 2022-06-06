package com.gymalpha.AlphaWebsite.repo;

import org.springframework.data.repository.CrudRepository;

import com.gymalpha.AlphaWebsite.model.Product;


public interface ProductRepository extends CrudRepository<Product, Long> {

}