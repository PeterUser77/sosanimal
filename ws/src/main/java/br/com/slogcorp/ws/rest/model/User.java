package br.com.slogcorp.ws.rest.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Getter
@Table(schema = "SOSANIMAL", name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USER")
    private Integer cdUser;

    @NotBlank
    @Setter
    @Column(name = "PASSWORD")
    private String password;

    @NotBlank
    @Column(name = "FIRST_NAME")
    private String firstName;

    @NotBlank
    @Column(name = "LAST_NAME")
    private String lastName;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", locale = "pt-BR", timezone = "Brazil/East")
    @Column(name = "DATE_BIRTH")
    private Date birthDate;

    @Email
    @Column(name = "EMAIL")
    private String email;

    @Size(max = 14)
    @Column(name = "DOCUMENT")
    private String document;

    @Size(max = 14)
    @Column(name = "PHONE")
    private String phone;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_ADRESS", referencedColumnName = "ID_ADDRESS")
    private Address address;
}