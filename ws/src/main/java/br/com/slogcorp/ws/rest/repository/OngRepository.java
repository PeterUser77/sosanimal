package br.com.slogcorp.ws.rest.repository;

import br.com.slogcorp.ws.rest.model.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface OngRepository extends JpaRepository<Ong, Integer> {

    @Query("Select o From Ong o Where o.user.cdUser = ?1")
    Optional<Ong> findByCdUser(Integer cdUser);

}
