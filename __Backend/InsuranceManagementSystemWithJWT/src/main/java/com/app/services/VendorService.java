package com.app.services;

import java.util.List;

import com.app.DTO.VendorLoginDTO;
import com.app.DTO.VendorLoginResponseDTO;
import com.app.DTO.VendorRegisterDTO;
import com.app.entities.vendor.Vendor;

public interface VendorService {
	
	List<Vendor> getAllVendors();
	
	VendorLoginResponseDTO loginVendor(VendorLoginDTO vendorLoginDTO);
	
	Boolean registerVendor(VendorRegisterDTO vendorRegisterDTO);

}