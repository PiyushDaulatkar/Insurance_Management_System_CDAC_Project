	package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VendorHealthInsurance;

public interface VendorHealthInsuranceDao extends JpaRepository<VendorHealthInsurance, Integer>{
	
	List<VendorHealthInsurance> findAll();

}
