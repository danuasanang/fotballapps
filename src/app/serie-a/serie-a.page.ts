import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-a',
  templateUrl: './serie-a.page.html',
  styleUrls: ['./serie-a.page.scss'],
})
export class SerieAPage implements OnInit {

  public result : any;

  constructor(private router: Router,private route:ActivatedRoute) {}
  ngOnInit():void{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20serie%20a`).then(res => res.json()).then(json=>{
      this.result = json.teams;
      console.log(json);
    });
  }

}
