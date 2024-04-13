package com.app.entities;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.policies.CarInsurance;
import com.app.policies.HealthInsurance;
import com.app.policies.HomeInsurance;
import com.app.policies.TravelInsurance;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "client_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Client extends BaseEntity{

	@Column(length = 30, nullable = false)
	private String name;
	
	@Column(length = 40, nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private UserRole role;

	private Date dob;

	private Integer AnnualIncome;

	@Enumerated(EnumType.STRING)
	@Column(length = 6)
	private Gender gender;

	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private MaritalStatus maritalStatus;


	@Column(length = 20)
	private String city;
	
	@Column(length = 20)
	private String state;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "client")
	private List<CarInsurance> carInsurances = new ArrayList<>(); // design pattern
	// lazy init -> cascade must be done
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "client")
	private List<HealthInsurance> healthInsurances = new ArrayList<>(); // design pattern
	// lazy init -> cascade must be done
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "client")
	private List<HomeInsurance> homeInsurances = new ArrayList<>(); // design pattern
	// lazy init -> cascade must be done
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "client")
	private List<TravelInsurance> travelInsurances = new ArrayList<>(); // design pattern
	// lazy init -> cascade must be done
	
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "clientId")
	private AssetsDetails assetsDetails;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "clientId")
	private FamilyDetails familyDetails;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "clientId")
	private ContactDetails contactDetails;
	
	
	public void addCar(CarInsurance car) {
		carInsurances.add(car);
		car.setClient(this);
	}
	public void removeCar(CarInsurance car) {
		carInsurances.remove(car);
		car.setClient(null);
	}
	
	public void addHealth(HealthInsurance health) {
		healthInsurances.add(health);
		health.setClient(this);
	}
	public void removeHealth(HealthInsurance health) {
		healthInsurances.remove(health);
		health.setClient(null);
	}
	
	public void addHome(HomeInsurance home) {
		homeInsurances.add(home);
		home.setClient(this);
	}
	public void removeHome(HomeInsurance home) {
		homeInsurances.remove(home);
		home.setClient(null);
	}
	
	public void addTravel(TravelInsurance travel) {
		travelInsurances.add(travel);
		travel.setClient(this);
	}
	public void removeHealth(TravelInsurance travel) {
		travelInsurances.remove(travel);
		travel.setClient(null);
	}

}
