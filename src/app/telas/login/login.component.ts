import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formulario : FormGroup;

  hide = true; // Password visibility toggle

  yourFormControl = new FormControl('');
  

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,
    private authService:AuthService, private route:Router) {

   }
  ngOnInit(): void {
    console.log(this.authService.isAuthenticated())
    if(this.authService.isAuthenticated){
      this.route.navigate(["/pagina-inicial"])
    }

    this.formulario =  this.formBuilder.group({
      usuario: [null,[Validators.email,Validators.required]],
      senha: [null,[Validators.required]],
      lembreMe:[false]
    })

    const usuarioSalvo = this.localStorage.buscarItemLocalStorage("usuario");
    const senhaSalva = this.localStorage.buscarItemLocalStorage("senha")
    const lembreMe = this.localStorage.buscarItemLocalStorage("lembreMe")
    if(usuarioSalvo && senhaSalva){
      this.formulario.get("usuario").setValue(usuarioSalvo)
      this.formulario.get("senha").setValue(senhaSalva)
      this.formulario.get("lembreMe").setValue(lembreMe)
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  login(){

    const formData = {
      usuario: this.formulario.get('usuario').value,
      senha: this.formulario.get('senha').value,
      lembreMe: this.formulario.get('lembreMe').value
    };

    if (formData.lembreMe === true || formData.lembreMe === 'true') {
      this.localStorage.salvarItemLocalStorage('usuario', formData.usuario);
      this.localStorage.salvarItemLocalStorage('senha', formData.senha);
      this.localStorage.salvarItemLocalStorage('lembreMe', formData.lembreMe);
    } else {
      this.localStorage.deletarItemLocalStorage('usuario');
      this.localStorage.deletarItemLocalStorage('senha');
      this.localStorage.deletarItemLocalStorage('lembreMe');
    }

    this.authService.logar(JSON.stringify(formData)).subscribe(
      result => {
        this.localStorage.salvarItemLocalStorage("token",result.token)
        window.location.reload();
      }
    )
  }
}
