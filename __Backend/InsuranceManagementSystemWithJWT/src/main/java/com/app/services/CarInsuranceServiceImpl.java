package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.app.DTO.CarInsuranceDTO;
import com.app.DTO.TravelInsuranceDTO;
import com.app.daos.*;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.CarInsuranceDao;
import com.app.entities.Client;
import com.app.policies.CarInsurance;

@Service
@Transactional
public class CarInsuranceServiceImpl implements CarInsuranceService {

	@Autowired
	private CarInsuranceDao carInsuranceDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<CarInsuranceDTO> getAllCarInsurances() { // all insurances of all users
		List<CarInsuranceDTO> cars = new ArrayList<>();
		for (CarInsurance car : carInsuranceDao.findAll()) {
			CarInsuranceDTO CDTO = mapper.map(car, CarInsuranceDTO.class);
			car.getClient().getCarInsurances().size(); // fetching lazy data
//			CDTO.setClientId(car.getClient().getId()); // WRITE_ONLY
			cars.add(CDTO);
		}

		return cars;
	}

	@Override
	public boolean buyCarInsurance(CarInsuranceDTO carInsurance) {
		CarInsurance car = mapper.map(carInsurance, CarInsurance.class);
		car.setClient(clientDao.findById(carInsurance.getClientId()).get());
		// getting added to client list by cascade no need to add explicitly
		carInsuranceDao.save(car);
		return true;
	}

	@Override
	public List<CarInsuranceDTO> getCarInsurances(Integer clientId) {
		List<CarInsuranceDTO> insurancesDTO = new ArrayList<>();

		if (clientDao.existsById(clientId)) {
			// getting insurances from client
			List<CarInsurance> insurances = clientDao.findById(clientId).get().getCarInsurances();
			insurances.size(); // to get lazy data
			for (CarInsurance insurance : insurances) {
				CarInsuranceDTO DTO = mapper.map(insurance, CarInsuranceDTO.class);
//				DTO.setClientId(insurance.getClient().getId()); // WRITE_ONLY
				DTO.setPID("C" + DTO.getRegDate().getTime() + clientId + insurance.getId());
				insurancesDTO.add(DTO);
			}
		}

		return insurancesDTO;
	}

}
