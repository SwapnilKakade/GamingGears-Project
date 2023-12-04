package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Orders;
import com.demo.gaminggears.entity.OrdersBody;
public interface IOrderService {

	List<Orders> getAllOrderbyCustID(int custid);

	void addtoOrder(OrdersBody ob);

	void addtoOrderfromCart(OrdersBody ob);
	
	public List<Orders> getOrdersByDisid(int disid);

//	Orderproducts save(Orderproducts order);

}
