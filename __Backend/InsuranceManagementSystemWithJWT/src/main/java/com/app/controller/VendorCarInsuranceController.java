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



import com.app.DTO.VendorCarInsuranceDTO;
import com.app.services.VendorCarInsuranceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorCarInsuranceController {

	@Autowired
	private VendorCarInsuranceService vendorCarInsuranceService;
	
	@GetMapping("/allCarInsurances")
	public ResponseEntity<?> getAllCarInsurance() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorCarInsuranceService.getAllCarInsurance());
	}
	
	@GetMapping("vendor/car/{vendorId}")
	public ResponseEntity<?> getVendorCarInsurances(@PathVariable Integer vendorId) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorCarInsuranceService.getVendorCarInsurances(vendorId));
	}
	
	@PostMapping("/addCarInsurance")
	public ResponseEntity<?> addCarInsurance(@RequestBody VendorCarInsuranceDTO vendorCarInsuranceDTO) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(vendorCarInsuranceService.addVendorCarInsurance(vendorCarInsuranceDTO));
	}
	
	@DeleteMapping("/delCarInsurance/{carInsuranceId}")
	public ResponseEntity<?> deleteCarInsurance(@PathVariable Integer carInsuranceId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(vendorCarInsuranceService.deleteCarInsurance(carInsuranceId));
	}
}



