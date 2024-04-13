package com.app.entities.vendor	;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.app.entities.BaseEntity;
import com.app.entities.VendorCarInsurance;
import com.app.entities.VendorHealthInsurance;
import com.app.entities.VendorHomeInsurance;
import com.app.entities.VendorTravelInsurance;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vendor_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Vendor extends BaseEntity{

	@Column(length = 30, nullable = false)
	private String name;
	
	@Column(length = 40, nullable = false)
	private String email;
	
	@Column(length = 30, nullable = false)
	private String password;

	@Column	
	private String image;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "carInsurancevendor")
	private List<VendorCarInsurance> vCarInsurance = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "healthInsurancevendor")
	private List<VendorHealthInsurance> vHealthInsurance = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "homeInsurancevendor")
	private List<VendorHomeInsurance> vHomeInsurance = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "travelInsurancevendor")
	private List<VendorTravelInsurance> vTravelInsurance = new ArrayList<>();
	
//	public void addCarInsurance(VendorCarInsurance carInsurance) {
//		vCarInsurance.add(carInsurance);
//		carInsurance.setCarInsurancevendor(this);;
//	}
//	public void removeCar(VendorCarInsurance carInsurance) {
//		vCarInsurance.remove(carInsurance);
//		carInsurance.setCarInsurancevendor(null);
//	}
//	
//	public void addHealthInsurance(VendorHealthInsurance healthInsurance) {
//		vHealthInsurance.add(healthInsurance);
//		 healthInsurance.setHealthInsurancevendor(this);;
//	}
//	public void removeHealth(VendorHealthInsurance healthInsurance) {
//		vHealthInsurance.remove( healthInsurance);
//		 healthInsurance.setHealthInsurancevendor(null);
//	}
//	
//	
//	public void addHomeInsurance(VendorHomeInsurance homeInsurance) {
//		vHomeInsurance.add(homeInsurance);
//		homeInsurance.setHomeInsurancevendor(this);;
//	}
//	public void removeHome(VendorHomeInsurance homeInsurance) {
//		vHomeInsurance.remove(homeInsurance);
//		homeInsurance.setHomeInsurancevendor(null);
//	}
//	
//	
//	public void addTravelInsurance(VendorTravelInsurance travelInsurance) {
//		vTravelInsurance.add(travelInsurance);
//		travelInsurance.setTravelInsurancevendor(this);;
//	}
//	public void removeTravel(VendorTravelInsurance travelInsurance) {
//		vTravelInsurance.remove(travelInsurance);
//		travelInsurance.setTravelInsurancevendor(null);
//	}
}