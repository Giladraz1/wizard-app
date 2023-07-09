import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>(`${environment.apiBaseUrl}/users?_=${Date.now()}`).subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCheckedUsers() {
    const selectedUsers = this.users.filter((user) => user.selected);

    this.http
      .post(`${environment.apiBaseUrl}/users/delete`, selectedUsers)
      .subscribe(
        () => {
          this.fetchUsers();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  hasSelectedUsers() {
    return this.users.some((user) => user.selected);
  }
}








  // deleteSelectedUsers() {
  //   const selectedUsers = this.users.filter(user => user.selected);

  //   if (selectedUsers.length === 0) {
  //     return;
  //   }

  //   const ids = selectedUsers.map(user => user.id);

  //   this.http.delete(`${environment.apiBaseUrl}/users/${ids.join(',')}`).subscribe(
  //     () => {
  //       // Remove the deleted users from the local array
  //       this.users = this.users.filter(user => !user.selected);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../models/users.models';
// import { environment } from '../../environments/environment';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
//   users: User[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     this.http.get<User[]>(`${environment.apiBaseUrl}/users?_=${Date.now()}`).subscribe(
//       (users) => {
//         this.users = users;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   deleteSelectedUsers() {
//     const selectedUsers = this.users.filter(user => user.selected);

//     if (selectedUsers.length === 0) {
//       return;
//     }

//     const ids = selectedUsers.map(user => user.id);

//     this.http.post(`${environment.apiBaseUrl}/users/delete`, { ids: ids }).subscribe(
//       () => {
//         // Remove the deleted users from the local array
//         this.users = this.users.filter(user => !user.selected);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }
