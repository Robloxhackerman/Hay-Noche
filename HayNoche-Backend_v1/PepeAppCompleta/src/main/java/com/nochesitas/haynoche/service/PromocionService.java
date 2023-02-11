package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Promocion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
import java.util.UUID;

public interface PromocionService {
    public Iterable<Promocion> findAll();

    // Metodo para usar las pajas
    public Page<Promocion> findAll(Pageable pageable);

    // Metodo para buscar por ID
    public Optional<Promocion> findById(UUID id);

    // Metodo para guardar un obj
    public Promocion save(Promocion promocion);

    // Metodo para eliminar coso por ID
    public void deleteById(UUID id);
}
