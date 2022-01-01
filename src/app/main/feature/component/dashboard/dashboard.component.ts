import { Component, OnInit } from '@angular/core';
import {LiveScoreModel} from '../model/liveScore.model';
import {FormBuilder} from '@angular/forms';
import {UsersService} from '../service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  liveScoreModelList: LiveScoreModel[] = new Array();
  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getLiveScore();
  }


  public getLiveScore() {
    this.liveScoreModelList = [];
    this.userService.getLiveScore(0).subscribe(res => {

      this.liveScoreModelList.push(res);
      res.scoreResponseList.forEach((itemList: any) => {
        console.log(itemList);
        this.liveScoreModelList.push(itemList);
      });
    });
  }

  onKey(newValue: any){
    this.liveScoreModelList = [];
    this.userService.getLiveScoreSearchListData(0, newValue.target.value).subscribe(res => {
      this.liveScoreModelList.push(res);
      res.scoreResponseList.forEach((itemList: any) => {
        console.log(itemList);
        this.liveScoreModelList.push(itemList);
      });
    });
  }


}
