package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.VendorHomeInsuranceDTO;
import com.app.daos.VendorDao;
import com.app.daos.VendorHomeInsuranceDao;
import com.app.entities.VendorHomeInsurance;
import com.app.entities.VendorHomeInsurance;
import com.app.entities.vendor.Vendor;

@Service
@Transactional
public class VendorHomeInsuranceServiceImpl implements VendorHomeInsuranceService{

	@Autowired
	private VendorDao vendorDao;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private VendorHomeInsuranceDao homeInsuranceDao;

	@Override
	public List<VendorHomeInsuranceDTO> getAllHomeInsurance() { // all insurances of all vendors
		List<VendorHomeInsuranceDTO> vendorHomeInsurances = new ArrayList<>();
		for(VendorHomeInsurance home : homeInsuranceDao.findAll()) {
			VendorHomeInsuranceDTO homeDTO = mapper.map(home, VendorHomeInsuranceDTO.class);
			home.getHomeInsurancevendor().getVHomeInsurance().size(); // fetching lazy data
			homeDTO.setVendorId(home.getHomeInsurancevendor().getId()); // WRITE_ONLY
			homeDTO.setInsuranceId(home.getId());
			vendorHomeInsurances.add(homeDTO);
		}
		return vendorHomeInsurances;
	}

	@Override
	public List<VendorHomeInsuranceDTO> getVendorHomeInsurances(Integer vendorId) {
		List<VendorHomeInsuranceDTO> vendorHomeinsurancesDTO = new ArrayList<>();
		
		if (vendorDao.existsById(vendorId)) {
		List<VendorHomeInsurance> vendorHomeinsurances = vendorDao.findById(vendorId).get().getVHomeInsurance();
		vendorHomeinsurances.size(); //// to get lazy data
		for ( VendorHomeInsurance vendorHomeinsurance : vendorHomeinsurances) {
			VendorHomeInsuranceDTO DTO = mapper.map(vendorHomeinsurance, VendorHomeInsuranceDTO.class);
			DTO.setVendorId(vendorHomeinsurance.getHomeInsurancevendor().getId()); // WRITE_ONLY
			DTO.setInsuranceId(vendorHomeinsurance.getId());
			vendorHomeinsurancesDTO.add(DTO);
		}
		}
		return vendorHomeinsurancesDTO;
	}

	@Override
	public boolean addVendorHomeInsurance(VendorHomeInsuranceDTO homeInsuranceDTO) {
		VendorHomeInsurance homeInsurance = mapper.map(homeInsuranceDTO, VendorHomeInsurance.class);
		homeInsurance.setHomeInsurancevendor(vendorDao.findById(homeInsuranceDTO.getVendorId()).get());
		// getting added to vendor list by cascade no need to add explicitly
	    homeInsuranceDao.save(homeInsurance);
	    return true;
	}
	
	@Override
	public Boolean deleteHomeInsurance(Integer homeInsuranceId) {
		if(homeInsuranceDao.existsById(homeInsuranceId)) {
			homeInsuranceDao.deleteById(homeInsuranceId);
			return true;
		}
		return false;
	}

}

