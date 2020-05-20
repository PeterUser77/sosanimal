package br.com.slogcorp.ws.rest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticateDTO {
    private String cdUser;
    private String token;
    private String firstName;
    private boolean isOwnOng;
}
