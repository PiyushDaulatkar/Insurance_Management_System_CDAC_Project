package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.app.entities.vendor.Vendor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class VendorTravelInsurance extends BaseEntity{
	
	@ManyToOne()
	private Vendor travelInsurancevendor;
	
	@Column(nullable = false)
	private String vendorName;
	
	@Column(nullable = false)
	private double idvCover;
	
	@Column(nullable = false)
	private double premium;
	
	@Column(nullable = false)
	private String claimsSettled;
	
	@Column(nullable = false)
	private String addOns;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	private Vendor travelInsurancevendor;
//	
//	@Column(nullable = false)
//	private int medicalExpenses;
//	
//	@Column(nullable = false)
//	private int lossOfPassport;
//	
//	@Column(nullable = false)
//	private int baggageLost;
//	
//	@Column(nullable = false)
//	private double premium;
	
//	@Column(nullable = false)
//	private int tripCancellation;
	
//	@Column(nullable = false)
//	private int personalAccident;

}