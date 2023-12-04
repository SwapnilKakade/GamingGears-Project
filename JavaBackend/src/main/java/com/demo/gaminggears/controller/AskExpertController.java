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

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.entity.AskexpertBody;
import com.demo.gaminggears.entity.AskexpertresolveBody;
import com.demo.gaminggears.service.IAskExpertService;
import com.demo.gaminggears.service.IProductService;

@CrossOrigin(origins = "*")
@RestController
public class AskExpertController {

	@Autowired
	IAskExpertService iAskExpertService;
	
	@Autowired (required = true)
	IProductService productService;
	
	@GetMapping("/get-expert-req/{expid}")
	public List<Askexpert>   displayAllProducts(@PathVariable int expid) {
		List<Askexpert> plist=iAskExpertService.getAllQueries(expid);
		return plist;
		
	}
	
	@PostMapping("/make-req-exp")
	public ResponseEntity<String> insertQuery( @RequestBody AskexpertBody q) {
		  iAskExpertService.addQuery(q);
		  return ResponseEntity.ok("added successfully");
	}
	
	@DeleteMapping("/expert/request/rmv/{queId}")
	public ResponseEntity<String> DeleteQuery(@PathVariable int queId){
		iAskExpertService.DeleteQuery(queId);
		  return ResponseEntity.ok("deleted successfully");
	}
	
	@DeleteMapping("/customer/request/rmv/{queId}")
	public ResponseEntity<String> custDeleteQuery(@PathVariable int queId){
		iAskExpertService.custDeleteQuery(queId);
		  return ResponseEntity.ok("deleted successfully");
	}
	
	@PostMapping("/expert/request/resolve")
	public ResponseEntity<String> resolveQuery(@RequestBody AskexpertresolveBody ar){
		iAskExpertService.resolveQuery(ar);
		  return ResponseEntity.ok("query updated successfully");	
	}
	
	
}
