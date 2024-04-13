package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.VendorLoginDTO;
import com.app.DTO.VendorRegisterDTO;
import com.app.services.VendorService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class VendorController {

	@Autowired
	private VendorService vendorService;
	
	@GetMapping("/vendors")
	public ResponseEntity<?> getAllVendors() {
        return ResponseEntity.status(HttpStatus.OK).body(vendorService.getAllVendors());		
	}
	
	@PostMapping("/vendorLogin")
	public ResponseEntity<?> loginVendor(@Valid @RequestBody VendorLoginDTO vendorLoginDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(vendorService.loginVendor(vendorLoginDTO));
	}
	
	@PostMapping("/vendorRegister")
	public ResponseEntity<?> registerVendor(@Valid @RequestBody VendorRegisterDTO vendorRegisterDTO ) {
		return ResponseEntity.status(HttpStatus.CREATED).body(vendorService.registerVendor(vendorRegisterDTO));
	}
	
	
}


