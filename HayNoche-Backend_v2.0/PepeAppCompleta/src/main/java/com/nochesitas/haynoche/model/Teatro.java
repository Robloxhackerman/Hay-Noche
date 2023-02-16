package com.nochesitas.haynoche.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.UUID;

@Entity
@Table(name = "teatro")
public class Teatro {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID tObraId;
    private String tObraName;
    private String tObraAdress;
    private LocalDate tObraStarts;
    private LocalDate tObraEnds;
    private Integer tObraAge;
    private String tObraLink;

    public UUID gettObraId() {
        return tObraId;
    }

    public void settObraId(UUID tObraId) {
        this.tObraId = tObraId;
    }

    public String gettObraName() {
        return tObraName;
    }

    public void settObraName(String tObraName) {
        this.tObraName = tObraName;
    }

    public String gettObraAdress() {
        return tObraAdress;
    }

    public void settObraAdress(String tObraPlace) {
        this.tObraAdress = tObraPlace;
    }

    public String gettObraStarts() {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return tObraStarts.format(dateTimeFormatter);
    }

    public void settObraStarts(LocalDate tObraStarts) {
        this.tObraStarts = tObraStarts;
    }

    public String gettObraEnds() {

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return tObraEnds.format(dateTimeFormatter);
    }

    public void settObraEnds(LocalDate tObraEnds) {
        this.tObraEnds = tObraEnds;
    }

    public Integer gettObraAge() {
        return tObraAge;
    }

    public void settObraAge(Integer tObraAge) {
        this.tObraAge = tObraAge;
    }

    public String gettObraLink() {
        return tObraLink;
    }

    public void settObraLink(String tObraLink) {
        this.tObraLink = tObraLink;
    }
}
