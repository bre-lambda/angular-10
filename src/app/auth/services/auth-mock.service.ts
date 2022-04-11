import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
  users: User[] = [
    {
      name: 'User One',
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'user1',
      gender: 'Male',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjEzN2M5NzhjZDlhYmI4NjQwNmI4ODciLCJuYW1lIjoiTWlja3kgRHJpdmVyIiwiZW1haWwiOiJzaGFuYmVsa2Fzc2ExMkBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrMjUxOTM0NTQwMjE3Iiwicm9sZSI6WyJEcml2ZXIiXSwiZmNtX2lkIjoiZERiQ0JpTXBSY082dWp2TUZPdzdMZzpBUEE5MWJGUHllR0FDRXVURk9sbDJZdXRBaWp3Vy0xZ2RPWGF6M1ZIY1NMQXlmbnlNM1VHaXVjZlZ5X3dKMjZhUFp5WVByeV9TTXNKT0JIdTRmUFBkcDYwa2xqMEdNaFVHS1A1QXduTE1PT1dISm9IOVkwNmdnTFJYanZtLWdrX2xBN0ZmNmp2SXpDUSIsInRvcGljcyI6W10sImlhdCI6MTY0Nzg2NDYxMCwiZXhwIjoxNjQ3OTUxMDEwfQ.E8uTNpZcs7_PXoLhRiCvqa6OjqpR9sNOwtg2oyWgP0o',
    },
    {
      name: 'User Two',
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'user2',
      gender: 'Male',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI46565hjZDlhYmI4NjQwNmI4ODciLCJuYW1lIjoiTWlja3kgRHJpdmVyIiwiZW1haWwiOiJzaGFuYmVsa2Fzc2ExMkBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrMjUxOTM0NTQwMjE3Iiwicm9sZSI6WyJEcml2ZXIiXSwiZmNtX2lkIjoiZERiQ0JpTXBSY082dWp2TUZPdzdMZzpBUEE5MWJGUHllR0FDRXVURk9sbDJZdXRBaWp3Vy0xZ2RPWGF6M1ZIY1NMQXlmbnlNM1VHaXVjZlZ5X3dKMjZhUFp5WVByeV9TTXNKT0JIdTRmUFBkcDYwa2xqMEdNaFVHS1A1QXduTE1PT1dISm9IOVkwNmdnTFJYanZtLWdrX2xBN0ZmNmp2SXpDUSIsInRvcGljcyI6W10sImlhdCI6MTY0Nzg2NDYxMCwiZXhwIjoxNjQ3OTUxMDEwfQ.E8uTNpZcs7_PXoLhRiCvqa6OjqpR9sNOwtg2oyWgP0o',
    },
    {
      name: 'User Three',
      username: 'user3',
      email: 'user3@gmail.com',
      password: 'user3',
      gender: 'Female',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy6542MjEzN2M5NzhjZDlhYmI4NjQwNmI4ODciLCJuYW1lIjoiTWlja3kgRHJpdmVyIiwiZW1haWwiOiJzaGFuYmVsa2Fzc2ExMkBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrMjUxOTM0NTQwMjE3Iiwicm9sZSI6WyJEcml2ZXIiXSwiZmNtX2lkIjoiZERiQ0JpTXBSY082dWp2TUZPdzdMZzpBUEE5MWJGUHllR0FDRXVURk9sbDJZdXRBaWp3Vy0xZ2RPWGF6M1ZIY1NMQXlmbnlNM1VHaXVjZlZ5X3dKMjZhUFp5WVByeV9TTXNKT0JIdTRmUFBkcDYwa2xqMEdNaFVHS1A1QXduTE1PT1dISm9IOVkwNmdnTFJYanZtLWdrX2xBN0ZmNmp2SXpDUSIsInRvcGljcyI6W10sImlhdCI6MTY0Nzg2NDYxMCwiZXhwIjoxNjQ3OTUxMDEwfQ.E8uTNpZcs7_PXoLhRiCvqa6OjqpR9sNOwtg2oyWgP0o',
    },
  ];
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  login(user: User): string {
    const u: User = this.users.find((usr) => {
      return usr.username === user.username && usr.password === user.password;
    });
    console.log(u);
    if (u) {
      localStorage.setItem('token', u.token);
      this.router.navigate(['students']);
      return u.token;
    } else {
      return 'unauthorized';
    }
  }
}
