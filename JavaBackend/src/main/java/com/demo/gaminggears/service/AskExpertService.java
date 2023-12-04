package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.entity.AskexpertBody;
import com.demo.gaminggears.entity.AskexpertresolveBody;
import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Expert;
import com.demo.gaminggears.repository.AskExpertRepository;
import com.demo.gaminggears.repository.CustomerRepository;
import com.demo.gaminggears.repository.ExpertRepository;

@Service
public class AskExpertService implements IAskExpertService{

	@Autowired
	AskExpertRepository askExpertRepository;
	@Autowired
	CustomerRepository customerRepository;
	@Autowired
	ExpertRepository expertRepository;
	
	@Override
	public List<Askexpert> getAllQueries(int expid) {
		// TODO Auto-generated method stub
		return askExpertRepository.getAllQueries(expid);
	}


	@Override
	public void addQuery(AskexpertBody q) {
		// TODO Auto-generated method stub 
		Customer c = customerRepository.getById(q.getCustid());
		Expert e = expertRepository.getById(q.getExpid());
		Askexpert ae = new Askexpert(c, e, q.getQue());
		
		askExpertRepository.save(ae);
	}


	@Override
	public void DeleteQuery(int queId) {
		// TODO Auto-generated method stub
		Askexpert askexpert = askExpertRepository.findById(queId).orElse(null);
		askexpert.setStatus(1);
		askExpertRepository.save(askexpert);
	}


	@Override
	public void custDeleteQuery(int queId) {
		// TODO Auto-generated method stub
		askExpertRepository.deleteById(queId);
		
	}


	@Override
	public void resolveQuery(AskexpertresolveBody ar) {
		// TODO Auto-generated method stub
		
		Askexpert askexpert = askExpertRepository.findById(ar.getQueId()).orElse(null);
		askexpert.setResolution(ar.getResolution());
		askexpert.setStatus(2);
		Expert e = expertRepository.findById(askexpert.getExpid().getExpid()).orElse(null);
		e.setSells(e.getSells()+1);
		expertRepository.save(e);
		askExpertRepository.save(askexpert);
	}

}
