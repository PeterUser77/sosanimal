package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.OngHomeDTO;
import br.com.slogcorp.ws.rest.exception.OngException;
import br.com.slogcorp.ws.rest.model.Address;
import br.com.slogcorp.ws.rest.model.Ong;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.repository.OngRepository;
import br.com.slogcorp.ws.rest.service.AddressService;
import br.com.slogcorp.ws.rest.service.IncidentService;
import br.com.slogcorp.ws.rest.service.OngService;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static br.com.slogcorp.ws.rest.util.DocumentUtils.isCNPJ;
import static br.com.slogcorp.ws.rest.util.EmailUtils.isValidEmailAddress;

@Service
public class OngServiceImpl implements OngService {

    private final OngRepository ongRepository;
    private final AddressService addressService;
    private final IncidentService incidentService;

    public OngServiceImpl(final OngRepository ongRepository,
                          final AddressService addressService,
                          final IncidentService incidentService) {
        this.ongRepository = ongRepository;
        this.addressService = addressService;
        this.incidentService = incidentService;
    }

    @Override
    public void create(Ong ong, Integer cdUser) throws OngException {
        validateOng(ong);
        Address address = addressService.save(ong.getAddress());
        ong.setUser(new User(cdUser));
        ong.setAddress(address);
        ongRepository.save(ong);
    }

    @Override
    public Optional<Ong> findByCdUser(Integer cdUser) {
        return ongRepository.findByCdUser(cdUser);
    }

    @Override
    public OngHomeDTO ongAndTotalIncidents(Integer cdUser) {
        Optional<Ong> ong = ongRepository.findByCdUser(cdUser);
        OngHomeDTO ongHomeDTO = new OngHomeDTO();
        ongHomeDTO.setFantasyName(ong.get().getFantasyName());
        ongHomeDTO.setCdOng(ong.get().getCdOng());

        ongHomeDTO.setTotal(incidentService.count(ong.get().getCdOng()));

        return ongHomeDTO;
    }

    public void validateOng(Ong ong) throws OngException {
        if (!isCNPJ(ong.getDocument())) {
            throw new OngException("CNPJ inválido!");
        } else if (!isValidEmailAddress(ong.getEmail())) {
            throw new OngException("E-mail inválido!");
        }
    }


}