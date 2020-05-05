package br.com.slogcorp.ws.rest.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(schema = "SOSANIMAL", name = "ADDRESS")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ADDRESS")
    private Integer cdAdress;

    @Setter
    @Column(name = "PUBLIC_PLACE")
    private String publicPlace;

    @Column(name = "COMPLEMENT")
    private String complement;

    @Setter
    @Column(name = "NEIGHBORHOOD")
    private String neighborhood;

    @Setter
    @Column(name = "CITY")
    private String city;

    @Setter
    @Column(name = "STATE")
    private String district;

    @Setter
    @Column(name = "CEP")
    private Integer cep;

}