import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private api:ApiService) { 
    

  }
  valueRead=()=>
  {
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    this.api.insertfriends(data).subscribe(
      (response)=>
      {
        console.log(response)
      }
    )
  }
name=""
friendName=""
friendNickName=""
DescribeYourFriend=""
  ngOnInit(): void {
  }

}
