import { Injectable } from '@angular/core';
import {Projekt} from './projekt';
import{ProfessorenService} from '../professoren/professoren.service';
import{Beteiligt} from './beteiligt'

@Injectable()
export class ProjekteService {
index:number;
edit:boolean;
professoren=[];
  constructor(      private professorenService:ProfessorenService )
  {
  this.professoren=this.professorenService.output()}
              
//Den Professor will das Programm im "Default" leider nicht anzeigen aus mir unnerklärlichen Gründen
//Beim Hinzufügen der Proffesoren funktioniert das ganze aber ohne Probleme
beteiligter:string;
  projekte=[
    new Projekt("Grundlagen der Software-Entwicklung (451500)",
                "Sie verstehen den grundlegenden Ansatz der Objektorientierten Programmierung und können einfach Klassen mit Methoden, Datenfeldern und Eigenschaften in Form von Klassen- und Instanzmembern entwickeln und nutzen. Sie sind in der Lage, algorithmierbare Aufgabenstellungen in einzelne Teilaufgaben zu modularisieren und mittels graphischer Repräsentation darzustellen. Darüber hinaus können Sie daraus Code in der Programmiersprache C# entwickeln, testen und aus den entwickelten Modulen ein lauffähiges Programm erzeugen, welches die Aufgabenstellung löst. Auf Konsolenebene können Sie Dialoge zur Ein- und Ausgabe programmieren.",
                this.professoren[0],
                "Wirtschaftsinformatik")

  ]

  post={
    name:"",
    beschreibung:"",
    beteiligte: [], 
    bereich:""
  }

  
   onAddProject(){
     this.projekte.push(
       new Projekt(this.post.name,this.post.beschreibung,this.post.beteiligte,this.post.bereich)
     )
  this.post={
    name:"",
    beschreibung:"",
    beteiligte: [], 
    bereich:""
    

 
  }
  console.log(this.post.beteiligte)
   };
   onDelete(index:number){
     this.projekte.splice(index,1)
   }
   output(){
     return this.projekte;
   }
   onEdit(index:number){
    this.edit=true;
    this.post.name=this.projekte[index].name;
    this.post.beschreibung=this.projekte[index].beschreibung;
    this.post.beteiligte=this.projekte[index].beteiligte;
    this.post.bereich=this.projekte[index].bereich;
    this.index=index;
   }
   onEditProject(){
    this.projekte[this.index].name=this.post.name;
    this.projekte[this.index].beschreibung=this.post.beschreibung;
    this.projekte[this.index].beteiligte=this.post.beteiligte;
    this.projekte[this.index].bereich=this.post.bereich;
   
    this.edit=false;
    this.post={
    name:"",
    beschreibung:"",
    beteiligte: [], 
    bereich:""
    }
  }
  onAddMitglied(option:[])
  {
     this.post.beteiligte.push
     (
       option
       
     )  
    
  }
  ondeletebeteiligt(index:number){
this.post.beteiligte.splice(index,1)
  }
}

