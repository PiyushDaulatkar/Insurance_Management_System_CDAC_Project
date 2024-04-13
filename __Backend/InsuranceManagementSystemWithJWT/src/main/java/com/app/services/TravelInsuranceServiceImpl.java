package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;
import com.app.daos.*;
import com.app.entities.Client;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.policies.CarInsurance;
import com.app.policies.TravelInsurance;

@Service
@Transactional
public class TravelInsuranceServiceImpl implements TravelInsuranceService {

	@Autowired
	private TravelInsuranceDao travelInsuranceDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<TravelInsuranceDTO> getAllTravelInsurances() {
		List<TravelInsuranceDTO> travels = new ArrayList<>();
		for (TravelInsurance travel : travelInsuranceDao.findAll()) {
			TravelInsuranceDTO TDTO = mapper.map(travel, TravelInsuranceDTO.class);
			travel.getClient().getCarInsurances().size();
			TDTO.setClientId(travel.getClient().getId());
			travels.add(TDTO);
		}

		return travels;
	}

	@Override
	public boolean buyTravelInsurance(TravelInsuranceDTO travelInsurance) {
		TravelInsurance travel = mapper.map(travelInsurance, TravelInsurance.class);
		travel.setClient(clientDao.findById(travelInsurance.getClientId()).get());
		// getting added to client list by cascade no need to add explicitly
		travelInsuranceDao.save(travel);
		return true;
	}

	@Override
	public List<TravelInsuranceDTO> getTravelInsurances(Integer clientId) {
		List<TravelInsuranceDTO> insurancesDTO = new ArrayList<>();

		if (clientDao.existsById(clientId)) {
			// getting insurances from client
			List<TravelInsurance> insurances = clientDao.findById(clientId).get().getTravelInsurances();
			insurances.size(); // to get lazy data
			for (TravelInsurance insurance : insurances) {
				TravelInsuranceDTO DTO = mapper.map(insurance, TravelInsuranceDTO.class);
//				DTO.setClientId(insurance.getClient().getId()); // WRITE_ONLY
				DTO.setPID("T" + DTO.getStartDate().getTime() + clientId + insurance.getId());
				insurancesDTO.add(DTO);
			}
		}

		return insurancesDTO;
	}

}
