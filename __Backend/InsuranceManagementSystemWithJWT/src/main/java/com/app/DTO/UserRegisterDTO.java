package com.app.DTO;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserRegisterDTO {
	@NotBlank
	private String name;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	private String role = "CLIENT";

//	private Date dob;
//
//	private Integer AnnualIncome;
//	
//	@Enumerated(EnumType.STRING)
//	private Gender gender;
//
//	@Enumerated(EnumType.STRING)
//	private MaritalStatus maritalStatus;
//
//	private States state;
//
//	private City city;
}
