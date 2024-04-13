package com.app.services;

import java.util.List;

import com.app.DTO.VendorCarInsuranceDTO;
import com.app.entities.VendorCarInsurance;
import com.app.entities.VendorHealthInsurance;
import com.app.entities.VendorHomeInsurance;
import com.app.entities.VendorTravelInsurance;

public interface VendorCarInsuranceService {
	
	
	List<VendorCarInsuranceDTO> getAllCarInsurance();
	
	List<VendorCarInsuranceDTO> getVendorCarInsurances(Integer vendorId);
	
	public boolean addVendorCarInsurance(VendorCarInsuranceDTO carInsurance);
	
	Boolean deleteCarInsurance(Integer carInsuranceId);
	
}