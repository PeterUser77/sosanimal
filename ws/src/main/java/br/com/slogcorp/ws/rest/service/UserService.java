package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.dto.ProfileUserDTO;
import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface UserService {
    void create(User user) throws UserException;
    void updateTokenByCdUser(String token, Integer cdUser);
    Optional<User> findByEmailAndPassword(String login, String password);

    ResponseEntity<ProfileUserDTO> findByCdUser(Integer cdUser);
}
