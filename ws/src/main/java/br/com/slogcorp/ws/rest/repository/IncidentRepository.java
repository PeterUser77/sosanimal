package br.com.slogcorp.ws.rest.repository;

import br.com.slogcorp.ws.rest.model.Incident;
import br.com.slogcorp.ws.rest.model.Status;
import org.hibernate.annotations.Fetch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

public interface IncidentRepository extends JpaRepository<Incident, Integer> {

    @Query("SELECT COUNT(i) FROM Incident i WHERE i.ong.cdOng = ?1 AND i.status.cdStatus=?2")
    Integer countIncidentsByCdOngANdStatus(Integer cdOng, Integer cdStatus);

    @Query("SELECT i FROM Incident i WHERE i.ong.cdOng =?1 AND i.status.cdStatus=?2 ORDER BY i.cdIncident DESC")
    Page<Incident> findByCdOngAndStatus(Integer cdOng, Integer cdStatus, Pageable pageable);

    @Transactional
    @Modifying
    @Query("UPDATE Incident i SET i.status =?1 WHERE i.cdIncident =?2")
    void updateStatusByCdIncident(Status cdStatus, Integer cdIncident);

    @Query("SELECT i FROM Incident i INNER JOIN i.ong WHERE i.status.cdStatus=?1 ORDER BY i.cdIncident DESC")
    Page<Incident> findAllFetchOng(Integer cdStatus, Pageable pageable);

    @Query("SELECT COUNT(i) FROM Incident i WHERE i.status.cdStatus=?1")
    long countIncidentsInProgress(Integer cdStatus);

    @Transactional
    @Modifying
    @Query("UPDATE Incident i SET i.title=?1, i.description=?2, i.value=?3 WHERE i.cdIncident=?4")
    void update(String title, String description, BigDecimal value, Integer cdIncident);
}
