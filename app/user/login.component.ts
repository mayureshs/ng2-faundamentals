import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: '<login></login>',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() { }

    login(formvalues) {
        // console.log(formvalues);
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}