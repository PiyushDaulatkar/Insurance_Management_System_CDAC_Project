package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.HealthInsuranceDTO;
import com.app.policies.CarInsurance;
import com.app.services.CarInsuranceService;
import com.app.services.HealthInsuranceService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class HealthInsuranceController {
	
	@Autowired
	private HealthInsuranceService healthInsuranceService;
	
	// Testing purpose
	@GetMapping("/health")
	public ResponseEntity<?> getAllHealthInsurances() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(healthInsuranceService.getAllHealthInsurances());
	}
	
	@GetMapping("mypolicies/health/{clientId}")
	public ResponseEntity<?> getHealthInsurances(@RequestParam Integer clientId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(healthInsuranceService.getHealthInsurances(clientId));
	}

	
	// send Client Id in param (token after implementation)
	@PostMapping("/healthinsurance")
	public ResponseEntity<?> buyHealthInsurance(@RequestBody HealthInsuranceDTO healthInsurance) {
		//TODO: process POST request
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(healthInsuranceService.buyHealthInsurance(healthInsurance));
	}
	
	
	
	
	
	
	
}
