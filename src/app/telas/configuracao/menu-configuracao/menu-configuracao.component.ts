import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu-configuracao',
  templateUrl: './menu-configuracao.component.html',
  styleUrls: ['./menu-configuracao.component.css']
})
export class MenuConfiguracaoComponent implements OnInit{
  constructor(private dataService:DataService){}

  ngOnInit(): void {
    console.log(this.dataService.getData())
  }

}
