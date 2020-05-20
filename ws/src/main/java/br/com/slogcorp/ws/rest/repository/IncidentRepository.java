package br.com.slogcorp.ws.rest.repository;

import br.com.slogcorp.ws.rest.model.Incident;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface IncidentRepository extends JpaRepository<Incident, Integer> {

    @Query("SELECT COUNT(i) FROM Incident i WHERE i.ong.cdOng = ?1")
    Integer countIncidentsByCdOng(Integer cdOng);

    @Query("SELECT i FROM Incident i WHERE i.ong.cdOng =?1 AND i.status.cdStatus=?2 ORDER BY i.cdIncident DESC")
    Page<Incident> findByCdOngAndStatus(Integer cdOng, Integer cdStatus, Pageable pageable);

    @Modifying
    @Transactional
    @Query("UPDATE Incident i SET i.status =?2 WHERE i.cdIncident =?1")
    void updateStatusByCdIncident(Integer cdIncident, Integer cdStatus);

    @Query("SELECT i FROM Incident i JOIN i.ong ORDER BY i.cdIncident")
    Page<Incident> findAllFetchOng(Pageable pageable);
}
