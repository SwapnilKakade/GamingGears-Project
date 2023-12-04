package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Expert;
import com.demo.gaminggears.repository.ExpertRepository;

@Service
public class ExpertService implements IExpertSevice{
    @Autowired
	ExpertRepository expertRepository;

	@Override
	public List<Expert> getAllExperts() {
		// TODO Auto-generated method stub
		
		return expertRepository.findAll();
	}

	@Override
	public void addExpert(Expert e) {
		// TODO Auto-generated method stub
		expertRepository.save(e);
	}

	@Override
	public Expert getExpertById(int expid) {
		// TODO Auto-generated method stub
		return expertRepository.findById(expid).orElse(null);
		
	}

	@Override
	public void deleteExpert(int expid) {
		// TODO Auto-generated method stub
		expertRepository.deleteById(expid);
	}

	@Override
	public void updateExpertStatus(int expid) {
		// TODO Auto-generated method stub
		Expert e = expertRepository.findById(expid).orElse(null);
		e.setStatus(1);
		expertRepository.save(e);
	}
    
}
