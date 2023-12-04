package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Brand;
import com.demo.gaminggears.entity.Category;
import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductBody;
import com.demo.gaminggears.repository.BrandRepository;
import com.demo.gaminggears.repository.CategoryRepository;
import com.demo.gaminggears.repository.DistributorRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class ProductService implements IProductService {
	@Autowired
    ProductRepository productRepository;
	@Autowired
	DistributorRepository distributorRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	BrandRepository brandRepository;
	
	@Override
	public List<Product> getAllProducts() {
		//List<Product> plist= productRepository.findAll();
		List<Product> plist= productRepository.getAllProduct();
		//System.out.println(plist);
		return plist;
		
	}	
	@Override
	public List<Product> getSearchProducts() {
		//List<Product> plist= productRepository.findAll();
		List<Product> plist= productRepository.getSearchedProduct();
		//System.out.println(plist);
		return plist;
		
	}

	
	public void deleteById(int pid) {	
		productRepository.deleteById(pid);	
	}

	@Override
	public Product getProductById(int pid) {
		// TODO Auto-generated method stub
		
		return productRepository.findById(pid).orElse(null);
	}

	@Override
	public List<Product> getProductsByCategory(int catid) {
		// TODO Auto-generated method stub
		return productRepository.getProductsByCategory(catid);
	}

	@Override
	public List<Product> getProductsbyDis(int disid) {
		// TODO Auto-generated method stub
		return productRepository.getProductsbyDis(disid);
	}
	
	@Override
	public void addProduct(ProductBody p) {
		// TODO Auto-generated method stub
		Distributor d = distributorRepository.findById(p.getDisid()).orElse(null);
		Category c= categoryRepository.findById(p.getCatid()).orElse(null);
		Brand b = brandRepository.findById(p.getBrandid()).orElse(null);
		Product product = new Product(p.getProname(), c, b, p.getPrice(), p.getUrl1(), p.getUrl2(), p.getUrl3(),p.getUrl4(),p.getDescription(), d);
		productRepository.save(product);
	}
	public void DeleteProduct(int proid) {
		productRepository.deleteById(proid);
		

	}




	
}
