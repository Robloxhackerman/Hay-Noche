package com.nochesitas.haynoche.repository;

import com.nochesitas.haynoche.model.Musica;
import com.nochesitas.haynoche.model.Teatro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MusicaRepository extends JpaRepository<Musica, UUID> {
}
