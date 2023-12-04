package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService{

	@Autowired
	CustomerRepository customerRepository;

	public void registerCustomer(Customer cust) {
		// TODO Auto-generated method stub
		customerRepository.save(cust);
	}

	public Customer verfiyCustomer(Login custlogin) {
		// TODO Auto-generated method stub
List<Customer> custlist =customerRepository.findAll();
		
		for(Customer d : custlist) {
			if(d.getEmail().equalsIgnoreCase(custlogin.getEmail())&& d.getPass().equalsIgnoreCase(custlogin.getPass())) {
				return d;
			}
		}
		return null;
	}


	@Override
	public void forgetPassword(Login custlogin) {
		
		List<Customer> clist = customerRepository.getCustomerByEmail(custlogin.getEmail()) ;
		if(!clist.isEmpty()) {
			clist.get(0).setPass(custlogin.getPass());
			customerRepository.save(clist.get(0));	
		}
	}
}
