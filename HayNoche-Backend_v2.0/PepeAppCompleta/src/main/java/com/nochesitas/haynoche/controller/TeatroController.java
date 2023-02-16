package com.nochesitas.haynoche.controller;

import com.nochesitas.haynoche.model.Teatro;
import com.nochesitas.haynoche.service.TeatroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/teatro")
@CrossOrigin("*")
public class TeatroController {

    @Autowired
    private TeatroService teatroService;


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
    public ResponseEntity<?> create(@RequestBody Teatro teatro) {
        return ResponseEntity.status(HttpStatus.CREATED).body(teatroService.save(teatro));
    }

    //Metodo para obtener todos los barres con su correspondiente info de la database
    @GetMapping
    public List<Teatro> readAll() {
        List<Teatro> barRes = StreamSupport
                .stream(teatroService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return barRes;
    }

    //Metodo para obtener la informacion de un barres dada su id
    @GetMapping("/{id}")
    public ResponseEntity<?> read (@PathVariable UUID id) {
        Optional<Teatro> oTeatro = teatroService.findById(id);

        if (!oTeatro.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(oTeatro);
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
    public ResponseEntity<?> update (@RequestBody Teatro teatroDetails, @PathVariable UUID id) {
        Optional<Teatro> teatro = teatroService.findById(id);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        if (!teatro.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        teatro.get().settObraName(teatroDetails.gettObraName());
        teatro.get().settObraAdress(teatroDetails.gettObraAdress());
        teatro.get().settObraStarts(LocalDate.parse(teatroDetails.gettObraStarts(), formatter));
        teatro.get().settObraEnds(LocalDate.parse(teatroDetails.gettObraEnds(), formatter));
        teatro.get().settObraAge(teatroDetails.gettObraAge());
        teatro.get().settObraLink(teatroDetails.gettObraLink());

        return ResponseEntity.status(HttpStatus.CREATED).body(teatroService.save(teatro.get()));
    }

    //Elimina un barres basandose en su id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable UUID id) {
        if (!teatroService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        teatroService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
