package br.com.slogcorp.ws.rest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Table(schema = "SOSANIMAL", name = "INCIDENT")
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_INCIDENT")
    private Integer cdIncident;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "VALUE")
    private BigDecimal value;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_ONG", referencedColumnName = "ID_ONG")
    private Ong ong;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "CD_STATUS", referencedColumnName = "ID_STATUS")
    private Status status;

}
