package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.VendorLoginDTO;
import com.app.DTO.VendorLoginResponseDTO;
import com.app.DTO.VendorRegisterDTO;
import com.app.daos.VendorCarInsuranceDao;
import com.app.daos.VendorDao;
import com.app.entities.vendor.Vendor;

@Service
@Transactional
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	private VendorDao vendorDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private VendorLoginResponseDTO vendorLoginResponseDTO; 
	
	private String token = "x";

	@Override
	public List<Vendor> getAllVendors() {
		List<Vendor> vendors = vendorDao.findAll();
		for(Vendor vendor: vendors) {
		vendor.getVCarInsurance().size();
		vendor.getVHealthInsurance().size();
		vendor.getVHomeInsurance().size();
		vendor.getVTravelInsurance().size();
		}
		return vendors;
	}

	@Override
	public VendorLoginResponseDTO loginVendor(VendorLoginDTO vendorLoginDTO) {
		Vendor vendor = vendorDao.findByEmailAndPassword(vendorLoginDTO.getEmail(), vendorLoginDTO.getPassword());
		
		
		int vendorId = 0;
		boolean flag = false;
		
		if (vendor != null) {
			vendorId = vendor.getId();
			flag = true;
		}
		
		vendorLoginResponseDTO.setVendorId(vendorId);
		vendorLoginResponseDTO.setLoginSuccess(flag);
		vendorLoginResponseDTO.setToken(token);
			return vendorLoginResponseDTO;
	}

	@Override
	public Boolean registerVendor(VendorRegisterDTO vendorRegisterDTO) {
		if(vendorDao.findByEmail(vendorRegisterDTO.getEmail())==null) {
			Vendor vendor =	mapper.map(vendorRegisterDTO, Vendor.class);
			vendorDao.save(vendor);
			return true;
		} else
		return false;
	}


}

