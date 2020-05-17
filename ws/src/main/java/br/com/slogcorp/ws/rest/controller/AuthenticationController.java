package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.dto.AuthenticateDTO;
import br.com.slogcorp.ws.rest.dto.UserDTO;
import org.springframework.http.ResponseEntity;

public interface AuthenticationController {

    ResponseEntity<AuthenticateDTO> authenticate(UserDTO login);
}
