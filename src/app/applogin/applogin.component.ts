import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class ApploginComponent implements OnInit {

  email: string;
  password: string;
  error?: string;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
    .then(res => {
      this.router.navigate(['/']);
    })
  }
}
