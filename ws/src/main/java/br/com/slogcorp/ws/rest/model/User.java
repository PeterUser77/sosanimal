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
<<<<<<< HEAD
@Table(schema = "SOSANIMAL", name = "USER")
=======
@Table(schema = "MYDB", name = "USER")
>>>>>>> feature/front-end
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USER")
    private Integer cdUser;

<<<<<<< HEAD
    @NotBlank
=======
    @Column(name = "LOGIN")
    private String login;

>>>>>>> feature/front-end
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
    @Column(name = "MAIL")
    private String email;

    @Size(max = 14)
    @Column(name = "DOCUMENT")
    private String document;

    @Size(max = 14)
    @Column(name = "PHONE")
    private String phone;

    @Size(max = 20)
    @Setter
    @Getter
    @Column(name = "TOKEN")
    private String token;

    @Setter
<<<<<<< HEAD
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_ADRESS", referencedColumnName = "ID_ADDRESS")
    private Address address;
=======
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_ADRESS", referencedColumnName = "ID_ADRESS")
    private Adress adress;
>>>>>>> feature/front-end
}