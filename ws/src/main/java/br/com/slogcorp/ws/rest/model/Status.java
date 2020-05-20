package br.com.slogcorp.ws.rest.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Table(schema = "SOSANIMAL", name = "STATUS")
public class Status {

    public Status(Integer cdStatus) {
        this.cdStatus = cdStatus;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_STATUS")
    private Integer cdStatus;

    @Column(name = "DESCRIPTION")
    private String description;

}
