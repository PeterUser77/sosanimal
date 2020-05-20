package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.OngController;
import br.com.slogcorp.ws.rest.dto.OngDTO;
import br.com.slogcorp.ws.rest.dto.OngHomeDTO;
import br.com.slogcorp.ws.rest.dto.ProfileOngDTO;
import br.com.slogcorp.ws.rest.exception.OngException;
import br.com.slogcorp.ws.rest.model.Ong;
import br.com.slogcorp.ws.rest.service.OngService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/ong")
public class OngControllerImpl implements OngController {

    private final OngService ongService;

    public OngControllerImpl(final OngService ongService) {
        this.ongService = ongService;
    }

    @Override
    @PutMapping("/create")
    public void create(@RequestBody OngDTO ong) throws OngException {
        ongService.create(ong.getOng(), ong.getCdUser());
    }

    @Override
    @GetMapping("/ongAndTotalIncidentsByCdUser")
    public OngHomeDTO ongAndTotalIncidentsByCdUser(@RequestParam Integer cdUser) {
        Optional<Ong> ong = ongService.findByCdUser(cdUser);
        OngHomeDTO ongHomeDTO = new OngHomeDTO();
        ongHomeDTO.setFantasyName(ong.get().getFantasyName());

        return ongService.ongAndTotalIncidents(cdUser);
    }

    @Override
    @PostMapping("/findByCdOng")
    public ResponseEntity<ProfileOngDTO> findByCdOng(@RequestParam Integer cdOng) {
        return ongService.findByCdOng(cdOng);
    }


}
