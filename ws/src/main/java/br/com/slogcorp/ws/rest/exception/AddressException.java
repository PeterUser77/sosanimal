package br.com.slogcorp.ws.rest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AddressException extends Exception {

    public AddressException(String message) {
        super(message);
    }
}
