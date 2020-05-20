package br.com.slogcorp.ws.rest.controller;

import br.com.slogcorp.ws.rest.model.Incident;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface IncidentController {
    ResponseEntity<Page<Incident>> findIncidentsInProgressByCdOng(Integer cdOng, Integer page);
}
