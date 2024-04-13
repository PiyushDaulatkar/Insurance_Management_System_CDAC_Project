package com.app.services;

import java.util.List;

import com.app.DTO.TravelInsuranceDTO;

public interface TravelInsuranceService {

	List<TravelInsuranceDTO> getAllTravelInsurances();

	boolean buyTravelInsurance(TravelInsuranceDTO travelInsurance);

	List<TravelInsuranceDTO> getTravelInsurances(Integer clientId);

}
