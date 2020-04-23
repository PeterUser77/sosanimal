package br.com.slogcorp.ws.rest.model;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(schema = "MYDB", name = "ADRESS")
public class Adress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ADRESS")
    private Integer cdAdress;


    @Column(name = "CEP")
    private Integer cep;


    @Column(name = "STREET")
    private String street;

    @Column(name = "NUMBER")
    private Integer number;

    @Column(name = "COMPLEMENT")
    private String complement;

    @Column(name = "CITY")
    private String city;

    @Column(name = "DISTRICT")
    private String district;

}