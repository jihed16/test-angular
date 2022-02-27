import { Component, OnInit } from '@angular/core';
import  { NgForm } from '@angular/Forms';
import { User } from './user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public user: User = new User();
 
  constructor() { }

  ngOnInit(): void {
  }
 public saveData(profilForm: NgForm){
  console.log(profilForm.form);
  console.log('valeurs: ', JSON.stringify(profilForm.value));
  console.log("hello");
 }
}
