package com.app.services;

import java.util.List;

import com.app.DTO.CarInsuranceDTO;
import com.app.policies.CarInsurance;

public interface CarInsuranceService {

	List<CarInsuranceDTO> getAllCarInsurances();

	boolean buyCarInsurance(CarInsuranceDTO carInsurance);

	List<CarInsuranceDTO> getCarInsurances(Integer clientId);


}
