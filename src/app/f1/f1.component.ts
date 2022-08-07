import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component implements OnInit {

  constructor(private api:ApiService) {
    api.viewfriends().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }
data:any=[]
  ngOnInit(): void {
  }

}
