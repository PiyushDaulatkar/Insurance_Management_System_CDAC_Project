package com.app.services;

import java.util.List;

import com.app.DTO.HomeInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;

public interface HomeInsuranceService {

	List<HomeInsuranceDTO> getAllHomeInsurances();

	boolean buyHomeInsurance(HomeInsuranceDTO homeInsurance);

	List<HomeInsuranceDTO> getHomeInsurances(Integer clientId);

}
