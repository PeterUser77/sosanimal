package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.AuthenticationController;
import br.com.slogcorp.ws.rest.dto.AuthenticateDTO;
import br.com.slogcorp.ws.rest.dto.UserDTO;
import br.com.slogcorp.ws.rest.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authentication")
public class AuthenticationControllerImpl implements AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationControllerImpl(final AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @Override
    @PostMapping("/new")
    public ResponseEntity<AuthenticateDTO> authenticate(@RequestBody UserDTO login) {
        return ResponseEntity.accepted()
                .body(authenticationService.authenticate(login.getEmail(), login.getPassword()));
    }
}
