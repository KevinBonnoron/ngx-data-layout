import { Injectable, signal } from '@angular/core';
import { Character } from '../../models';

const CHARACTERS: Character[] = [
  { id: 1, name: 'Homer Simpson' },
  { id: 2, name: 'Marge Simpson' },
  { id: 3, name: 'Bart Simpson' },
  { id: 4, name: 'Lisa Simpson' },
  { id: 5, name: 'Maggie Simpson' },
  { id: 6, name: 'Abrahams Simpson' },
  { id: 7, name: 'Montgomery Burns' },
  { id: 8, name: 'Waylon Smithers' },
  { id: 9, name: 'Ned Flanders' },
  { id: 10, name: 'Moe Szyslak' },
];

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private readonly characters = signal<Character[]>([]);

  constructor() {
    // Faking api delay
    setTimeout(() => this.characters.set(CHARACTERS), 200);
  }

  getAll() {
    return this.characters;
  }

  remove(character: Character) {
    const index = CHARACTERS.indexOf(character);
    if (index > -1) {
      CHARACTERS.splice(index, 1);
    }
  }
}