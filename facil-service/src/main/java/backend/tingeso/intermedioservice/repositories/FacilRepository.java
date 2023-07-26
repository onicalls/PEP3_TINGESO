package backend.tingeso.intermedioservice.repositories;

import backend.tingeso.intermedioservice.entities.FacilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilRepository  extends JpaRepository<FacilEntity, Integer> {
}
