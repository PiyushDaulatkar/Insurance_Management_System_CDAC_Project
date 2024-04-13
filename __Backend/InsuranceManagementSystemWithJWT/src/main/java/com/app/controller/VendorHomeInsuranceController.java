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

import com.app.DTO.VendorHomeInsuranceDTO;
import com.app.services.VendorHomeInsuranceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorHomeInsuranceController {

	@Autowired
	private VendorHomeInsuranceService vendorHomeInsuranceService;
	
	@GetMapping("/allHomeInsurances")
	public ResponseEntity<?> getAllHomeInsurance() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHomeInsuranceService.getAllHomeInsurance());
	}
	
	@GetMapping("vendor/home/{vendorId}")
	public ResponseEntity<?> getVendorHomeInsurances(@RequestParam Integer vendorId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHomeInsuranceService.getVendorHomeInsurances(vendorId));
	}
	
	@PostMapping("/addHomeInsurance")
	public ResponseEntity<?> addHomeInsurance(@RequestBody VendorHomeInsuranceDTO vendorHomeInsuranceDTO) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorHomeInsuranceService.addVendorHomeInsurance(vendorHomeInsuranceDTO));
	}
	
	@DeleteMapping("/delHomeInsurance/{homeInsuranceId}")
	public ResponseEntity<?> deleteHomeInsurance(@PathVariable Integer homeInsuranceId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(vendorHomeInsuranceService.deleteHomeInsurance(homeInsuranceId));
	}
}



