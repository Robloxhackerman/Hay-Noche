package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Promocion;
import com.nochesitas.haynoche.repository.PromocionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class PromocionServiceImpl implements PromocionService{
    @Autowired
    private PromocionRepository promocionRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Promocion> findAll() {
        return promocionRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Promocion> findAll(Pageable pageable) {
        return promocionRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Promocion> findById(UUID id) {
        return promocionRepository.findById(id);
    }

    @Override
    @Transactional
    public Promocion save(Promocion promocion) {
        return promocionRepository.save(promocion);
    }

    @Override
    @Transactional
    public void deleteById(UUID id) {
        promocionRepository.deleteById(id);
    }
}
