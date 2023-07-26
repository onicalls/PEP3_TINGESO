package backend.tingeso.intermedioservice.repositories;

import backend.tingeso.intermedioservice.entities.IntermedioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntermedioRepository  extends JpaRepository<IntermedioEntity, Integer> {
}
