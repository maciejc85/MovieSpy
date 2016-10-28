import { Component, Input } from '@angular/core';


@Component({
  selector: 'user',
  templateUrl: 'app/components/user/user.html',
  styleUrls: ['app/components/user/user.css']
})
export class UserComponent {

  constructor() { }

  states = ['NJ', 'NY'];
  user = new User();

}


export class User {
  address: Address;
  email: string;
  phone: string;
}

export class Address {
  address1: string;
  address2: string;
  address3: string;
  state: string;
  zip: number;
}