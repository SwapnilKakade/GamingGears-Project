package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Expert;

public interface IExpertSevice {

	List<Expert> getAllExperts();

	void addExpert(Expert e);

	Expert getExpertById(int expid);

	void deleteExpert(int expid);

	void updateExpertStatus(int expid);

}
