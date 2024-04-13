package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VendorHomeInsurance;

public interface VendorHomeInsuranceDao extends JpaRepository<VendorHomeInsurance, Integer>{
	
	List<VendorHomeInsurance> findAll();

}
