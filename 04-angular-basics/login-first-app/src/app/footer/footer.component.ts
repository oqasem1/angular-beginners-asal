import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public date = new Date();
public message ="*999*";
  constructor() { }

  ngOnInit(): void {
  }
  sayHello(){
    return 'Hello World'
  }

}
