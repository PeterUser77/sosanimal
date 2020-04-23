package br.com.slogcorp.ws.rest.repository;


import br.com.slogcorp.ws.rest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAndPassword(String login, String password);

    Optional<User> findByEmail(String email);
}
