package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.dto.OngDTO;
import br.com.slogcorp.ws.rest.dto.OngHomeDTO;
import br.com.slogcorp.ws.rest.dto.ProfileOngDTO;
import br.com.slogcorp.ws.rest.exception.OngException;
import org.springframework.http.ResponseEntity;

public interface OngController {

    void create(OngDTO ong) throws OngException;

    OngHomeDTO ongAndTotalIncidentsByCdUser(Integer idUser);
    ResponseEntity<ProfileOngDTO> findByCdOng(Integer cdOng);
}
