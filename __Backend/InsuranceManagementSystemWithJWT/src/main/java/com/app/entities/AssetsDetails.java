package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "assets_details_table")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AssetsDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer assetDetailsId;
	
	@OneToMany(mappedBy = "assetId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Home> Homes;
	
	@OneToMany(mappedBy = "assetId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Vehicle> vehicles;
	
	@OneToOne
	@JoinColumn(name = "client_id")
	private Client clientId;
	
}
