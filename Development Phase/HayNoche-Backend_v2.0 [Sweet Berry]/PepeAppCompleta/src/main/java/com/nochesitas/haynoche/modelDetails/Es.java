package com.nochesitas.haynoche.modelDetails;

public enum Es {
    BAR(0, "Bar"),
    RESTAURANT(1, "Restaurant")
    ;

    private Integer siSoyPosition;
    private String siSoyText;

    Es(Integer siSoyPosition, String siSoyText) {
        this.siSoyPosition = siSoyPosition;
        this.siSoyText = siSoyText;
    }

    public Integer getSiSoyPosition() {
        return siSoyPosition;
    }

    public String getSiSoyText() {
        return siSoyText;
    }

}
