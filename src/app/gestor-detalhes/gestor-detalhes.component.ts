import { Gestor } from '../Gestor';
import { Component, OnInit, Input } from '@angular/core';
import { GestorService } from '../gestor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestor-detalhes',
  templateUrl: './gestor-detalhes.component.html',
  styleUrls: ['./gestor-detalhes.component.css']
})
export class GestorDetalhesComponent implements OnInit {

  id: number;
  gestor: Gestor;

  constructor(private route: ActivatedRoute,private router: Router,
    private gestorService: GestorService) { }

  ngOnInit() {
    this.gestor = new Gestor();

    this.id = this.route.snapshot.params['id'];
    
    this.gestorService.getGestor(this.id)
      .subscribe(data => {
        console.log(data)
        this.gestor = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['gestores']);
  }
}