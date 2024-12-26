import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { MobileHeaderComponent } from "../../features/mobile-header/mobile-header.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, MobileHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
