package backend.tingeso.intermedioservice.controllers;

import backend.tingeso.intermedioservice.entities.FacilEntity;
import backend.tingeso.intermedioservice.services.FacilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/facil")
public class FacilController {
    @Autowired
    FacilService facilService;

    @GetMapping
    public ResponseEntity<ArrayList<FacilEntity>> listadoProblemas(){
        ArrayList<FacilEntity> listaProblemas = facilService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
}
