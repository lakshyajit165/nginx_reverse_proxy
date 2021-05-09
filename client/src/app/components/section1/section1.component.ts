import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  server1Data = '';
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getServer1Data().subscribe(res => {
      this.server1Data = res["message"];
    })
   }

  ngOnInit(): void {
  }

}
