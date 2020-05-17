package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.dto.AuthenticateDTO;

public interface AuthenticationService {
    AuthenticateDTO authenticate(String login, String password);
}
