package com.demo.gaminggears.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

	@Query(value = "SELECT * FROM cart WHERE custid = ?1", nativeQuery = true)
	List<Cart> findAllByCustId(int custiD);
	
	@Query(value = "SELECT * FROM cart WHERE custid = ?1 and proid =?2", nativeQuery = true)
	List<Cart> existsByCustIdProdId(int custid, int proid);
	
	@Query(value = "Update cart SET qty=?1  WHERE cartid=?2 ", nativeQuery = true)
	void updateCart(int qty, int cartid);

}
