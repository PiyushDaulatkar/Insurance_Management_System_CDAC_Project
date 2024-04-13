package com.app.services;

import java.util.List;

import com.app.DTO.HealthInsuranceDTO;

public interface HealthInsuranceService {

	List<HealthInsuranceDTO> getAllHealthInsurances();

	boolean buyHealthInsurance(HealthInsuranceDTO healthInsurance);

	List<HealthInsuranceDTO> getHealthInsurances(Integer clientId);

}
