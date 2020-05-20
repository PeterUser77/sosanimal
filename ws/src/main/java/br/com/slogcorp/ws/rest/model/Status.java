package br.com.slogcorp.ws.rest.model;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(schema = "SOSANIMAL", name = "STATUS")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_STATUS")
    private Integer cdStatus;

    @Column(name = "DESCRIPTION")
    private String description;

}
