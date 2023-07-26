package backend.tingeso.intermedioservice.services;

import backend.tingeso.intermedioservice.entities.IntermedioEntity;
import backend.tingeso.intermedioservice.repositories.IntermedioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IntermedioService {
    @Autowired
    private IntermedioRepository facilRepository;

    public ArrayList<IntermedioEntity> obtenerData(){
        return (ArrayList<IntermedioEntity>) facilRepository.findAll();
    }
}
