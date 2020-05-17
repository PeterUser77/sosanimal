package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.AdressController;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.service.AddressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/address")
public class AddressControllerImpl implements AdressController {

    private AddressService addressService;

    public AddressControllerImpl(AddressService addressService) {
        this.addressService = addressService;
    }

    @Override
    @GetMapping("/findByCep")
    public ResponseEntity<Address> findByCep(@RequestParam String cep) {
        return ResponseEntity.ok(addressService.findByCep(cep));
    }
}
