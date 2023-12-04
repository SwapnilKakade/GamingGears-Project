package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.repository.DistributorRepository;
import com.demo.gaminggears.repository.OrderRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class DistributorService implements IDistributorService{
	@Autowired
	DistributorRepository distributorRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	OrderRepository orderRepository;
	
	@Override
	public List<Distributor> getAllDistributors() {
		List<Distributor> dislist =distributorRepository.findAll();
		
		return dislist;
	}
	public Distributor verfiyDistributor(Login currLogin) {
		List<Distributor> dislist =distributorRepository.findAll();
		
		for(Distributor d : dislist) {
			if(d.getEmail().equalsIgnoreCase(currLogin.getEmail())&& d.getPass().equalsIgnoreCase(currLogin.getPass())) {
				return d;
			}
		}
		return null;
	}
	public void registerDistributor(Distributor dis) {
		// TODO Auto-generated method stub
		distributorRepository.save(dis);
	}
	public void forgetPassDistributor(Login dislogin) {
		// TODO Auto-generated method stub
		List<Distributor> dislist = distributorRepository.getDistributorByEmail(dislogin.getEmail()) ;
		if(!dislist.isEmpty()) {
			dislist.get(0).setPass(dislogin.getPass());
			distributorRepository.save(dislist.get(0));	
		};
	}
	@Override
	public Distributor getDistributorbyID(int disid) {
		// TODO Auto-generated method stub
		return distributorRepository.findById(disid).orElse(null);
	}
	@Override
	public void deleteDistributor(int disid) {
		// TODO Auto-generated method stub
		distributorRepository.deleteById(disid);
	}
	@Override
	public void updateDistributorStatus(int disid) {
		// TODO Auto-generated method stub
		Distributor d= distributorRepository.findById(disid).orElse(null);
		d.setStatus(1);
		distributorRepository.save(d);
	}
	
	

}
