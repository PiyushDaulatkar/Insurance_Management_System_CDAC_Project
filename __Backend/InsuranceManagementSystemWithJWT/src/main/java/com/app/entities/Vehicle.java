package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vehicle_table")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vehicleId;

	@Column(length = 20)
	private String vehicleName;
	
	@Column(length = 10)
	private String vehicleNo;
	
	@ManyToOne
	private AssetsDetails assetId;
	
}
