import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo: Equipo={
    id:'',
    nombre:'',
    logo:''
  }

  constructor(
    private equipoService:EquipoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  agregar(){
   // delete this.equipo.id;
    this.equipoService.agregarEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
