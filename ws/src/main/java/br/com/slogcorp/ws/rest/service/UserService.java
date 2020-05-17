package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;

import java.util.Optional;

public interface UserService {
    void create(User user) throws UserException;
    void updateTokenByCdUser(String token, Integer cdUser);
    Optional<User> findByEmailAndPassword(String login, String password);
}
