import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AJS';
  mail: any = [
    {name: 'Germa Roberson',
      tittle: 'Apology for late response email',
      content: 'Hello Colette Wooten'
    },
    {name: 'Ann Garza',
      tittle: 'Application for Job Tittle',
      content: 'Hello Kerry Best'
    },
    {name: 'Alfonso Burnett',
      tittle: 'Anything I can help with',
      content: 'Hello Otto Ashley'
    },
    {name: 'Rogan Espinoza',
      tittle: 'Assistant marketing department',
      content: 'Hello Kerry Best'
    },

    {name: 'Sierra Kerr',
      tittle: 'Application for transfer',
      content: 'Hi Halee Lindsey'
    }
  ]
}
