package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductBody;


public interface IProductService {

	List<Product> getAllProducts();

	void addProduct(ProductBody p);

	void deleteById(int pid);

	Product getProductById(int pid);

	List<Product> getProductsByCategory(int catid);

	List<Product> getProductsbyDis(int disid);

	List<Product> getSearchProducts();

//	ResponseEntity<ProductNew> addProductByDist(ProductNew product);

	void DeleteProduct(int proid);

}
