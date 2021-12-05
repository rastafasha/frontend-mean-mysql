import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo={
    id:'',
    nombre:'',
    logo:''
  }

  constructor(
    private equipoService:EquipoService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada = this.activeRoute.snapshot.paramMap.get('id')
    console.log('id de entrada:' +id_entrada);

    if(id_entrada){
      this.equipoService.getUnEquipo(id_entrada).subscribe(
        (res:any)=>{
          this.equipo = res[0];
          console.log(res[0]);
        }
      )
    }
  }

  modificar(){
    this.equipoService.modificarEquipo(this.equipo.id, this.equipo).subscribe(
      res=>{
        console.log(res);
      }
    );
    this.router.navigate(['/inicio']);
  }

}
