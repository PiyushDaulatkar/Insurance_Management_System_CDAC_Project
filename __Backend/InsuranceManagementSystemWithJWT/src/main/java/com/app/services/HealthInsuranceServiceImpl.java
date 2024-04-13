package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.HealthInsuranceDTO;
import com.app.DTO.HomeInsuranceDTO;
import com.app.daos.ClientDao;
import com.app.daos.HealthInsuranceDao;
import com.app.policies.CarInsurance;
import com.app.policies.HealthInsurance;
import com.app.policies.HomeInsurance;

@Service
@Transactional
public class HealthInsuranceServiceImpl implements HealthInsuranceService {

	@Autowired
	private HealthInsuranceDao healthInsuranceDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<HealthInsuranceDTO> getAllHealthInsurances() {
		List<HealthInsuranceDTO> healths = new ArrayList<>();
		for (HealthInsurance health : healthInsuranceDao.findAll()) {
			HealthInsuranceDTO HDTO = mapper.map(health, HealthInsuranceDTO.class);
			health.getClient().getCarInsurances().size();
			HDTO.setClientId(health.getClient().getId());
			healths.add(HDTO);
		}

		return healths;
	}

	@Override
	public boolean buyHealthInsurance(HealthInsuranceDTO healthInsurance) {
		HealthInsurance health = mapper.map(healthInsurance, HealthInsurance.class);
		health.setDiseases(List.of(healthInsurance.getDiseases().split(",")));
		health.setClient(clientDao.findById(healthInsurance.getClientId()).get());
		// getting added to client list by cascade no need to add explicitly
		healthInsuranceDao.save(health);
		return true;
	}

	@Override
	public List<HealthInsuranceDTO> getHealthInsurances(Integer clientId) {
		List<HealthInsuranceDTO> insurancesDTO = new ArrayList<>();

		if (clientDao.existsById(clientId)) {
			// getting insurances from client
			List<HealthInsurance> insurances = clientDao.findById(clientId).get().getHealthInsurances();
			insurances.size(); // to get lazy data
			for (HealthInsurance insurance : insurances) {
				HealthInsuranceDTO DTO = mapper.map(insurance, HealthInsuranceDTO.class);
//				DTO.setClientId(insurance.getClient().getId()); // WRITE_ONLY
				DTO.setPID("HL" + DTO.getStartDate().getTime() + clientId + insurance.getId());
				insurancesDTO.add(DTO);
			}
		}

		return insurancesDTO;
	}
}
