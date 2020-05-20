package br.com.slogcorp.ws.rest.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProfileOngDTO {
    private String name;
    private String fantasyName;
    private String email;
    private String phone;
    private String document;
    private String cep;
    private String city;
    private String state;
    private String neighborhood;
    private String publicPlace;
    private String complement;
    private Integer number;
}
