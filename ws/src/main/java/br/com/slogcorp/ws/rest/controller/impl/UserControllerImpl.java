package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.UserController;
import br.com.slogcorp.ws.rest.dto.ProfileUserDTO;
import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserControllerImpl implements UserController {

    private final UserService userService;

    public UserControllerImpl(final UserService userService) {
        this.userService = userService;
    }

    @Override
    @PutMapping("/create")
    public void create(@RequestBody User user) throws UserException {

        userService.create(user);
    }

    @Override
    @PostMapping("/findByCdUser")
    public ResponseEntity<ProfileUserDTO> findByCdUser(@RequestParam Integer cdUser) {
        return userService.findByCdUser(cdUser);
    }

}
