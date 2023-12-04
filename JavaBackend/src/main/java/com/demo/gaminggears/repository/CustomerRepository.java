package com.demo.gaminggears.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.demo.gaminggears.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {


    
    @Query(value = "SELECT * FROM Customer WHERE email = ?1", nativeQuery = true)
	List<Customer> getCustomerByEmail(String email);
}
