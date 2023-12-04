package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.entity.AskexpertBody;
import com.demo.gaminggears.entity.AskexpertresolveBody;

public interface IAskExpertService {

	List<Askexpert> getAllQueries(int expid);

	void addQuery(AskexpertBody q);

	void DeleteQuery(int queId);

	void custDeleteQuery(int queId);

	void resolveQuery(AskexpertresolveBody ar);

}
