package com.app.services;

import java.util.List;

import com.app.DTO.VendorHomeInsuranceDTO;
import com.app.entities.VendorHomeInsurance;

public interface VendorHomeInsuranceService {

	List<VendorHomeInsuranceDTO> getAllHomeInsurance();

	List<VendorHomeInsuranceDTO> getVendorHomeInsurances(Integer vendorId);
	
	public boolean addVendorHomeInsurance(VendorHomeInsuranceDTO homeInsurance);
	
	Boolean deleteHomeInsurance(Integer homeInsuranceId);

}