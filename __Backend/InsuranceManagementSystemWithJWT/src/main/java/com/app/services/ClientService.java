package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.DTO.LoginResponseDTO;
import com.app.DTO.PersonalDetailsDTO;
import com.app.DTO.UserLoginDTO;
import com.app.DTO.UserRegisterDTO;
import com.app.entities.Client;

public interface ClientService {

	List<PersonalDetailsDTO> getAllUser();

	LoginResponseDTO loginUser(UserLoginDTO userLoginDTO);

	boolean registerUser(UserRegisterDTO userRegisterDTO);

	PersonalDetailsDTO editPersonalDetailsUser(PersonalDetailsDTO personalDetailsDTO, int id);

	PersonalDetailsDTO getPersonalDetailsUser(Integer clientId);

}
