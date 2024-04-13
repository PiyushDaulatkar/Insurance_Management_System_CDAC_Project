package com.app.policies;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.app.entities.BaseEntity;
import com.app.entities.Client;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "car_insurance_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CarInsurance extends BaseEntity {
	// common
	private Date startDate;
	
	private int premium;
	
	private int period = 12; // default
	
	private String vendorName;
	
	private Integer vendorId;
	
	private Integer idvCover;
	
	private String claimSetted; // %tage
	
	private String addOns;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Client client;
	
	/////////
	
	private String carRegNo;
	
	private String carType;
	
	private Date regDate;
	
	
	
	
}
