package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.model.Address;

public interface AddressService {
    Address save(Address address);
    Address findByCep(String cep);
}
