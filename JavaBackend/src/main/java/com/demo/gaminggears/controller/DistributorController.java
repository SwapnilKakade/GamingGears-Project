package com.demo.gaminggears.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.service.IDistributorService;
import com.demo.gaminggears.service.IProductService;




@CrossOrigin(origins = "*")
@RestController
public class DistributorController {
	
	@Autowired (required = true)
	IDistributorService distributorService;
	
	@Autowired
	IProductService productService;
	
	@GetMapping("/distributors")
	public List<Distributor> getAllDistributors() {
		List<Distributor> dislist=distributorService.getAllDistributors();
		return dislist;
		
	}
	@GetMapping("/distributor-home/{disid}")
	public Distributor getDistributorbyID(@PathVariable int disid) {
		Distributor dislist=distributorService.getDistributorbyID(disid);
		return dislist;
		
	}
	@PostMapping("/dislogin")
	public Distributor dislogin(@RequestBody Login dislogin) {
		
		return distributorService.verfiyDistributor(dislogin);
		
	}
	@PostMapping("/disforgetpass")
	public ResponseEntity<String> forgetPassDistributor(@RequestBody Login dislogin) {
		
		 distributorService.forgetPassDistributor(dislogin);
		 return ResponseEntity.ok("Password changed successfully");
	}
	@PostMapping("/register-distributor")
	public ResponseEntity<String> registerDistributor(@RequestBody Distributor dis) {
		
		distributorService.registerDistributor(dis);
		return ResponseEntity.ok("added successfully");
		
	}
	
//	@GetMapping("/distributor/sales/{disid}")
//	public List<SalesStatisticsDTO> getDisSalesStats(@PathVariable int disid){
//		return distributorService.getDisSalesStats(disid);
//	}
	

	@DeleteMapping("/delete/product/{proid}")
	public ResponseEntity<String> DeleteQuery(@PathVariable int proid){
		productService.DeleteProduct(proid);
		  return ResponseEntity.ok("deleted successfully");
	}
	
	@DeleteMapping("/remove/distributor/{disid}")
	public ResponseEntity<String> deleteDistributor(@PathVariable int disid){
		distributorService.deleteDistributor(disid);
		return ResponseEntity.ok("deleted successfully");
	}
	
	@PutMapping("/make/distributor/{disid}")
	public ResponseEntity<String> updateDistributorStatus(@PathVariable int disid){
		distributorService.updateDistributorStatus(disid);
		return ResponseEntity.ok("updated status successfully");
	}
//	
}