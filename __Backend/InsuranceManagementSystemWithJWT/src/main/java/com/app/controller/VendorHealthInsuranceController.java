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

import com.app.DTO.VendorHealthInsuranceDTO;
import com.app.services.VendorHealthInsuranceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorHealthInsuranceController {

	@Autowired
	private VendorHealthInsuranceService vendorHealthInsuranceService;
	
	@GetMapping("/allHealthInsurances")
	public ResponseEntity<?> getAllHealthInsurance() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHealthInsuranceService.getAllHealthInsurance());
	}
	
	@GetMapping("vendor/health/{vendorId}")
	public ResponseEntity<?> getVendorHealthInsurances(@RequestParam Integer vendorId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHealthInsuranceService.getVendorHealthInsurances(vendorId));
	}
	
	@PostMapping("/addHealthInsurance")
	public ResponseEntity<?> addHealthInsurance(@RequestBody VendorHealthInsuranceDTO vendorHealthInsuranceDTO) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHealthInsuranceService.addVendorHealthInsurance(vendorHealthInsuranceDTO));
	}
	
	@DeleteMapping("/delHealthInsurance/{healthInsuranceId}")
	public ResponseEntity<?> deleteHealthInsurance(@PathVariable Integer healthInsuranceId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(vendorHealthInsuranceService.deleteHealthInsurance(healthInsuranceId));
	}
}



