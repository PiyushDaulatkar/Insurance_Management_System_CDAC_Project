package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.policies.TravelInsurance;


@Repository
public interface TravelInsuranceDao extends JpaRepository<TravelInsurance, Integer>{

	TravelInsurance findByClientId(Integer clientId);

}
