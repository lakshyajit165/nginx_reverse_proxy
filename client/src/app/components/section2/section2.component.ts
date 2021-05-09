import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  server2Data = '';
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getServer2Data().subscribe(res => {
      this.server2Data = res["message"];
    })
   }

  ngOnInit(): void {
  }

}
