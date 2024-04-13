//package com.app.controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.services.PolicyService;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@Validated
//public class PolicyController {
//	
//	@Autowired
//	private PolicyService policyService;
//	
//	// Testing purpose
//	@GetMapping("/policy")
//	public ResponseEntity<?> getAllPolicy() {
//		return ResponseEntity.status(HttpStatus.OK).body(policyService.getAllPolicy());
//	}
//	
//	@GetMapping("/clientId/{clientId}")
//	public ResponseEntity<?> getAllPoliciesOfUser(@RequestParam int clientId) {
//		return ResponseEntity.status(HttpStatus.OK).body(policyService.getAllPoliciesOfUser(clientId));
//	}
//
//}
