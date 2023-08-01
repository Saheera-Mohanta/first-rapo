import { Component } from '@angular/core';
import { Users } from '../users';
import { EnrollmentService } from 'src/app/enrollment.service';


@Component({
  selector: 'app-trackvalidform',
  templateUrl: './trackvalidform.component.html',
  styleUrls: ['./trackvalidform.component.scss']
})
export class TrackvalidformComponent {

  topics=['angular','react','vue'];
  topicHasError=true;

  userModel = new Users('','saheerr@.com',9768222866,'default','morning',true);
  constructor(private _enrollmentService: EnrollmentService ){}
  validateTopic(value:any){
    if (value === 'default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success',data),
        error => console.error('Error', error)
        )
    
  }

}
