package com.nochesitas.haynoche.controller;

import com.nochesitas.haynoche.model.BarRes;
import com.nochesitas.haynoche.service.BarResService;
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
@RequestMapping("/api/barres")
@CrossOrigin("*")
public class BarResController {

    @Autowired
    private BarResService barResService;


    /*Metodo para postear con bar/res

    {
        "barResName":"UN STRING",
        "barResAdress":"UN STRING",
        "barResVegan":"TRUE/FALSE",
        "barResGlutenFree":"TRUE/FALSE",
        "barResAdult":"TRUE/FALSE",
        "barResOpens":"HORA:MINUTOS:SEGUNDOS",
        "barResCloses":"HORA:MINUTOS:SEGUNDOS",
        "barResDayOpens": "DE 0 A 6 [0="LUNES",1="MARTES",2="MIERCOLES",3="JUEVES",4="VIERNES",5="SABADO",6="DOMINGO"],
        "barResDayCloses": "DE 0 A 6 [0="LUNES",1="MARTES",2="MIERCOLES",3="JUEVES",4="VIERNES",5="SABADO",6="DOMINGO"],
        "barResLocation": "DE 0 A 2 [0="PUNTA CARRETAS", 1="POCITOS", 2="CORDON"]"
    }
     */

    @PostMapping
    public ResponseEntity<?> create(@RequestBody BarRes barRes) {
        return ResponseEntity.status(HttpStatus.CREATED).body(barResService.save(barRes));
    }

    //Metodo para obtener todos los barres con su correspondiente info de la database
    @GetMapping
    public List<BarRes> readAll() {
        List<BarRes> barRes = StreamSupport
                .stream(barResService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return barRes;
    }

    //Metodo para obtener la informacion de un barres dada su id
    @GetMapping("/{id}")
    public ResponseEntity<?> read (@PathVariable UUID id) {
        Optional<BarRes> oBarRes = barResService.findById(id);

        if (!oBarRes.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(oBarRes);
    }

    /*Metodo para editar un bar/res existente

    {
        "barResName":"UN STRING",
        "barResAdress":"UN STRING",
        "barResVegan":"TRUE/FALSE",
        "barResGlutenFree":"TRUE/FALSE",
        "barResAdult":"TRUE/FALSE",
        "barResOpens":"HORA:MINUTOS:SEGUNDOS",
        "barResCloses":"HORA:MINUTOS:SEGUNDOS",
        "barResDayOpens": "DE 0 A 6 [0="LUNES",1="MARTES",2="MIERCOLES",3="JUEVES",4="VIERNES",5="SABADO",6="DOMINGO"],
        "barResDayCloses": "DE 0 A 6 [0="LUNES",1="MARTES",2="MIERCOLES",3="JUEVES",4="VIERNES",5="SABADO",6="DOMINGO"],
        "barResLocation": "DE 0 A 2 [0="PUNTA CARRETAS", 1="POCITOS", 2="CORDON"]"
    }
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> update (@RequestBody BarRes barResDetails, @PathVariable UUID id) {
        Optional<BarRes> barRes = barResService.findById(id);


        if (!barRes.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        barRes.get().setBarResName(barResDetails.getBarResName());
        barRes.get().setBarResAdress(barResDetails.getBarResAdress());
        barRes.get().setBarResVegan(barResDetails.getBarResVegan());
        barRes.get().setBarResGlutenFree(barResDetails.getBarResGlutenFree());
        barRes.get().setBarResOpens(barResDetails.getBarResOpens());
        barRes.get().setBarResCloses(barResDetails.getBarResCloses());
        barRes.get().setBarResLocation(barResDetails.getLocationByName(barResDetails.getBarResLocation()));
        barRes.get().setBarResDayOpens(barResDetails.getDayByName(barResDetails.getBarResDayOpens()));
        barRes.get().setBarResDayCloses(barResDetails.getDayByName(barResDetails.getBarResDayCloses()));
        barRes.get().setBarResEs(barResDetails.getEsByName(barResDetails.getBarResEs()));
        barRes.get().setBarResType(barResDetails.getTypeByName(barResDetails.getBarResType()));
        barRes.get().setBarResMoney(barResDetails.getBarResMoney());
        barRes.get().setBarResDesc(barResDetails.getBarResDesc());
        
        return ResponseEntity.status(HttpStatus.CREATED).body(barResService.save(barRes.get()));
    }

    //Elimina un barres basandose en su id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable UUID id) {
        if (!barResService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        barResService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
