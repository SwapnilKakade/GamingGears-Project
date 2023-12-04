package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Product;
import java.util.List;

	@Repository
	public interface ProductRepository extends JpaRepository<Product, Integer>{
	    
		@Query(value="select * from product limit 8",nativeQuery = true)
		List<Product> getAllProduct();
		
		@Query(value = "SELECT * FROM product WHERE catid = ?1", nativeQuery = true)
	    List<Product> getProductsByCategory(int catid);
		
		@Query(value = "SELECT * FROM product WHERE disid = ?1", nativeQuery = true)
		List<Product> getProductsbyDis(int disid);

		@Query(value="select * from product",nativeQuery = true)
		List<Product> getSearchedProduct();
	}

