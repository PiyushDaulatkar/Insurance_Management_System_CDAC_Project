package com.app.DTO;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VendorLoginDTO {
	
//	@NotBlank
	private String token;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
}