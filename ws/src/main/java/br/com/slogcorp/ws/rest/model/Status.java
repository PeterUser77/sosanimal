package br.com.slogcorp.ws.rest.model;

import javax.persistence.*;

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
