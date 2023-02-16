import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigServiceService } from '../config-service.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { USERS } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

    users: User[] = [];
    displayedColumns: string[] = ['id', 'name'];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  openDialog(selectedUser: User): void{
    const dialogRef = this.dialog.open(UserDetailComponent, {data: selectedUser, width: '500px', height: '500px', disableClose: true});
  }

}
