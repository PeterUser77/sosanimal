package br.com.slogcorp.ws.rest.service;

import br.com.slogcorp.ws.rest.model.Incident;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface IncidentService {

    Integer count(Integer cdOng);

    ResponseEntity<Page<Incident>> findByCdOngAndCdStatus(Integer cdOng, Integer cdStatus, Integer page);
}
