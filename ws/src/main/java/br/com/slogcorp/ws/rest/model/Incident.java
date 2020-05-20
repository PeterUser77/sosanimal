package br.com.slogcorp.ws.rest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

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

    @Setter
    @Column(name = "TITLE")
    private String title;

    @Setter
    @Column(name = "DESCRIPTION")
    private String description;

    @Setter
    @Column(name = "VALUE")
    private BigDecimal value;

    @JsonIgnore
    @Setter
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "CD_ONG", referencedColumnName = "ID_ONG")
    private Ong ong;

    @JsonIgnore
    @Setter
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "CD_STATUS", referencedColumnName = "ID_STATUS")
    private Status status;

}
