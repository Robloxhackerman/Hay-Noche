package com.nochesitas.haynoche.repository;

import com.nochesitas.haynoche.model.Teatro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TeatroRepository extends JpaRepository<Teatro, UUID> {
}
