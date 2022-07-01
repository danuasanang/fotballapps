import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public result : any;

  constructor(private router: Router,private route:ActivatedRoute) {}
  ngOnInit():void{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=english%20premier%20league`).then(res => res.json()).then(json=>{
      this.result = json.teams;
      console.log(json);
    });
  }
}
