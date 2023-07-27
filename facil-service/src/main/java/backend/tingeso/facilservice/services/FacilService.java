package backend.tingeso.facilservice.services;

import backend.tingeso.facilservice.entities.FacilEntity;
import backend.tingeso.facilservice.repositories.FacilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class FacilService {
    @Autowired
    private FacilRepository facilRepository;

    public ArrayList<FacilEntity> obtenerData() {
        return (ArrayList<FacilEntity>) facilRepository.findAll();
    }

    public void guardarProblema(String enunciado, String codigo, String respuesta) {
        FacilEntity pregunta = new FacilEntity(enunciado, codigo, respuesta);
        facilRepository.save(pregunta);
    }
}