package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.HealthInsuranceDTO;
import com.app.DTO.HomeInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;
import com.app.policies.CarInsurance;
import com.app.services.CarInsuranceService;
import com.app.services.HealthInsuranceService;
import com.app.services.HomeInsuranceService;
import com.app.services.TravelInsuranceService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class HomeInsuranceController {
	
	@Autowired
	private HomeInsuranceService homeInsuranceService;
	
	// Testing purpose
	@GetMapping("/home")
	public ResponseEntity<?> getAllHomeInsurances() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(homeInsuranceService.getAllHomeInsurances());
	}

	@GetMapping("mypolicies/home/{clientId}")
	public ResponseEntity<?> getHomeInsurances(@RequestParam Integer clientId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(homeInsuranceService.getHomeInsurances(clientId));
	}
	
	// send Client Id in param (token after implementation)
	@PostMapping("/homeinsurance")
	public ResponseEntity<?> buyHomeInsurance(@RequestBody HomeInsuranceDTO homeInsurance) {
		//TODO: process POST request
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(homeInsuranceService.buyHomeInsurance(homeInsurance));
	}
		
	
}
