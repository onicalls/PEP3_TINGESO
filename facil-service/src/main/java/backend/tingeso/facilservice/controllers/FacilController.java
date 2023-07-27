package backend.tingeso.facilservice.controllers;

import backend.tingeso.facilservice.entities.FacilEntity;
import backend.tingeso.facilservice.services.FacilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/addProblema")
    public String agregarProblema(@RequestParam("enunciado") String enunciado,
                                  @RequestParam("codigo") String codigo,
                                  @RequestParam("respuesta") String respuesta) {
        facilService.guardarProblema(enunciado,codigo,respuesta);
        return "redirect:/";
    }


}
