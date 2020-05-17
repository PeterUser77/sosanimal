package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.UserDTO;
import br.com.slogcorp.ws.rest.exception.AuthenticationException;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.service.AuthenticationService;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserService userService;

    public AuthenticationServiceImpl( final UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDTO authenticate(String login, String password) {
        Optional<User> result = userService.findByEmailAndPassword(login, password);
        UserDTO userDTO = new UserDTO();

        result.orElseThrow(() -> new AuthenticationException("Login ou senha incorreto!"));
        userDTO.setCdUser(result.get().getCdUser());
        userDTO.setFirstName(result.get().getFirstName());
        return userDTO;
    }

}
