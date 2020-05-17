package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.AdressDTO;
import br.com.slogcorp.ws.rest.exception.AdressException;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.repository.AddressRepository;
import br.com.slogcorp.ws.rest.service.AddressService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    public AddressServiceImpl(final AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address save(Address address) {
        return addressRepository.save(address);
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
                address.setCep(adressDTO.get().getCep());
                address.setCity(adressDTO.get().getLocalidade());
                address.setPublicPlace(adressDTO.get().getLogradouro());
                address.setNeighborhood(adressDTO.get().getBairro());
                address.setState(adressDTO.get().getUf());
                return address;
            }else{
                throw new AdressException("Ocorreu um erro ao buscar os dados referente ao CEP [".concat(cep).concat("]"));
            }
        } catch (HttpClientErrorException ex) {
            throw new AdressException("CEP Inválido!");
        }
    }
}
