package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.AdressDTO;
import br.com.slogcorp.ws.rest.exception.AdressException;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.repository.AdressRepository;
import br.com.slogcorp.ws.rest.service.AddressService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

import static br.com.slogcorp.ws.rest.util.AdressUtils.parseCepForInteger;

@Service
public class AddressServiceImpl implements AddressService {

    private AdressRepository adressRepository;

    public AddressServiceImpl(AdressRepository adressRepository) {
        this.adressRepository = adressRepository;
    }

    @Override
    public Address save(Address address) {
        return adressRepository.save(address);
    }

    @Override
    public Address findByCep(String cep) {
        RestTemplate template = new RestTemplate();

        UriComponents uri = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("viacep.com.br")
                .path("ws/")
                .path(cep.concat("/"))
                .path("json/")
                .build();

        try {
            Optional<AdressDTO> adressDTO = Optional.ofNullable(template.getForObject(uri.toUriString(), AdressDTO.class));
            Address address = new Address();
            if (adressDTO.isPresent()) {
                address.setCep(parseCepForInteger(adressDTO.get().getCep()));
                address.setCity(adressDTO.get().getLocalidade());
                address.setPublicPlace(adressDTO.get().getLogradouro());
                address.setDistrict(adressDTO.get().getBairro());
                return address;
            }else{
                throw new AdressException("Ocorreu um erro ao buscar os dados referente ao CEP [".concat(cep).concat("]"));
            }
        } catch (HttpClientErrorException ex) {
            throw new AdressException("CEP Inválido!");
        }
    }
}
