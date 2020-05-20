package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.AuthenticateDTO;
import br.com.slogcorp.ws.rest.exception.AuthenticationException;
import br.com.slogcorp.ws.rest.model.Ong;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.service.AuthenticationService;
import br.com.slogcorp.ws.rest.service.OngService;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserService userService;
    private final OngService ongService;

    public AuthenticationServiceImpl(final UserService userService,
                                     final OngService ongService) {
        this.userService = userService;
        this.ongService = ongService;
    }

    @Override
    public AuthenticateDTO authenticate(String login, String password) {
        Optional<User> result = userService.findByEmailAndPassword(login, password);
        result.orElseThrow(() -> new AuthenticationException("Login ou senha incorreto!"));
        result.get().setToken(generateToken());

        Optional<Ong> ong = ongService.findByCdUser(result.get().getCdUser());

        updateTokenUser(result.get().getToken(), result.get().getCdUser());

        AuthenticateDTO authenticateDTO = new AuthenticateDTO();
        authenticateDTO.setCdUser(result.get().getCdUser().toString());
        authenticateDTO.setToken(result.get().getToken());
        authenticateDTO.setFirstName(result.get().getFirstName());
        authenticateDTO.setOwnOng(ong.isPresent());

        return authenticateDTO;
    }

    private void updateTokenUser(String token, Integer cdUser) {
        userService.updateTokenByCdUser(token, cdUser);
    }

    private String generateToken() {
        UUID uuid = UUID.randomUUID();
        String myRandom = uuid.toString();
        System.out.println(myRandom.substring(0, 20));
        return myRandom.substring(0, 20);
    }
}
