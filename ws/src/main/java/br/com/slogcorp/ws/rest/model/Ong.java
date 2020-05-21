package br.com.slogcorp.ws.rest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Table(schema = "SOSANIMAL", name = "ONG")
public class Ong {

    public Ong(Integer cdOng) {
    this.cdOng = cdOng;
    }

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
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "CD_USER", referencedColumnName = "ID_USER")
    private User user;
}
