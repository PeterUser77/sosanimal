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
@Table(schema = "MYDB", name = "ADRESS")
public class Adress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ADRESS")
    private Integer cdAdress;

    @Setter
    @Column(name = "CEP")
    private Integer cep;

    @Setter
    @Column(name = "STREET")
    private String street;

    @Column(name = "NUMBER")
    private Integer number;

    @Column(name = "COMPLEMENT")
    private String complement;

    @Setter
    @Column(name = "CITY")
    private String city;

    @Setter
<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/model/Address.java
    @Column(name = "STATE")
    private String state;

    @Setter
    @Column(name = "CEP")
    private String cep;

=======
    @Column(name = "DISTRICT")
    private String district;

>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/model/Adress.java
}