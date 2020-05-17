package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;

public interface UserController {
    void create(User user) throws UserException;
}
