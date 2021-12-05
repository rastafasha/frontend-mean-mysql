import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from 'src/app/services/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListarEquipo: Equipo[] | undefined;

  constructor(
    private equipoService: EquipoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo(){
    this.equipoService.getEquipos().subscribe(
      res=>{
        console.log(res);
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    );
  }
  onDelete(id:string){
    this.equipoService.eliminarEquipo(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      }
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }


}
