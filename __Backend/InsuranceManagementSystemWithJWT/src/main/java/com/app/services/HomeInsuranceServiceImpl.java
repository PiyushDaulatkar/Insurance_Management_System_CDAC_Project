package com.app.services;

import java.util.ArrayList;
import java.util.List;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.HomeInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;
import com.app.daos.*;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.policies.CarInsurance;
import com.app.policies.HomeInsurance;
import com.app.policies.TravelInsurance;

@Service
@Transactional
public class HomeInsuranceServiceImpl implements HomeInsuranceService {

	@Autowired
	private HomeInsuranceDao homeInsuranceDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<HomeInsuranceDTO> getAllHomeInsurances() {
		List<HomeInsuranceDTO> homes = new ArrayList<>();
		for (HomeInsurance home : homeInsuranceDao.findAll()) {
			HomeInsuranceDTO TDTO = mapper.map(homes, HomeInsuranceDTO.class);
			home.getClient().getHomeInsurances().size();
			TDTO.setClientId(home.getClient().getId());
			homes.add(TDTO);
		}

		return homes;
	}

	@Override
	public boolean buyHomeInsurance(HomeInsuranceDTO homeInsurance) {
		HomeInsurance travel = mapper.map(homeInsurance, HomeInsurance.class);
		travel.setClient(clientDao.findById(homeInsurance.getClientId()).get());
		// getting added to client list by cascade no need to add explicitly
		homeInsuranceDao.save(travel);
		return true;
	}

	@Override
	public List<HomeInsuranceDTO> getHomeInsurances(Integer clientId) {
		List<HomeInsuranceDTO> insurancesDTO = new ArrayList<>();

		if (clientDao.existsById(clientId)) {
			// getting insurances from client
			List<HomeInsurance> insurances = clientDao.findById(clientId).get().getHomeInsurances();
			insurances.size(); // to get lazy data
			for (HomeInsurance insurance : insurances) {
				HomeInsuranceDTO DTO = mapper.map(insurance, HomeInsuranceDTO.class);
//				DTO.setClientId(insurance.getClient().getId()); // WRITE_ONLY
				DTO.setPID("HO" + DTO.getStartDate().getTime() + clientId + insurance.getId());
				insurancesDTO.add(DTO);
			}
		}

		return insurancesDTO;
	}

}
