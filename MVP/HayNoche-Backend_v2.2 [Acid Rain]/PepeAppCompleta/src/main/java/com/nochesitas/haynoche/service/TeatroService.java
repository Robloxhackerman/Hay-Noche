package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Teatro;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
import java.util.UUID;

public interface TeatroService {

    public Iterable<Teatro> findAll();

    // Metodo para usar las pajas
    public Page<Teatro> findAll(Pageable pageable);

    // Metodo para buscar por ID
    public Optional<Teatro> findById(UUID id);

    // Metodo para guardar un obj
    public Teatro save(Teatro teatro);

    // Metodo para eliminar coso por ID
    public void deleteById(UUID id);
}
