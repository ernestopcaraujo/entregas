using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.Domain.Models
{
    public class NotasMateria
    {
        public int Id { get; set; }    

        public virtual Materia Materia { get; set; }

        public Materia MateriaId {get; set;}

        public virtual Boletim Boletim {get; set;}

        public Boletim BoletimId {get; set;}

        public double Nota {get; set;}
    }
}