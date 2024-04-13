package com.app.services;

import java.util.List;

import com.app.DTO.VendorHealthInsuranceDTO;
import com.app.entities.VendorHealthInsurance;

public interface VendorHealthInsuranceService {

	
	List<VendorHealthInsuranceDTO> getAllHealthInsurance();
	
    List<VendorHealthInsuranceDTO> getVendorHealthInsurances(Integer vendorId);
	
	public boolean addVendorHealthInsurance(VendorHealthInsuranceDTO healthInsurance);
	
	Boolean deleteHealthInsurance(Integer HeathInsuranceId);
}
