package com.demo.gaminggears.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Admin;
import com.demo.gaminggears.service.IAdminService;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
	@Autowired
	IAdminService iAdminService;
	
	@PostMapping("/admin/login")
	public Admin getLogin(@RequestBody Admin ln) {
		return iAdminService.getLogin(ln);
	}
}
