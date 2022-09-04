import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  // Méthode qui ajoute un produit à un tableau items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Méthode qui collecte les articles que les utilisateurs ajoutent au panier et renvoie chaque article avec sa quantité associée
  getItems() {
    return this.items;
  }
  
  //Méthode qui renvoie un tableau vide d'éléments ce qui vide le panier
  clearCart() {
    this.items = [];
    return this.items;
  }


  constructor() { }
}
