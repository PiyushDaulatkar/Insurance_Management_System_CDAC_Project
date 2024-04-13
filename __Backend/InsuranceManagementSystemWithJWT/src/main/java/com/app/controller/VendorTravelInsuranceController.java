package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.VendorTravelInsuranceDTO;
import com.app.services.VendorTravelInsuranceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorTravelInsuranceController {

	@Autowired
	private VendorTravelInsuranceService vendorTravelInsuranceService;
	
	@GetMapping("/allTravelInsurances")
	public ResponseEntity<?> getAllTravelInsurance() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorTravelInsuranceService.getAllTravelInsurance());
	}
	
	@GetMapping("vendor/travel/{vendorId}")
	public ResponseEntity<?> getVendorTravelInsurances(@RequestParam Integer vendorId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorTravelInsuranceService.getVendorTravelInsurances(vendorId));
	}
	
	@PostMapping("/addTravelInsurance")
	public ResponseEntity<?> addTravelInsurance(@RequestBody VendorTravelInsuranceDTO vendorTravelInsuranceDTO) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorTravelInsuranceService.addVendorTravelInsurance(vendorTravelInsuranceDTO));
	}
	
	@DeleteMapping("/delTravelInsurance/{travelInsuranceId}")
	public ResponseEntity<?> deleteTravelInsurance(@PathVariable Integer travelInsuranceId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(vendorTravelInsuranceService.deleteTravelInsurance(travelInsuranceId));
	}
}



