
package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Distributor;

import java.util.List;

	@Repository
	public interface DistributorRepository extends JpaRepository<Distributor, Integer>{

		@Query(value = "SELECT * FROM distributor WHERE email = ?1", nativeQuery = true)
		List<Distributor> getDistributorByEmail(String email);
		
		
		//List<SalesStatisticsDTO> findSalesStatisticsByDistributorId(@Param("disid") int distributorId);


	    
		
		
	}

