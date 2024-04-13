package com.app.DTO;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entities.Client;
import com.app.entities.Gender;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class TravelInsuranceDTO {
	private String PID;
	
	private Date startDate;
	
	private Integer premium;
	
	private Integer period;
	
	private String vendorName;
	
	private Integer vendorId;
	
	private Integer idvCover;
	
	private String claimSetted; 
	
	private String addOns;
	
    @JsonProperty(access = Access.WRITE_ONLY)
	private Integer clientId;
	
	private String Destination;
	
	private Integer duration;
	
	private Integer noOfTravlers;
}
