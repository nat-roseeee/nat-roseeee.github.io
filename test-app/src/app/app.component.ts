import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  public selectedList: string[] = [];
  public randomrestaurant = "";
  public oldrestaurant = ""

  options = [
    {value:"default", list:[""]},
    {value:"dinky", list: ["Banh Appetit", "JJ's Poke", "Wally's", "Frank & Andrea's Pizza", "Shuang Cheng", "Pho Mai", "Burrito Loco", "D.P Dough"]},
    {value:"sv", list: ["Bona", "Afro Deli", "Stubs and Herbs", "My Burger"]},
    {value:"pizza", list: ["Davani's", "Punch Pizza", "Pizza Luce", "Blaze Pizza", "Domino's", "Red Rabbit", "D.P.Dough"]},
    {value:"chains", list: ["Jimmy John's", "Qdoba", "Chipotle", "Pancheros", "Noodles and Company", "Raising Cane's", "Jersey Mike's", "Domino's", "Potbelly", "Five Guys"]},
    {value:"coffee/tea", list: ["Mu Mu Tea", "Kung Fu Tea", "Starbucks", "Gray's", "Bordertown", "Surdyks", "Dogwood", "Caribou Coffee", "Dunkin Donuts"]},
    {value:"brekkie", list: ["Black Coffee and Waffle Bar", "Bruegger's Bagels", "Birchwood", "Wise Acre"]},
    {value:"pizzaMan", list: ["Heights Pizza Man", "Pizza Man", "Columbia Heights Pizza Man", "Pizza Man Columbia Heights"]}
  ]

  public getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  
  public onSelected(selectedValue:string): void {
    for (let i=0; i<this.options.length; i++) {
      if(this.options[i].value == selectedValue)
        this.selectedList = this.options[i].list;
    }
    if (selectedValue = "default") {
      this.randomrestaurant = "";
    }
  }

  public generateRand(selectedList:string[]): void {
    this.randomrestaurant = this.selectedList[Math.floor(Math.random() * this.selectedList.length)];
    if(this.randomrestaurant == this.oldrestaurant){
      this.generateRand(selectedList);
    }
    this.oldrestaurant = this.randomrestaurant;
  }


}
