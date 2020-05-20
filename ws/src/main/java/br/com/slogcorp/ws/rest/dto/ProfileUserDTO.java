package br.com.slogcorp.ws.rest.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Builder
public class ProfileUserDTO {
    private String firstName;
    private String lastName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date birthDate;
    private String email;
    private String phone;
    private String document;
    private String cep;
    private String state;
    private String city;
    private String publicPlace;
    private String neighborhood;
    private String complement;
    private Integer number;
}
