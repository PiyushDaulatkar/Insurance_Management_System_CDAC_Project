package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.vendor.Vendor;

@Repository
public interface VendorDao extends JpaRepository<Vendor, Integer>{

	Vendor findByEmailAndPassword(String email, String password);
	
	Vendor findByEmail(String email);
}
