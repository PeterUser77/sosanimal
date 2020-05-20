package br.com.slogcorp.ws.rest.enums;

public enum StatusEnum {

    COMPLETED(1),
    IN_PROGRESS(2),
    CANCELED(3);

    private final Integer cdStatus;

    StatusEnum(Integer cdStatus) {
        this.cdStatus = cdStatus;
    }

    public Integer getCdStatus() {
        return cdStatus;
    }
}
