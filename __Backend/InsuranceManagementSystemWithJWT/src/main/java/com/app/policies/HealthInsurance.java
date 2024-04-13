package com.app.policies;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.app.entities.BaseEntity;
import com.app.entities.Client;
import com.app.entities.Gender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "health_insurance_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class HealthInsurance extends BaseEntity {
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
	/////////////

	@ElementCollection
	private List<String> diseases; 
	
	private int age;
	
	private Gender gender;
	
}
