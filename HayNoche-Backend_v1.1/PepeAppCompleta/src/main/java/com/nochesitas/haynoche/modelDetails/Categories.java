package com.nochesitas.haynoche.modelDetails;

public enum Categories {
        CERVECERIA (0, "Cerveceria"),
        FAMILIAR (0, "Familiar"),
        GOURMET (0, "Cerveceria"),
        HAMBURGUESERIA (0, "Cerveceria"),
        JAPONES (0, "Cerveceria"),
        MEXICANA (0, "Cerveceria"),
        PARRILADA (0, "Cerveceria"),
        PERUANA (0, "Cerveceria"),
        PIZZERIA (0, "Cerveceria"),
        PUB (0, "Cerveceria"),
        STAND_UP (0, "Cerveceria"),
        SUSHI (0, "Cerveceria"),
        TRAGOS (0, "Cerveceria"),
    ;

    private Integer typePosition;
    private String typeText;

    Categories(Integer typePosition, String typeText) {
        this.typePosition = typePosition;
        this.typeText = typeText;
    }

    public Integer getTypePosition() {
        return typePosition;
    }

    public String getTypeText() {
        return typeText;
    }
}
