package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.Musica;
import com.nochesitas.haynoche.repository.MusicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class MusicaServiceImpl implements MusicaService {

    @Autowired
    private MusicaRepository musicaRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Musica> findAll() {
        return musicaRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Musica> findAll(Pageable pageable) {
        return musicaRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Musica> findById(UUID id) {
        return musicaRepository.findById(id);
    }

    @Override
    @Transactional
    public Musica save(Musica musica) {
        return musicaRepository.save(musica);
    }

    @Override
    @Transactional
    public void deleteById(UUID id) {
        musicaRepository.deleteById(id);
    }
}
