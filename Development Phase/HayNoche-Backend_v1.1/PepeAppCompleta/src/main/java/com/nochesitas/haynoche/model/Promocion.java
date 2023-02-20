package com.nochesitas.haynoche.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.UUID;

//Lo mimso que en BarRes
@Entity
@Table(name="promociones")
public class Promocion implements Serializable{


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID promocionId;
    private String promocionName;

    /*
    @JsonIgnore poruq ese ponia recurivo el pibe
    y con esto hace n se que cosa de la serializacion
    y bla bla bla...
     */
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "barres_id")
    private BarRes barRes;


    public void setPromocionId(UUID promocionId) {
        this.promocionId = promocionId;
    }

    public UUID getPromocionId() {
        return promocionId;
    }

    public String getPromocionName() {
        return promocionName;
    }

    public void setPromocionName(String promocionName) {
        this.promocionName = promocionName;
    }

    public BarRes getBarRes() {
        return barRes;
    }

    public void setBarRes(BarRes barRes) {
        this.barRes = barRes;
    }
}
