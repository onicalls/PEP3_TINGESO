package backend.tingeso.intermedioservice.entities;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "intermedio")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class IntermedioEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
