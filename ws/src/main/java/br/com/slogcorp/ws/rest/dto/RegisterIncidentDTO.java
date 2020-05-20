package br.com.slogcorp.ws.rest.dto;

import br.com.slogcorp.ws.rest.model.Incident;
import lombok.Getter;

@Getter
public class RegisterIncidentDTO {
    private Incident incident;
    private Integer cdOng;
}
