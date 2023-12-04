package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Expert;

@Repository
public interface ExpertRepository extends JpaRepository<Expert, Integer>{
	


}
