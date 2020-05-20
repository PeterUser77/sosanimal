package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.exception.AddressException;
import br.com.slogcorp.ws.rest.model.Address;

import java.util.Optional;

public interface AddressService {
    Address save(Address address);
    Address findByCep(String cep) throws AddressException;

    Optional<Address> findById(Integer cdAddress);
}
