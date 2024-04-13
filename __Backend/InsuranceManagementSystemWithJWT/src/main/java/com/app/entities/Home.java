package com.app.entities;

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
@Table(name = "home_table")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Home {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer HomeId;
	
	private String homeAddress;
	
	@ManyToOne
	private AssetsDetails assetId;
}
