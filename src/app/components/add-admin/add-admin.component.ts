import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  id: any;
  title: any;
  user: any = {};
  addAdminForm: FormGroup;
  users: any;
  constructor(
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router:Router
  ) {}

  ngOnInit() {
    this.addAdminForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: [''],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //edit
      this.title = 'Edit User';

      this.userService.getUserId(this.id).subscribe((data) => {
        this.user = data.user;
      });
    } else {
      //add
      this.title = 'Ajouter un Administrateur';
    }
  }

  addAdmin() {
    if (this.id) {
      this.userService.updateUser(this.user).subscribe(
        (data) => {
        console.log(data.message);
        this.router.navigate([`admin/dash`])
      });
    } else {
      this.user.role = 'admin';

      this.userService.addUser(this.user).subscribe(
        (data) => {
        console.log(data.message);
      });
    }
  }
}
