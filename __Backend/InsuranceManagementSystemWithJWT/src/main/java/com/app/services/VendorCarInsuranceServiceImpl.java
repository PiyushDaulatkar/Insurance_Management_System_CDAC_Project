package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.VendorCarInsuranceDTO;
import com.app.daos.VendorCarInsuranceDao;
import com.app.daos.VendorDao;
import com.app.daos.VendorHealthInsuranceDao;
import com.app.daos.VendorHomeInsuranceDao;
import com.app.daos.VendorTravelInsuranceDao;
import com.app.entities.VendorCarInsurance;
import com.app.entities.vendor.Vendor;

@Service
@Transactional
public class VendorCarInsuranceServiceImpl implements VendorCarInsuranceService{

	@Autowired
	private VendorDao vendorDao;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private VendorCarInsuranceDao carInsuranceDao;

	@Override
	public List<VendorCarInsuranceDTO> getAllCarInsurance() { // all insurances of all vendors
		List<VendorCarInsuranceDTO> vendorCarInsurances = new ArrayList<>();
		for(VendorCarInsurance car : carInsuranceDao.findAll()) {
			VendorCarInsuranceDTO carDTO = mapper.map(car, VendorCarInsuranceDTO.class);
			car.getCarInsurancevendor().getVCarInsurance().size(); // fetching lazy data
			carDTO.setVendorId(car.getCarInsurancevendor().getId()); // WRITE_ONLY
			carDTO.setInsuranceId(car.getId());
			vendorCarInsurances.add(carDTO);
		}
		return vendorCarInsurances;
	}

	@Override
	public List<VendorCarInsuranceDTO> getVendorCarInsurances(Integer vendorId) {
		List<VendorCarInsuranceDTO> vendorCarinsurancesDTO = new ArrayList<>();
		
		if (vendorDao.existsById(vendorId)) {
		List<VendorCarInsurance> vendorCarinsurances = vendorDao.findById(vendorId).get().getVCarInsurance();
		vendorCarinsurances.size(); //// to get lazy data
		for ( VendorCarInsurance vendorCarinsurance : vendorCarinsurances) {
			VendorCarInsuranceDTO DTO = mapper.map(vendorCarinsurance, VendorCarInsuranceDTO.class);
			DTO.setVendorId(vendorCarinsurance.getCarInsurancevendor().getId()); // WRITE_ONLY
			DTO.setInsuranceId(vendorCarinsurance.getId());
			vendorCarinsurancesDTO.add(DTO);
		}
		}
		return vendorCarinsurancesDTO;
	}

	@Override
	public boolean addVendorCarInsurance(VendorCarInsuranceDTO carInsuranceDTO) {
		VendorCarInsurance carInsurance = mapper.map(carInsuranceDTO, VendorCarInsurance.class);
		carInsurance.setCarInsurancevendor(vendorDao.findById(carInsuranceDTO.getVendorId()).get());
		// getting added to vendor list by cascade no need to add explicitly
	    carInsuranceDao.save(carInsurance);
	    return true;
	}
	
	@Override
	public Boolean deleteCarInsurance(Integer carInsuranceId) {
		if(carInsuranceDao.existsById(carInsuranceId)) {
			carInsuranceDao.deleteById(carInsuranceId);
			return true;
		}
		return false;
	}
}