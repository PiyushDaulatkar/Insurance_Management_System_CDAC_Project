package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.policies.HomeInsurance;

@Repository
public interface HomeInsuranceDao extends JpaRepository<HomeInsurance, Integer>{

	HomeInsurance findByClientId(Integer clientId);

}
