package backend.tingeso.dificilservice.repositories;

import backend.tingeso.dificilservice.entities.DificilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DificilRepository  extends JpaRepository<DificilEntity, Integer> {
}
