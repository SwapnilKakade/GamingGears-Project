package com.demo.gaminggears.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.gaminggears.entity.Askexpert;

public interface AskExpertRepository extends JpaRepository<Askexpert, Integer>{

	@Query(value = "SELECT * FROM askexpert WHERE expid = ?1", nativeQuery = true)
	List<Askexpert> getAllQueries(int expid);

}
