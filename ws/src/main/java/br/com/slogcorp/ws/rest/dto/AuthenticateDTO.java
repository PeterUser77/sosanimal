package br.com.slogcorp.ws.rest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticateDTO {
    private Integer idUser;
    private String token;
}
