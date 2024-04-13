package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.PersonalDetailsDTO;
import com.app.DTO.UserLoginDTO;
import com.app.DTO.UserRegisterDTO;
import org.springframework.web.bind.annotation.RequestParam;
import com.app.services.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class ClientController {

	@Autowired
	private ClientService clientService;

	// Testing purpose
	
	
	@GetMapping("/user")
	public ResponseEntity<?> getAllUser() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(clientService.getAllUser());
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@Valid @RequestBody UserLoginDTO userLoginDTO) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(clientService.loginUser(userLoginDTO));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegisterDTO userRegisterDTO) {
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(clientService.registerUser(userRegisterDTO));
	}
	
	// profile/{id}
	
	@GetMapping("profile/{clientId}")
	public ResponseEntity<?> getPersonalDetailsUser(@PathVariable Integer clientId) {
		//TODO: process PUT request
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(clientService.getPersonalDetailsUser(clientId));
	}
	
	@PutMapping("profile/{clientId}")
	public ResponseEntity<?> editPersonalDetailsUser(@PathVariable Integer clientId, @RequestBody PersonalDetailsDTO personalDetailsDTO) {
		//TODO: process PUT request
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(clientService.editPersonalDetailsUser(personalDetailsDTO, clientId));
	}
	
	
	
	
}
