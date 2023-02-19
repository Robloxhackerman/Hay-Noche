package com.nochesitas.haynoche.modelDetails;

public enum Categories {
        CERVECERIA (0, "Cerveceria"),
        FAMILIAR (1, "Familiar"),
        GOURMET (2, "Gourmet"),
        HAMBURGUESERIA (3, "Hamburgueseria"),
        JAPONES (4, "Japones"),
        MEXICANA (5, "Mexicana"),
        PARRILADA (6, "Parrillada"),
        PERUANA (7, "Peruana"),
        PIZZERIA (8, "Pizzeria"),
        PUB (9, "PUB"),
        STAND_UP (10, "Stand Up"),
        SUSHI (11, "Sushi"),
        TRAGOS (12, "Tragos"),
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
