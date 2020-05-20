package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.enums.StatusEnum;
import br.com.slogcorp.ws.rest.model.Incident;
import br.com.slogcorp.ws.rest.model.Ong;
import br.com.slogcorp.ws.rest.model.Status;
import br.com.slogcorp.ws.rest.repository.IncidentRepository;
import br.com.slogcorp.ws.rest.service.IncidentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.slogcorp.ws.rest.enums.StatusEnum.*;

@Service
public class IncidentServiceImpl implements IncidentService {

    private final IncidentRepository incidentRepository;
    private final Integer pageSize = 5;

    public IncidentServiceImpl(final IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    @Override
    public Integer count(Integer cdOng) {
        return incidentRepository.countIncidentsByCdOng(cdOng);
    }

    @Override
    public ResponseEntity<Page<Incident>> findByCdOngAndCdStatus(Integer cdOng, Integer cdStatus, Integer page) {
        Integer total = incidentRepository.countIncidentsByCdOng(cdOng);

        return ResponseEntity.ok().header("X-total-count", String.valueOf(total))
                .body((total == 0) ? Page.empty() : incidentRepository.findByCdOngAndStatus(cdOng, cdStatus, PageRequest.of(
                        page,
                        pageSize
                )));
    }

    @Override
    @Transactional
    public void create(Incident incident, Integer cdOng) throws Exception {
        try {
            incident.setOng(new Ong(cdOng));
            incident.setStatus(new Status(IN_PROGRESS.getCdStatus()));
            incidentRepository.save(incident);
        }catch (Exception ex){
            throw new Exception("Ocorreu um erro ao tentar cadastrar o caso!");
        }
    }
}
