package br.com.slogcorp.ws.rest.dto;

import lombok.Getter;

@Getter
public class AddressDTO {
    private String cep;
    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;
}
