package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Musica;
import com.nochesitas.haynoche.model.Teatro;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
import java.util.UUID;

public interface MusicaService {

    public Iterable<Musica> findAll();

    // Metodo para usar las pajas
    public Page<Musica> findAll(Pageable pageable);

    // Metodo para buscar por ID
    public Optional<Musica> findById(UUID id);

    // Metodo para guardar un obj
    public Musica save(Musica musica);

    // Metodo para eliminar coso por ID
    public void deleteById(UUID id);
}
