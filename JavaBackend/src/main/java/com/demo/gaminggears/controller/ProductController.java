package com.demo.gaminggears.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductBody;
import com.demo.gaminggears.service.IDistributorService;
import com.demo.gaminggears.service.IProductService;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired (required = true)
	IProductService productService;
	
	@Autowired
	IDistributorService distributorService;
	
	@GetMapping("/products/home")
	public List<Product>   displayAllProducts() {
		List<Product> plist=productService.getAllProducts();
		return plist;
		
	}
	
	@GetMapping("/products")
	public List<Product>   searchProducts() {
		List<Product> plist=productService.getSearchProducts();
		return plist;
		
	}
	
	

	@PostMapping("/add/product")
	public ResponseEntity<String> insertProduct(@RequestBody ProductBody p) {

		  productService.addProduct(p);
		  return ResponseEntity.ok("added successfully");
	}
	
	
	@DeleteMapping("/products/{pid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int pid) {
		productService.deleteById(pid);
		return ResponseEntity.ok("deleted successfully");
		
	}
	
	@GetMapping("/products/{pid}")
	public Product getProduct(@PathVariable int pid) {
		return productService.getProductById(pid);
		
	}
	
	@GetMapping("/distributor/products/{disid}")
	public List<Product> getProductsbyDis (@PathVariable int disid){
		return productService.getProductsbyDis(disid);
	}
	
	
	@GetMapping("category-products/{catid}")
	public List<Product> getProductsByCategory(@PathVariable int catid){
		return productService.getProductsByCategory(catid);
		
	}
	 

	

}