package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.IncidentController;
import br.com.slogcorp.ws.rest.enums.StatusEnum;
import br.com.slogcorp.ws.rest.model.Incident;
import br.com.slogcorp.ws.rest.service.IncidentService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<Page<Incident>> findIncidentsInProgressByCdOng(@RequestParam (value = "cdOng") Integer cdOng,
                                                                         @RequestParam(
                                                              value = "page",
                                                              defaultValue = "0") Integer page) {

        return incidentService.findByCdOngAndCdStatus(cdOng, IN_PROGRESS.getCdStatus(), page);
    }
}
