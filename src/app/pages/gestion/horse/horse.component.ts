import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Horse } from 'src/app/model/horse/horse';
import { Sexe } from 'src/app/model/sexe/sexe';

const parseJSON = (resp: any) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp: any) => {
    throw resp;
  });
};

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {

  horses: Array<Horse> = [];
  error = null;

  constructor() { }

  async ngOnInit() {
    try {
      const horses = await fetch(environment.apiURL+'/api/horses?populate=*', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      for(let horse of horses.data){
        console.log(horse);
        let horseTemp = new Horse;
        // console.log(horse);
        horseTemp.id = horse['id'];
        horseTemp.name = horse['attributes']['name'];
        horseTemp.race = horse['attributes']['race'];
        horseTemp.image = environment.apiURL + horse['attributes']['image']['data']['attributes']['url'];
        horseTemp.sexe = horse['attributes']['sexe'];
        horseTemp.birthdate = formatDate(new Date(horse['attributes']['birthdate']));
        horseTemp.entree = formatDate(new Date(horse['attributes']['date_entree']));

        this.horses.push(horseTemp);
      }
      // console.log(this.horses);
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
  }

}
function formatDate(date: Date): string{
  let formatedDate = "";

  formatedDate += ("0"+date.getDate()).slice(-2);
  formatedDate += "/";
  formatedDate += ("0"+(date.getMonth()+1)).slice(-2);
  formatedDate += "/";
  formatedDate += date.getFullYear();

  return formatedDate;
}