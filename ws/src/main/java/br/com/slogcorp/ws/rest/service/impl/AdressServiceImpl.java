package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.AdressDTO;
<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AddressServiceImpl.java
import br.com.slogcorp.ws.rest.exception.AddressException;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.repository.AddressRepository;
import br.com.slogcorp.ws.rest.service.AddressService;
=======
import br.com.slogcorp.ws.rest.exception.AdressException;
import br.com.slogcorp.ws.rest.model.Adress;
import br.com.slogcorp.ws.rest.repository.AdressRepository;
import br.com.slogcorp.ws.rest.service.AdressService;
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AdressServiceImpl.java
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

@Service
public class AdressServiceImpl implements AdressService {

    private final AddressRepository addressRepository;

<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AddressServiceImpl.java
    public AddressServiceImpl(final AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address save(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public Address findByCep(String cep) throws AddressException {
=======
    public AdressServiceImpl(AdressRepository adressRepository) {
        this.adressRepository = adressRepository;
    }

    @Override
    public Adress findOrSave(Adress adress) {
        Adress newAdress = adressRepository.findByCepAndStreetAndNumber(adress.getCep(),
                adress.getStreet(), adress.getNumber());

        if (newAdress == null) newAdress = adressRepository.save(adress);

        return newAdress;
    }

    @Override
    public Adress findByCep(String cep) {
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AdressServiceImpl.java
        RestTemplate template = new RestTemplate();

        UriComponents uri = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("viacep.com.br")
                .path("ws/")
                .path(cep.concat("/"))
                .path("json/")
                .build();

        try {
<<<<<<< HEAD:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AddressServiceImpl.java
            Optional<AdressDTO> addressDTO = Optional.ofNullable(template.getForObject(uri.toUriString(), AdressDTO.class));
            Address address = new Address();
            if (addressDTO.isPresent() &&
                    (addressDTO.get().getBairro() != null ||
                            addressDTO.get().getCep() != null ||
                            addressDTO.get().getLocalidade() != null ||
                            addressDTO.get().getUf() != null ||
                            addressDTO.get().getLogradouro() != null)) {
                address.setCep(addressDTO.get().getCep());
                address.setCity(addressDTO.get().getLocalidade());
                address.setPublicPlace(addressDTO.get().getLogradouro());
                address.setNeighborhood(addressDTO.get().getBairro());
                address.setState(addressDTO.get().getUf());
                return address;
            } else {
                throw new AddressException("Ocorreu um erro ao buscar os dados referente ao CEP [".concat(cep).concat("]"));
=======
            Optional<AdressDTO> adressDTO = Optional.ofNullable(template.getForObject(uri.toUriString(), AdressDTO.class));
            Adress adress = new Adress();
            if (adressDTO.isPresent()) {
                adress.setCep(parseCepForInteger(adressDTO.get().getCep()));
                adress.setCity(adressDTO.get().getLocalidade());
                adress.setStreet(adressDTO.get().getLogradouro());
                adress.setDistrict(adressDTO.get().getBairro());
                return adress;
            }else{
                throw new AdressException("Ocorreu um erro ao buscar os dados referente ao CEP [".concat(cep).concat("]"));
>>>>>>> feature/front-end:ws/src/main/java/br/com/slogcorp/ws/rest/service/impl/AdressServiceImpl.java
            }
        } catch (HttpClientErrorException ex) {
            throw new AddressException("CEP Inválido!");
        }
    }
}
