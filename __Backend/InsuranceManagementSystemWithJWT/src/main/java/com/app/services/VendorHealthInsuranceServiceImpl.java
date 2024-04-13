package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.VendorCarInsuranceDTO;
import com.app.DTO.VendorHealthInsuranceDTO;
import com.app.daos.VendorDao;
import com.app.daos.VendorHealthInsuranceDao;
import com.app.entities.VendorCarInsurance;
import com.app.entities.VendorHealthInsurance;
import com.app.entities.vendor.Vendor;

@Service
@Transactional
public class VendorHealthInsuranceServiceImpl implements VendorHealthInsuranceService{
	
	@Autowired
	private VendorDao vendorDao;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private VendorHealthInsuranceDao healthInsuranceDao;

	@Override
	public List<VendorHealthInsuranceDTO> getAllHealthInsurance() { // all insurances of all vendors
		List<VendorHealthInsuranceDTO> vendorHealthInsurances = new ArrayList<>();
		for(VendorHealthInsurance health : healthInsuranceDao.findAll()) {
			VendorHealthInsuranceDTO healthDTO = mapper.map(health, VendorHealthInsuranceDTO.class);
			health.getHealthInsurancevendor().getVHealthInsurance().size(); // fetching lazy data
			healthDTO.setVendorId(health.getHealthInsurancevendor().getId()); // WRITE_ONLY
			healthDTO.setInsuranceId(health.getId());
			vendorHealthInsurances.add(healthDTO);
		}
		return vendorHealthInsurances;
	}

	@Override
	public List<VendorHealthInsuranceDTO> getVendorHealthInsurances(Integer vendorId) {
		List<VendorHealthInsuranceDTO> vendorHealthinsurancesDTO = new ArrayList<>();
		
		if (vendorDao.existsById(vendorId)) {
		List<VendorHealthInsurance> vendorHealthinsurances = vendorDao.findById(vendorId).get().getVHealthInsurance();
		vendorHealthinsurances.size(); //// to get lazy data
		for ( VendorHealthInsurance vendorHealthinsurance : vendorHealthinsurances) {
			VendorHealthInsuranceDTO DTO = mapper.map(vendorHealthinsurance, VendorHealthInsuranceDTO.class);
			DTO.setVendorId(vendorHealthinsurance.getHealthInsurancevendor().getId()); // WRITE_ONLY
			DTO.setInsuranceId(vendorHealthinsurance.getId());
			vendorHealthinsurancesDTO.add(DTO);
		}
		}
		return vendorHealthinsurancesDTO;
	}

	@Override
	public boolean addVendorHealthInsurance(VendorHealthInsuranceDTO healthInsuranceDTO) {
		VendorHealthInsurance healthInsurance = mapper.map(healthInsuranceDTO, VendorHealthInsurance.class);
		healthInsurance.setHealthInsurancevendor(vendorDao.findById(healthInsuranceDTO.getVendorId()).get());
		// getting added to vendor list by cascade no need to add explicitly
	    healthInsuranceDao.save(healthInsurance);
	    return true;
	}
	
	@Override
	public Boolean deleteHealthInsurance(Integer carInsuranceId) {
		if(healthInsuranceDao.existsById(carInsuranceId)) {
			healthInsuranceDao.deleteById(carInsuranceId);
			return true;
		}
		return false;
	}

}

