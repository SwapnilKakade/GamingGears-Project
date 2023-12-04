package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Cart;
import com.demo.gaminggears.entity.CartBody;

public interface ICartService {

	void addtoCart(CartBody cartBody);

	List<Cart> getCart(int custID);

	void deleteFromCart(int cartid);

	

}
