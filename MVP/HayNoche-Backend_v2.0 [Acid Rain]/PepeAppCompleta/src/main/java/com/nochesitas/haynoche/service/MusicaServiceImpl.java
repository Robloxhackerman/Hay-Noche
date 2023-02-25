package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Teatro;
import com.nochesitas.haynoche.repository.TeatroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class TeatroServiceImpl implements TeatroService {

    @Autowired
    private TeatroRepository teatroRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Teatro> findAll() {
        return teatroRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Teatro> findAll(Pageable pageable) {
        return teatroRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Teatro> findById(UUID id) {
        return teatroRepository.findById(id);
    }

    @Override
    @Transactional
    public Teatro save(Teatro teatro) {
        return teatroRepository.save(teatro);
    }

    @Override
    @Transactional
    public void deleteById(UUID id) {
        teatroRepository.deleteById(id);
    }
}
