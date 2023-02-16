package com.nochesitas.haynoche.service;

import com.nochesitas.haynoche.model.BarRes;
import com.nochesitas.haynoche.modelDetails.Categories;
import com.nochesitas.haynoche.repository.BarResRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class BarResServiceImpl implements BarResService{

    @Autowired
    private BarResRepository barResRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<BarRes> findAll() {
        return barResRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BarRes> findAll(Pageable pageable) {
        return barResRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BarRes> findById(UUID id) {
        return barResRepository.findById(id);
    }

    @Override
    @Transactional
    public BarRes save(BarRes barRes) {
        return barResRepository.save(barRes);
    }

    @Override
    @Transactional
    public void deleteById(UUID id) {
        barResRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BarRes> findByBarResType(Categories barResType, Pageable pageable) {
        return barResRepository.findByBarResType(barResType, pageable);
    }
}
