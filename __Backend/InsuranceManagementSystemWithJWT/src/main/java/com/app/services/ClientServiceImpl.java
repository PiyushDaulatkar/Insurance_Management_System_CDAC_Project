package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.DTO.LoginResponseDTO;
import com.app.DTO.PersonalDetailsDTO;
import com.app.DTO.UserLoginDTO;
import com.app.DTO.UserRegisterDTO;
import com.app.daos.ClientDao;
import com.app.entities.Client;
import com.app.entities.Gender;
import com.app.entities.MaritalStatus;
import com.app.security.JwtUtils;

import io.swagger.v3.core.util.Json;

@Transactional
@Service
public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientDao clientDoa;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private LoginResponseDTO loginResponseDTO;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private AuthenticationManager mgr;
	private String token = "x";

	@Override
	public List<PersonalDetailsDTO> getAllUser() {
		List<PersonalDetailsDTO> clients = new ArrayList<>();
		for (Client client : clientDoa.findAll()) {
			PersonalDetailsDTO CDTO = mapper.map(client, PersonalDetailsDTO.class);
			clients.add(CDTO);
		}
		return clients;
	}

	@Override
	public LoginResponseDTO loginUser(UserLoginDTO userLoginDTO) {
		Client client = clientDoa.findByEmail(userLoginDTO.getEmail());
//		System.err.println(client);
		if (client != null) {
			try {
			Authentication verifiedAuth = mgr
					.authenticate(new UsernamePasswordAuthenticationToken
							(userLoginDTO.getEmail(), userLoginDTO.getPassword()));

			loginResponseDTO.setClientId(client.getId());
			loginResponseDTO.setLoginSuccess(true);
			loginResponseDTO.setToken(utils.generateJwtToken(verifiedAuth));
			}catch(Exception e) {
				loginResponseDTO.setClientId(null);
				loginResponseDTO.setLoginSuccess(false);
				loginResponseDTO.setToken(null);
			}
		}
		return loginResponseDTO;
	}

	@Override
	public boolean registerUser(UserRegisterDTO userRegisterDTO) {
		if (clientDoa.findByEmail(userRegisterDTO.getEmail()) == null) {
			Client client = mapper.map(userRegisterDTO, Client.class);
			client.setPassword(passwordEncoder.encode(userRegisterDTO.getPassword()));
			clientDoa.save(client);
			return true;
		} else
			return false;
	}

	@Override
	public PersonalDetailsDTO editPersonalDetailsUser(PersonalDetailsDTO personalDetailsDTO, int id) {
		Client client = clientDoa.findById(id).get();
		mapper.map(personalDetailsDTO, client);

//		for (Gender g : Gender.values()) {
//			if (personalDetailsDTO.getGender().equalsIgnoreCase(g.name()))
//				client.setGender(g);
//		}
//
//		for (MaritalStatus m : MaritalStatus.values()) {
//			if (personalDetailsDTO.getMaritalStatus().equalsIgnoreCase(m.name()))
//				client.setMaritalStatus(m);
//		}

		return personalDetailsDTO;
	}

	@Override
	public PersonalDetailsDTO getPersonalDetailsUser(Integer clientId) {
		Optional<Client> client = clientDoa.findById(clientId);
		if (client.isPresent())
			return mapper.map(client.get(), PersonalDetailsDTO.class);
		else
			return new PersonalDetailsDTO();
	}

}
