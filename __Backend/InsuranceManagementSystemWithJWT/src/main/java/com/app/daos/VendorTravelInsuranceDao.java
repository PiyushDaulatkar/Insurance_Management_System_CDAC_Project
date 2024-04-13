package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VendorTravelInsurance;

public interface VendorTravelInsuranceDao extends JpaRepository<VendorTravelInsurance, Integer>{
	
	List<VendorTravelInsurance> findAll();

}
