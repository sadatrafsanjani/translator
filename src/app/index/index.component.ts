import {Component, OnInit} from '@angular/core';
declare function googleTranslator(): any;

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  ngOnInit(): void {
    googleTranslator();
  }

}
