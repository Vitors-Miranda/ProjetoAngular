import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor() {}

  // Mudar o tema do site
  bgColor: string = "#0d0d0d"
  textColor: string = "#e6e6e6"
  iconTheme: string = "assets/icon/sun.png"

  numbers: string[] = ["(", ")", "0","1","2","3","4","5","6","7","8","9"]
  lengh: number[] = [0,1,2,3]
  icons: string[] = ["add-outline", "remove-outline", "close-outline", "pause-outline"]
  operations: string[] = ["+", "-", "*" ,"/"]
  formula: string = ""
  result: any = ""

  calculate (digit:any) {
    if(digit == "delete"){
      if(this.formula != "") this.formula = this.formula.slice(0,-1)
    } else {
      this.formula += digit
    }

    try {
      this.result = eval(this.formula)
    } catch (error) {
      this.result = this.result
    }
  }
  changeColor ():void{
    if(this.bgColor == "#0d0d0d"){
      this.bgColor = "#d9d9d9"
      this.textColor = "#0d0d0d"
      this.iconTheme = "assets/icon/moon.png"
    } else{
      this.bgColor = "#0d0d0d"
      this.textColor = "#d9d9d9"
      this.iconTheme = "assets/icon/sun.png"
    }
  }
}
