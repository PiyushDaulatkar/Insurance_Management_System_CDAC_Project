package com.app.services;

import java.util.List;

import com.app.DTO.VendorTravelInsuranceDTO;
import com.app.entities.VendorTravelInsurance;

public interface VendorTravelInsuranceService {

	List<VendorTravelInsuranceDTO> getAllTravelInsurance();

	List<VendorTravelInsuranceDTO> getVendorTravelInsurances(Integer vendorId);
	
	public boolean addVendorTravelInsurance(VendorTravelInsuranceDTO travelInsurance);
	
	Boolean deleteTravelInsurance(Integer travelId);

}