package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.VendorTravelInsuranceDTO;
import com.app.daos.VendorDao;
import com.app.daos.VendorTravelInsuranceDao;
import com.app.entities.VendorTravelInsurance;
import com.app.entities.VendorTravelInsurance;
import com.app.entities.vendor.Vendor;
@Service
@Transactional
public class VendorTravelInsuranceServiceImpl implements VendorTravelInsuranceService{

	@Autowired
	private VendorDao vendorDao;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private VendorTravelInsuranceDao travelInsuranceDao;

	@Override
	public List<VendorTravelInsuranceDTO> getAllTravelInsurance() { // all insurances of all vendors
		List<VendorTravelInsuranceDTO> vendorTravelInsurances = new ArrayList<>();
		for(VendorTravelInsurance travel : travelInsuranceDao.findAll()) {
			VendorTravelInsuranceDTO travelDTO = mapper.map(travel, VendorTravelInsuranceDTO.class);
			travel.getTravelInsurancevendor().getVTravelInsurance().size(); // fetching lazy data
			travelDTO.setVendorId(travel.getTravelInsurancevendor().getId()); // WRITE_ONLY
			travelDTO.setInsuranceId(travel.getId());
			vendorTravelInsurances.add(travelDTO);
		}
		return vendorTravelInsurances;
	}

	@Override
	public List<VendorTravelInsuranceDTO> getVendorTravelInsurances(Integer vendorId) {
		List<VendorTravelInsuranceDTO> vendorTravelinsurancesDTO = new ArrayList<>();
		
		if (vendorDao.existsById(vendorId)) {
		List<VendorTravelInsurance> vendorTravelinsurances = vendorDao.findById(vendorId).get().getVTravelInsurance();
		vendorTravelinsurances.size(); //// to get lazy data
		for ( VendorTravelInsurance vendorTravelinsurance : vendorTravelinsurances) {
			VendorTravelInsuranceDTO DTO = mapper.map(vendorTravelinsurance, VendorTravelInsuranceDTO.class);
			DTO.setVendorId(vendorTravelinsurance.getTravelInsurancevendor().getId()); // WRITE_ONLY
			DTO.setInsuranceId(vendorTravelinsurance.getId());
			vendorTravelinsurancesDTO.add(DTO);
		}
		}
		return vendorTravelinsurancesDTO;
	}

	@Override
	public boolean addVendorTravelInsurance(VendorTravelInsuranceDTO travelInsuranceDTO) {
		VendorTravelInsurance travelInsurance = mapper.map(travelInsuranceDTO, VendorTravelInsurance.class);
		travelInsurance.setTravelInsurancevendor(vendorDao.findById(travelInsuranceDTO.getVendorId()).get());
		// getting added to vendor list by cascade no need to add explicitly
	    travelInsuranceDao.save(travelInsurance);
	    return true;
	}
	
	@Override
	public Boolean deleteTravelInsurance(Integer travelInsuranceId) {
		if(travelInsuranceDao.existsById(travelInsuranceId)) {
			travelInsuranceDao.deleteById(travelInsuranceId);
			return true;
		}
		return false;
	}

}
