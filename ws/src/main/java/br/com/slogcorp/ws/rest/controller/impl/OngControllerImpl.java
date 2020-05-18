package br.com.slogcorp.ws.rest.controller.impl;

import br.com.slogcorp.ws.rest.controller.OngController;
import br.com.slogcorp.ws.rest.model.Ong;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ong")
public class OngControllerImpl implements OngController {

    @Override
    @PostMapping("/create")
    public void create(@RequestParam Ong ong) {

    }
}
