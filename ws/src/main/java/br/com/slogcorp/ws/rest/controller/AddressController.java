package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.exception.AddressException;
import br.com.slogcorp.ws.rest.model.Address;
import org.springframework.http.ResponseEntity;

public interface AddressController {
    ResponseEntity<Address> findByCep(String cep) throws AddressException;
}
