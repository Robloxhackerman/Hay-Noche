package com.nochesitas.haynoche.modelDetails;

//Collecion de datos enumerados para usar en cositas magicas
public enum Location {
    PUNTA_CARRETAS (0, "Punta Carretas"),
    POCITOS (1, "Pocitos"),
    CORDON (2, "Cordón");

    private Integer locationPosition;
    private String locationText;
    Location(Integer locationPosition, String locationText) {
        this.locationPosition = locationPosition;
        this.locationText = locationText;
    }

    public Integer getLocationPosition() {
        return locationPosition;
    }

    public String getLocationText() {
        return locationText;
    }
}
