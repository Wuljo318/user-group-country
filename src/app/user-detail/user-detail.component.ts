import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  @Input() user?: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.user = this.data;
    console.log(this.data.userId);
    console.log(this.user.userId);
  }

  getUser(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user == user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if (this.user){
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

}
