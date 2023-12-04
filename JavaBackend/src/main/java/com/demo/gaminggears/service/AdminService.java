package com.demo.gaminggears.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Admin;
import com.demo.gaminggears.repository.AdminRepository;

@Service
public class AdminService implements IAdminService{

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public Admin getLogin(Admin ln) {
		Admin a= adminRepository.findById(ln.getUsername()).orElse(null);
		if(a.getUsername().equalsIgnoreCase(ln.getUsername())&&a.getPassword().equalsIgnoreCase(ln.getPassword())) {
			return a;
		}
		return null;
	}

}
