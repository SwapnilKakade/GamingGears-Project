package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer>{

}
