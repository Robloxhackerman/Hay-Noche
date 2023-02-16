package com.nochesitas.haynoche.modelDetails;

//Collecion de datos enumerados para usar en cositas magicas
public enum Day {
    LUNA (0, "Lunes"),
    MARTE(1, "Martes"),
    MERCURIO(2, "Miércoles"),
    JUPITER(3, "Jueves"),
    VENUS(4, "Viernes"),
    SATURNO(5, "Sábado "),
    SOL(6, "Domingo")
    ;

    private Integer dayPosition;
    private String dayText;

    Day(Integer dayPosition, String dayText) {

        this.dayPosition = dayPosition;
        this.dayText = dayText;

    }

    public Integer getDayPosition() {
        return dayPosition;
    }

    public String getDayText() {
        return dayText;
    }
}
