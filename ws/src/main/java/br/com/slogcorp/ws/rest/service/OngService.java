package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.dto.OngHomeDTO;
import br.com.slogcorp.ws.rest.exception.OngException;
import br.com.slogcorp.ws.rest.model.Ong;

import java.util.Optional;

public interface OngService {
    void create(Ong ong, Integer cdUser) throws OngException;

    Optional<Ong> findByCdUser(Integer cdUser);

    OngHomeDTO ongAndTotalIncidents(Integer cdUser);
}
