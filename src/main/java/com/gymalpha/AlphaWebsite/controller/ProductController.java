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

import com.gymalpha.AlphaWebsite.model.Product;
import com.gymalpha.AlphaWebsite.repo.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductRepository productRepository;

    ProductController(ProductRepository repository) {
        this.productRepository = repository;
    }

    @CrossOrigin
    @PostMapping(path = "/add", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public void addProduct(@RequestBody Product product) {
        productRepository.save(product);
    }

    @CrossOrigin
    @GetMapping(path = "/list", produces = { MediaType.APPLICATION_JSON_VALUE })
    List<Product> all() {
        return (List<Product>) productRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    Optional<Product> one(@PathVariable Long id) {

        return productRepository.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}/delete")
    void deleteEmployee(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
