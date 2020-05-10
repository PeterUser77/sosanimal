package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.model.Address;
import org.springframework.http.ResponseEntity;

public interface AdressController {
    ResponseEntity<Address> findByCep(String cep);
}
