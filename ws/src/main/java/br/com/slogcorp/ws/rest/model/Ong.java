package br.com.slogcorp.ws.rest.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Entity
@Table(schema = "SOSANIMAL", name = "ONG")
public class Ong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ONG")
    private Integer cdOng;

    @Column(name = "NAME")
    private String name;

    @Column(name = "FANTASY_NAME")
    private String fantasyName;

    @Column(name = "DOCUMENT")
    private String document;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_ADRESS", referencedColumnName = "ID_ADDRESS")
    private Address address;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "CD_USER", referencedColumnName = "ID_USER")
    private User user;
}
