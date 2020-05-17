package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.AdressDTO;
import br.com.slogcorp.ws.rest.exception.AddressException;
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
    public Address findByCep(String cep) throws AddressException {
        RestTemplate template = new RestTemplate();

        UriComponents uri = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("viacep.com.br")
                .path("ws/")
                .path(cep.concat("/"))
                .path("json/")
                .build();

        try {
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
            }
        } catch (HttpClientErrorException ex) {
            throw new AddressException("CEP Inválido!");
        }
    }
}
