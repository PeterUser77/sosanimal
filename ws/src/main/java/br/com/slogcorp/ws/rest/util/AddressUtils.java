package br.com.slogcorp.ws.rest.util;

public class AddressUtils {

    public static Integer parseCepForInteger(String cep){
        cep = cep.replaceAll("-", "");
        return Integer.valueOf(cep);
    }
}
