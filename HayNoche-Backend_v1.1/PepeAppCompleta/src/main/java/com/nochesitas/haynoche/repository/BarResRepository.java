package com.nochesitas.haynoche.repository;

import com.nochesitas.haynoche.model.BarRes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/*
Indica el tipo de componente que es (Repository, controller o service)

En este caso indica que es un DAO(Data Access Object), se encarga dar acceso
a la informacion.
 */
@Repository
public interface BarResRepository extends JpaRepository<BarRes, UUID> {
}