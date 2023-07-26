package backend.tingeso.intermedioservice.controllers;

import backend.tingeso.intermedioservice.entities.IntermedioEntity;
import backend.tingeso.intermedioservice.services.IntermedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/intermedio")
public class IntermedioController {
    @Autowired
    IntermedioService intermedioService;

    @GetMapping
    public ResponseEntity<ArrayList<IntermedioEntity>> listadoProblemas(){
        ArrayList<IntermedioEntity> listaProblemas = intermedioService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
}
