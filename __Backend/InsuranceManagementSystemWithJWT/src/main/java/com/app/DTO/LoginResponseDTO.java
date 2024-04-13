package com.app.DTO;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class LoginResponseDTO {

	private Boolean loginSuccess;
	
	private String token;
	
	private Integer clientId;
}
