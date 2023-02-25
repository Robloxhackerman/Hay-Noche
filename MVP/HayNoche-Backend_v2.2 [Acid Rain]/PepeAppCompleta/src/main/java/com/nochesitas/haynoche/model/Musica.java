package com.nochesitas.haynoche.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Entity
@Table(name = "musica")
public class Musica {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID mMusicaId;
    private String mMusicaName;
    private String mMusicaAdress;
    private LocalDate mMusicaStarts;
    private LocalDate mMusicaEnds;
    private Integer mMusicaAge;
    private String mMusicaLink;

    public UUID getmMusicaId() {
        return mMusicaId;
    }

    public void setmMusicaId(UUID mMusicaId) {
        this.mMusicaId = mMusicaId;
    }

    public String getmMusicaName() {
        return mMusicaName;
    }

    public void setmMusicaName(String mMusicaName) {
        this.mMusicaName = mMusicaName;
    }

    public String getmMusicaAdress() {
        return mMusicaAdress;
    }

    public void setmMusicaAdress(String mMusicaPlace) {
        this.mMusicaAdress = mMusicaPlace;
    }

    public String getmMusicaStarts() {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return mMusicaStarts.format(dateTimeFormatter);
    }

    public void setmMusicaStarts(LocalDate mMusicaStarts) {
        this.mMusicaStarts = mMusicaStarts;
    }

    public String getmMusicaEnds() {

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return mMusicaEnds.format(dateTimeFormatter);
    }

    public void setmMusicaEnds(LocalDate mMusicaEnds) {
        this.mMusicaEnds = mMusicaEnds;
    }

    public Integer getmMusicaAge() {
        return mMusicaAge;
    }

    public void setmMusicaAge(Integer mMusicaAge) {
        this.mMusicaAge = mMusicaAge;
    }

    public String getmMusicaLink() {
        return mMusicaLink;
    }

    public void setmMusicaLink(String mMusicaLink) {
        this.mMusicaLink = mMusicaLink;
    }
}
