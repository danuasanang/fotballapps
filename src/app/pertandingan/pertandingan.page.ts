import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-pertandingan',
  templateUrl: './pertandingan.page.html',
  styleUrls: ['./pertandingan.page.scss'],
})
export class PertandinganPage implements OnInit {
public result : any;
public idLeague : any;
public idTeam = this.route.snapshot.paramMap.get('idTeam');
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let url = 'https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id='.concat(this.route.snapshot.paramMap.get('idTeam'));
    fetch(url).then(res => res.json()).then(json=>{
      this.result = json.results;
      this.idLeague = this.result[0].idLeague;
      console.log(json);
    });
  }

}
