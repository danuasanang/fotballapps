import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public result : any;
  public idTeam : any;
  public idLeague : any;

  // deskripsi tim
  public deskripsi : any;
  public liga : any;
  public born : any;
  public negara : any;
  public namaTim  = '';
  public stadium = '';
  public kapasitas : any;
  public fb : any;
  public ig : any;
  public rss : any;
  public twitter : any;
  public website : any;
  public yt : any;
  public picStadium : any;
  public logo : any;
  public jersey : any;
  public namaLain : any;


  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // tangkap idLiga dan idTeam di url
    let id = this.route.snapshot.paramMap.get('idTeam');
    let idLeague = this.route.snapshot.paramMap.get('idLeague');

    // url berdasarkan idLiga
    if(idLeague == "4328"){
      var url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=english%20premier%20league`;
    } else if( idLeague == "4334"){
      var url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=French%20Ligue%201`;
    } else if(idLeague == "4335"){
      var url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=spanish%20La%20liga`;
    } else if(idLeague =="4332"){
      var url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20serie%20a`;
    }

    // ambil data dari api
    fetch(url).then(res => res.json()).then(json=>{
    this.result = json.teams.find(team => team.idTeam === id);
    this.idLeague = this.result.idLeague;
    this.idTeam = this.result.idTeam;

    // variableDeskripsi
    this.namaTim = this.result.strTeam;
    this.born = this.result.intFormedYear;
    this.stadium = this.result.strStadium;
    this.deskripsi = this.result.strDescriptionEN;
    this.liga = this.result.strLeague;
    this.negara = this.result.strCountry;
    this.kapasitas = this.result.intStadiumCapacity;
    this.fb = this.result.strFacebook;
    this.ig = this.result.strInstagram;
    this.rss = this.result.strRSS;
    this.twitter = this.result.strTwitter;
    this.website = this.result.strWebsite;
    this.yt = this.result.strYoutube;
    this.picStadium = this.result.strStadiumThumb;
    this.logo = this.result.strTeamBadge;
    this.jersey = this.result.strTeamJersey;
    this.namaLain = this.result.strKeywords;

    console.log(this.result);
    });
  }

}
