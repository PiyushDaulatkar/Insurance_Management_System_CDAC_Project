package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.HealthInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;
import com.app.policies.CarInsurance;
import com.app.services.CarInsuranceService;
import com.app.services.HealthInsuranceService;
import com.app.services.TravelInsuranceService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class TravelInsuranceController {
	
	@Autowired
	private TravelInsuranceService travelInsuranceService;
	
	// Testing purpose
	@GetMapping("/travel")
	public ResponseEntity<?> getAllTravelInsurances() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(travelInsuranceService.getAllTravelInsurances());
	}
	
	@GetMapping("mypolicies/travel/{clientId}")
	public ResponseEntity<?> getTravelInsurances(@RequestParam Integer clientId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(travelInsuranceService.getTravelInsurances(clientId));
	}

	
	// send Client Id in param (token after implementation)
	@PostMapping("/travelinsurance")
	public ResponseEntity<?> buyTravelInsurance(@RequestBody TravelInsuranceDTO travelInsurance) {
		//TODO: process POST request
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(travelInsuranceService.buyTravelInsurance(travelInsurance));
	}
		
	
}
