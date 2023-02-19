package com.nochesitas.haynoche.controller;

import com.nochesitas.haynoche.model.BarRes;
import com.nochesitas.haynoche.model.Promocion;
import com.nochesitas.haynoche.service.BarResService;
import com.nochesitas.haynoche.service.PromocionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/promo")
@CrossOrigin("*")
public class PromocionController {

    @Autowired
    private PromocionService promocionService;
    @Autowired
    private BarResService barResService;

    /*Metodo para agregarle una promocion a un bar/res existente dada la id del mismo

    {
        "promocionName":"UN STRING",
        "barResId":"UNA UUID (la del bar que queres agregarla)",
    }
     */
    @PostMapping("/{barResId}")
    public ResponseEntity<?> create(@RequestBody Promocion promocion, @PathVariable UUID barResId) {
        Optional<BarRes> oBarRes = barResService.findById(barResId);

        if (!oBarRes.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        promocion.setBarRes(oBarRes.get());
        return ResponseEntity.status(HttpStatus.CREATED).body(promocionService.save(promocion));
    }

    //Elimina una promocion basandose en su id
    @GetMapping
    public List<Promocion> readAll() {
        List<Promocion> promocion = StreamSupport
                .stream(promocionService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return promocion;
    }
}
