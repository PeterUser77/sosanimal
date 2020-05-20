package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.IncidentController;
import br.com.slogcorp.ws.rest.dto.RegisterIncidentDTO;
import br.com.slogcorp.ws.rest.model.Incident;
import br.com.slogcorp.ws.rest.service.IncidentService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static br.com.slogcorp.ws.rest.enums.StatusEnum.*;

@RestController
@RequestMapping("/incident")
public class IncidentControllerImpl implements IncidentController {

    private final IncidentService incidentService;

    public IncidentControllerImpl(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @Override
    @GetMapping("/findInProgressByCdOng")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public ResponseEntity<Page<Incident>> findIncidentsInProgressByCdOng(@RequestParam(value = "cdOng") Integer cdOng,
                                                                         @RequestParam(
                                                                                 value = "page",
                                                                                 defaultValue = "0") Integer page) {

        return incidentService.findByCdOngAndCdStatus(cdOng, IN_PROGRESS.getCdStatus(), page);
    }

    @Override
    @PutMapping("/new")
    public void create(@RequestBody RegisterIncidentDTO registerIncidentDTO) throws Exception {
        incidentService.create(registerIncidentDTO.getIncident(), registerIncidentDTO.getCdOng());
    }

    @Override
    @GetMapping("/markIncidentAsCanceled")
    public void markIncidentAsCanceled(@RequestParam  Integer cdIncident) throws Exception {
        incidentService.updateStatusIncident(cdIncident, CANCELED.getCdStatus());
    }

    @Override
    @GetMapping("/markIncidentAsCompleted")
    public void markIncidentAsCompleted(@RequestParam  Integer cdIncident) throws Exception {
        incidentService.updateStatusIncident(cdIncident, COMPLETED.getCdStatus());
    }

    @Override
    @GetMapping
    public ResponseEntity<Page<Incident>> findAllPaginated(@RequestParam Integer page) {
        return incidentService.findAllInProgress(page);
    }

    @Override
    @PostMapping("/edit")
    public void edit(@RequestBody Incident incident) {
        incidentService.update(incident);
    }
}
