import { GestorDetalhesComponent } from '../gestor-detalhes/gestor-detalhes.component';
import { Observable } from "rxjs";
import { GestorService } from "../gestor.service";
import { Gestor } from "../Gestor";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-gestor-listar",
  templateUrl: "./gestor-listar.component.html",
  styleUrls: ["./gestor-listar.component.css"]
})
export class GestorListarComponent implements OnInit {
  gestores: Observable<Gestor[]>;

  constructor(private gestorService: GestorService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.gestores = this.gestorService.getGestoresList();
  }

  deleteGestor(id: number) {
    this.gestorService.deleteGestor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  GestorDetalhe(id: number){
    this.router.navigate(['detalhes', id]);
  }

  updateGestor(id: number) {
    this.router.navigate(['atualizar', id])
  }
}