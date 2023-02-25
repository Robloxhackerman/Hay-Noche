package com.nochesitas.haynoche.service;

import java.util.List;
import java.util.Optional;
import com.nochesitas.haynoche.model.BarRes;
import com.nochesitas.haynoche.modelDetails.Categories;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

public interface BarResService {

    public Iterable<BarRes> findAll();

    // Metodo para usar las pajas
    public Page<BarRes> findAll(Pageable pageable);

    // Metodo para buscar por ID
    public Optional<BarRes> findById(UUID id);

    // Metodo para guardar un obj
    public BarRes save(BarRes barRes);

    // Metodo para eliminar coso por ID
    public void deleteById(UUID id);

    public Page<BarRes> findByBarResType(Categories barResType, Pageable pageable);
}
