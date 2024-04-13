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

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VendorHomeInsurance extends BaseEntity{

	@ManyToOne()
	private Vendor homeInsurancevendor;
	
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
//	private Vendor homeInsurancevendor;
//	
//	@Column(nullable=false) 
//	private Integer policyTerm;
//	
//	
//	@Column(nullable = false)
//	private double premium;
//	
//	@Column(nullable=false) 
//	private Double premium;
//	
//	@Column(nullable=false) 
//	private String addOns;
	
}
