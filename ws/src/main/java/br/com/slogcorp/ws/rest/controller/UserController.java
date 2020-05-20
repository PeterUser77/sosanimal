package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.dto.ProfileUserDTO;
import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface UserController {
    void create(User user) throws UserException;
    ResponseEntity<ProfileUserDTO> findByCdUser(Integer cdUser);
}
