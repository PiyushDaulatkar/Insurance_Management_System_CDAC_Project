package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VendorCarInsurance;

public interface VendorCarInsuranceDao extends JpaRepository<VendorCarInsurance, Integer>{

	List<VendorCarInsurance> findAll();
}

