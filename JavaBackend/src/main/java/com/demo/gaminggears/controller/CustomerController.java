package com.demo.gaminggears.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.service.ICustomerService;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {
	
	@Autowired
	ICustomerService customerService;
	
	@PostMapping("/addcustomer")
	public ResponseEntity<String> registerCustomer(@RequestBody Customer cust){
		customerService.registerCustomer(cust);
		return ResponseEntity.ok("added successfully");
	}
	
	@PostMapping("/custlogin")
	public Customer dislogin(@RequestBody Login custlogin) {
		
		return customerService.verfiyCustomer(custlogin);
		
	}
	
	@PostMapping("/forgot-password")
	public ResponseEntity<String> forgetPassword(@RequestBody Login custlogin) {
		customerService.forgetPassword(custlogin);
		return ResponseEntity.ok("ok");
	}
}
