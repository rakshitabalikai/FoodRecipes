import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  imports: [NgFor],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})

export class InstructionsComponent {
  recipe = {
    title: 'Sweet apple squares',
    subtitle: 'With cinnamon and thyme',
    rating: 4,
    servings: 2,
    time: '15 minutes',
    ingredients: [
      '100 ml milk',
      '50 g butter',
      '3 eggs',
      '1 tbs cocoa',
      '2 tsp baking soda',
      'a pinch of salt',
      '3 eggs'
    ],
    directions: [
      'Nunc nulla velit, feugiat vitae ex quis, lobortis porta leo.',
      'Donec dictum lectus in ex accumsan sodales. Pellentesque habitant morbi tristique.',
      'Repeat previous step as needed.',
      'Habitat morbi tristique. Donec dictum lectu.',
      'Final step with style and flavor!'
    ]
  };
}
