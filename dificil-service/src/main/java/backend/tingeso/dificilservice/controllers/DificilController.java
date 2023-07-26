package backend.tingeso.dificilservice.controllers;

import backend.tingeso.dificilservice.entities.DificilEntity;
import backend.tingeso.dificilservice.services.DificilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/dificil")
public class DificilController {
    @Autowired
    DificilService dificilService;

    @GetMapping
    public ResponseEntity<ArrayList<DificilEntity>> listadoProblemas(){
        ArrayList<DificilEntity> listaProblemas = dificilService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
}
