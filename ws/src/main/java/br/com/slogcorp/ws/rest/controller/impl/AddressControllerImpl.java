package br.com.slogcorp.ws.rest.controller.impl;

<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AddressControllerImpl.java
import br.com.slogcorp.ws.rest.controller.AddressController;
import br.com.slogcorp.ws.rest.exception.AddressException;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.service.AddressService;
=======
import br.com.slogcorp.ws.rest.controller.AdressController;
import br.com.slogcorp.ws.rest.model.Adress;
import br.com.slogcorp.ws.rest.service.AdressService;
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AdressControllerImpl.java
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/address")
public class AddressControllerImpl implements AddressController {

<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AddressControllerImpl.java
    private final AddressService addressService;

    public AddressControllerImpl(final AddressService addressService) {
        this.addressService = addressService;
=======
    private AdressService adressService;

    public AdressControllerImpl(AdressService adressService) {
        this.adressService = adressService;
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AdressControllerImpl.java
    }

    @Override
    @GetMapping("/findByCep")
<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AddressControllerImpl.java
    public ResponseEntity<Address> findByCep(@RequestParam String cep) throws AddressException {
        return ResponseEntity.ok(addressService.findByCep(cep));
=======
    public ResponseEntity<Adress> findByCep(@RequestParam String cep) {
        return ResponseEntity.ok(adressService.findByCep(cep));
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/controller/impl/AdressControllerImpl.java
    }
}
