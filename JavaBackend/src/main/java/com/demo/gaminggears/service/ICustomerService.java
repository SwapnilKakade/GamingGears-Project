package com.demo.gaminggears.service;

import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Login;

public interface ICustomerService {

	void registerCustomer(Customer cust);

	Customer verfiyCustomer(Login custlogin);

	void forgetPassword(Login custlogin);

}
