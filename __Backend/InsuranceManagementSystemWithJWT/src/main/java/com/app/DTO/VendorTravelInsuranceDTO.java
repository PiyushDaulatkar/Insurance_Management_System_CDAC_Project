package com.app.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class VendorTravelInsuranceDTO {
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private Integer vendorId;
	
	private int insuranceId;

	private String vendorName;
	
	private double idvCover;
	
	private double premium;
	
	private String claimsSettled;
	
	private String addOns;

}