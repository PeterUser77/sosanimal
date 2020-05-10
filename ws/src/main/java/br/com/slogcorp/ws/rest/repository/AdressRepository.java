package br.com.slogcorp.ws.rest.repository;


import br.com.slogcorp.ws.rest.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdressRepository extends JpaRepository<Address, Integer> {

    Address findByCepAndStreetAndNumber(Integer cep, String street, Integer number);
}
