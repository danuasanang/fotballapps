import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-ligue1',
  templateUrl: './ligue1.page.html',
  styleUrls: ['./ligue1.page.scss'],
})
export class Ligue1Page implements OnInit {

  public result : any;

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit():void{
  fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=French%20Ligue%201`).then(res => res.json()).then(json=>{
      this.result = json.teams;
      console.log(json);
    });
  }

}
