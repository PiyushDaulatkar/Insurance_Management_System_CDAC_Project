package com.app.DTO;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Component
public class VendorLoginResponseDTO {
	
	private boolean loginSuccess;
	private String token;
	private int vendorId;

}