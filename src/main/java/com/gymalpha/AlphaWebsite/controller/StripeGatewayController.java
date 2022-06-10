package com.gymalpha.AlphaWebsite.controller;

import com.gymalpha.AlphaWebsite.client.StripeClient;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/stripe/payment")
public class StripeGatewayController {
    
    private StripeClient stripeClient;
    @Autowired
    StripeGatewayController(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }
    @PostMapping("/charge")
    public Charge chargeCard(@RequestHeader(value="token") String token, @RequestHeader(value="amount") Double amount) throws Exception {
        return this.stripeClient.chargeNewCard(token, amount);
    }
}