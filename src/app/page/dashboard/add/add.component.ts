import { ProfileService } from './../../../service/profile.service';
import { userPost } from './../../../model/userModel';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  newUser: userPost = { email: '', first_name: '', last_name:'', avatar: '' }
  constructor(private profileService: ProfileService, public ngModel: NgModel) {}

  createUser() {
    this.profileService.addUsers(this.newUser).subscribe((createdUser) => {
      console.log('User created succesfully', createdUser)
    }, error => {
      console.log('error')
    })
  }

}
