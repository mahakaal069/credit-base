import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
    selector: 'app-material',
    standalone: true,
    imports: [CommonModule, MatSlideToggleModule, MatSliderModule],
    templateUrl: './material.component.html',
    styleUrl: './material.component.css'
})
export class MaterialComponent { }
