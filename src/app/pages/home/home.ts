import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { TechCarouselComponent } from '../../components/tech-carousel/tech-carousel';
@Component({
  selector: 'app-home',
  imports: [Hero, Features, TechCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
