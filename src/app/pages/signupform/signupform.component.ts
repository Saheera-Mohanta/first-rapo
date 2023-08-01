import { Component } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent {
  topics=['angular','react','vue'];

  userModel = new Users('saheera','saheerr@.com',676873454348,'','morning',true);

}
