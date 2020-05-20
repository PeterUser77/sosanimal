package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.model.Adress;

public interface AdressService {
    Adress findOrSave(Adress adress);
    Adress findByCep(String cep);
}
