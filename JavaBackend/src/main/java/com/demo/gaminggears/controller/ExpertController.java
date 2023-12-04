
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
import com.demo.gaminggears.entity.Expert;
import com.demo.gaminggears.service.IExpertSevice;

@CrossOrigin(origins ="*")
@RestController
public class ExpertController {
	@Autowired
	IExpertSevice iexpertService;
	
	@GetMapping("/experts")
	public List<Expert> displayAllExpert(){
		return iexpertService.getAllExperts();
			}
	
	@PostMapping("/become/expert")
	public ResponseEntity<String> insertExpert( @RequestBody Expert e) {
		  iexpertService.addExpert(e);
		  return ResponseEntity.ok("added successfully");
	}
	
	@GetMapping("/experts/{expid}")
	public Expert getExpert (@PathVariable int expid) {
		return iexpertService.getExpertById(expid);
		
		
	}
	
	@DeleteMapping("/remove/expert/{expid}")
	public ResponseEntity<String> deleteExpert(@PathVariable int expid){
		iexpertService.deleteExpert(expid);
		return ResponseEntity.ok("deleted successfully");
	}
	
	@PutMapping("/make/expert/{expid}")
	public ResponseEntity<String> updateExpertStatus(@PathVariable int expid){
		iexpertService.updateExpertStatus(expid);
		return ResponseEntity.ok("updated status successfully");
	}

}
