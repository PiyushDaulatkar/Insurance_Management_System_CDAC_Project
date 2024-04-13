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
public class VendorHealthInsurance extends BaseEntity{

	@ManyToOne()
	private Vendor healthInsurancevendor;
	
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
//	private Vendor healthInsurancevendor;
//	
//	@Column(nullable = false)
//	private String coverAmount;
//	
//	@Column(nullable = false)
//	private double premium;
//	
//	@Column(nullable = false)
//	private int cashlessHospitals;
//	
////	@Column(nullable = false)
////	private String roomRentLimit;
//	
//	@Column(nullable = false)
//	private String initialWaitingPeriod;
//	
////	@Column(nullable = false)
////	private String coPay;
}