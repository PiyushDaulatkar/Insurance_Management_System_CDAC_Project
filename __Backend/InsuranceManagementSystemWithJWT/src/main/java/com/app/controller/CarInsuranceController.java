package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CarInsuranceDTO;
import com.app.policies.CarInsurance;
import com.app.services.CarInsuranceService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class CarInsuranceController {
	
	@Autowired
	private CarInsuranceService carInsuranceService;
	
	// Testing purpose
	@GetMapping("/car")
	public ResponseEntity<?> getAllCarInsurances() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(carInsuranceService.getAllCarInsurances());
	}
	
	@GetMapping("mypolicies/car/{clientId}")
	public ResponseEntity<?> getCarInsurances(@RequestParam Integer clientId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(carInsuranceService.getCarInsurances(clientId));
	}

	
	// send Client Id in param (token after implementation)
	@PostMapping("/carinsurance")
	public ResponseEntity<?> buyCarInsurance
							(@RequestBody CarInsuranceDTO carInsurance) {
		//TODO: process POST request
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(carInsuranceService.buyCarInsurance(carInsurance));
	}
	
	
	
	
	
	
	
}
