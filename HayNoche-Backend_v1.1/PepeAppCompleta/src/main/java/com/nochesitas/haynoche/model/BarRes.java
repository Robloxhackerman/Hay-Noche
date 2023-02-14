package com.nochesitas.haynoche.model;

import com.nochesitas.haynoche.modelDetails.Day;
import com.nochesitas.haynoche.modelDetails.Location;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

/*
Con la etiqueta @Entity le sabe que es una entidad
y que va a estar represetada con tabla.

@Tables le indica el ombre que va a tener la tabla
 */
@Entity
@Table(name = "barress")
public class BarRes implements Serializable {

    /*
    Con @Id le decimos a la ORM (JPA), que ese atributo va a ser la promaryKey
    cuando cree la tabla, @GeneratedValue indica que se va a generar una id
    del tipo UUDI cada vez que se ingrese un coso nuevo
     */
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "barres_id", nullable = false)
    private UUID barRes_id;
    //Nombre del Bar/Restoran de tipo String
    private String barResName;

    //Direccion del Bar/Restoran de tipo String
    private String barResAdress;

    //Indica si el Bar/Restoran es apto para come plantas
    private Boolean barResVegan;

    //Indica si el Bar/Restoran es apto para celiacos
    private Boolean barResGlutenFree;

    //Indica si el Bar/Restoran es apto para menores
    private Boolean barResAdult;

    //Hora a la que abre el Bar/Restoran
    private LocalTime barResOpens;

    //Hora a la que cierra el Bar/Restoran
    private LocalTime barResCloses;

    /*
    @Enumerated es para saber que es un tipo de dato
    enumerado y con EnumType.ORDINAL le decimos que
    va en orden si mal no recuerdo
     */
    @Enumerated(EnumType.ORDINAL)
    private Day barResDayOpens;
    @Enumerated(EnumType.ORDINAL)
    private Day barResDayCloses;
    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Location barResLocation;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "barRes")
    List<Promocion> promocion;


    public UUID getBarres_id() {
        return barRes_id;
    }

    public void setBarres_id(UUID barres_id) {
        this.barRes_id = barres_id;
    }

    public String getBarResName() {
        return barResName;
    }

    public void setBarResName(String barResName) {
        this.barResName = barResName;
    }

    public String getBarResAdress() {
        return barResAdress;
    }

    public void setBarResAdress(String barResAdress) {
        this.barResAdress = barResAdress;
    }

    public Boolean getBarResVegan() {
        return barResVegan;
    }

    public void setBarResVegan(Boolean barResVegan) {
        this.barResVegan = barResVegan;
    }

    public Boolean getBarResGlutenFree() {
        return barResGlutenFree;
    }

    public void setBarResGlutenFree(Boolean barResGlutenFree) {
        this.barResGlutenFree = barResGlutenFree;
    }

    public LocalTime getBarResOpens() {
        return barResOpens;
    }

    public void setBarResOpens(LocalTime barResOpens) {
        this.barResOpens = barResOpens;
    }

    public LocalTime getBarResCloses() {
        return barResCloses;
    }

    public void setBarResCloses(LocalTime barResCloses) {
        this.barResCloses = barResCloses;
    }

    public Boolean getBarResAdult() {
        return barResAdult;
    }

    public void setBarResAdult(Boolean barResAdult) {
        this.barResAdult = barResAdult;
    }

    public String getBarResDayOpens() {
        return barResDayOpens.getDayText();
    }

    public void setBarResDayOpens(Day barResDayOpens) {
        this.barResDayOpens = barResDayOpens;
    }

    public String getBarResDayCloses() {
        return barResDayCloses.getDayText();
    }

    public void setBarResDayCloses(Day barResDayCloses) {
        this.barResDayCloses = barResDayCloses;
    }

    public List<Promocion> getPromocion() {
        return promocion;
    }

    public void setPromocion(List<Promocion> promocion) {
        this.promocion = promocion;
    }


    public String getBarResLocation() {
        return barResLocation.getLocationText();
    }
    public void setBarResLocation(Location barResLocation) {
        this.barResLocation = barResLocation;
    }



    /*
    Este metodo lo que hace es convertir el string de "getBarResLocation"
    a tipo Location para que a la hora de editar sepa a que locacion esta
    haciendo referencia
     */
    public Location getLocationByName(String name) {
        for (Location location : Location.values()) {
            if (location.getLocationText() == name ) {
                return location;
            }
        }
        return null;
    }


    public Day getDayByName(String name) {
        for (Day day :Day.values()) {
            if (day.getDayText() == name ) {
                return day;
            }
        }
        return null;
    }
}
