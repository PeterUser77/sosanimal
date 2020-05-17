package br.com.slogcorp.ws.rest.repository;


import br.com.slogcorp.ws.rest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAndPassword(String login, String password);

    Optional<User> findByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE User u " +
            "  SET u.token = ?1 " +
            "WHERE u.cdUser = ?2")
    void updateTokenByCdUser(String token, Integer cdUser);
}
