package com.app.DTO;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class PersonalDetailsDTO {
	@NotBlank
	private String name;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	private String role = "CLIENT";

	private Date dob;

	private Integer AnnualIncome;
	
	private String gender;

	private String maritalStatus;

	private String state;

	private String city;
}
