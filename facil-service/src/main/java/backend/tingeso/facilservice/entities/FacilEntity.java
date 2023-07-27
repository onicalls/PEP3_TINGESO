package backend.tingeso.facilservice.entities;


import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "facil")
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FacilEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String enunciado;
    private String codigo;
    private String respuesta;

    public FacilEntity(String enunciado, String codigo, String respuesta) {
        this.enunciado = enunciado;
        this.codigo = codigo;
        this.respuesta = respuesta;
    }
}
