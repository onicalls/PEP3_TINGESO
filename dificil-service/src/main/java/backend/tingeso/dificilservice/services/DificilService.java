package backend.tingeso.dificilservice.services;

import backend.tingeso.dificilservice.entities.DificilEntity;
import backend.tingeso.dificilservice.repositories.DificilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DificilService {
    @Autowired
    private DificilRepository dificilRepository;

    public ArrayList<DificilEntity> obtenerData(){
        return (ArrayList<DificilEntity>) dificilRepository.findAll();
    }
}
