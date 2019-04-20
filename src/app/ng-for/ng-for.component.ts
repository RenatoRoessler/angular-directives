import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    'Valmor',
    'Renato',
    'Dani',
    'Vanice'
  ];

  cidades = [
    {name: 'Sao Paulo', state: 'SP'},
    {name: 'Passo Fundo', state: 'RS'},
    {name: 'Caçapava', state: 'SC'},
    {name: 'Carazinho', state: 'RS'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
