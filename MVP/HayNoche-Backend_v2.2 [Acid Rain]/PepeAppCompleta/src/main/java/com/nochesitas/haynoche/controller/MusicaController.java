package com.nochesitas.haynoche.controller;

import com.nochesitas.haynoche.model.Musica;
import com.nochesitas.haynoche.model.Teatro;
import com.nochesitas.haynoche.service.MusicaService;
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
@RequestMapping("/api/musica")
@CrossOrigin("*")
public class MusicaController {

    @Autowired
    private MusicaService musicaService;


    /*Metodo para postear con musica

    {
        "musicaName":"UN STRING",
        "musicaAdress":"UN STRING",
        "musicaStarts":"aaaa/mm/dd",
        "musicaEnds":"aaaa/mm/dd",
        "musicaAge": INT,
        "musicaLink":"UN STRING"
    }
     */

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Musica musica) {
        return ResponseEntity.status(HttpStatus.CREATED).body(musicaService.save(musica));
    }

    //Metodo para obtener todos los barres con su correspondiente info de la database
    @GetMapping
    public List<Musica> readAll() {
        List<Musica> barRes = StreamSupport
                .stream(musicaService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return barRes;
    }

    //Metodo para obtener la informacion de un barres dada su id
    @GetMapping("/{id}")
    public ResponseEntity<?> read (@PathVariable UUID id) {
        Optional<Musica> oMusica = musicaService.findById(id);

        if (!oMusica.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(oMusica);
    }

    /*Metodo para editar un bar/res existente

    {
        "tObraName": "[STRING]",
        "tObraAdress": "[STRING]",
        "tObraStarts": "DIA-MES-AÑO",
        "tObraEnds": "DIA-MES-AÑO",
        "tObraAge": "[INTEGER]",
        "tObraLink": "[STRING]"
    }
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> update (@RequestBody Musica musicaDetails, @PathVariable UUID id) {
        Optional<Musica> musica = musicaService.findById(id);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        if (!musica.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        musica.get().setmMusicaName(musicaDetails.getmMusicaName());
        musica.get().setmMusicaAdress(musicaDetails.getmMusicaAdress());
        musica.get().setmMusicaStarts(LocalDate.parse(musicaDetails.getmMusicaStarts(), formatter));
        musica.get().setmMusicaEnds(LocalDate.parse(musicaDetails.getmMusicaEnds(), formatter));
        musica.get().setmMusicaAge(musicaDetails.getmMusicaAge());
        musica.get().setmMusicaLink(musicaDetails.getmMusicaLink());

        return ResponseEntity.status(HttpStatus.CREATED).body(musicaService.save(musica.get()));
    }

    //Elimina un barres basandose en su id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable UUID id) {
        if (!musicaService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        musicaService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
