import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Branch {
  id: number;
  name: string;
  county: string;
  address: string;
  phone: string;
  hours: string;
  fleet: string;
  status: string;
  mapSrc: SafeResourceUrl;
}

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formSent = false;

  form: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  activeBranch = 0;

  branches: Branch[];

  constructor(private sanitizer: DomSanitizer) {
    this.branches = [
      {
        id: 0,
        name: 'Craiova — Central',
        county: 'Dolj County, Romania',
        address: '128 Calea București St., Craiova',
        phone: '+40 251 100 200',
        hours: 'Mon – Sun: 08:00 – 22:00',
        fleet: 'Fleet: 24 vehicles available',
        status: 'Open now',
        mapSrc: this.safe(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11512.6!2d23.7959!3d44.3302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40509b958a2e0c6f%3A0x3f2d3d9b5e4b4cdd!2sCraiova%2C+Romania!5e1!3m2!1sro!2sro!4v1700000000000'
        ),
      },
      {
        id: 1,
        name: 'Craiova — Airport',
        county: 'Dolj County, Romania',
        address: 'Craiova Airport, DN 6 km 228',
        phone: '+40 251 100 300',
        hours: 'Daily: 06:00 – 23:00',
        fleet: 'Fleet: 18 vehicles available',
        status: 'Open now',
        mapSrc: this.safe(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11512.6!2d23.8890!3d44.3182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40509c7c7b0e4a4b%3A0x1c2e3d4f5a6b7c8d!2sCraiova+Airport!5e1!3m2!1sro!2sro!4v1700000000001'
        ),
      },
      {
        id: 2,
        name: 'Bucharest — Otopeni',
        county: 'Ilfov County, Romania',
        address: '255 București–Ploiești Hwy, Otopeni',
        phone: '+40 21 200 300',
        hours: 'Daily: 05:30 – 00:30',
        fleet: 'Fleet: 41 vehicles available',
        status: 'Open now',
        mapSrc: this.safe(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11512.6!2d26.0850!3d44.5722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202065b66b56d%3A0x5a7a52d5d4e4c0a0!2sHenri+Coanda+International+Airport!5e1!3m2!1sro!2sro!4v1700000000002'
        ),
      },
      {
        id: 3,
        name: 'Timișoara',
        county: 'Timiș County, Romania',
        address: '14 Circumvalațiunii St., Timișoara',
        phone: '+40 256 100 400',
        hours: 'Mon – Fri: 08:00 – 20:00 · Sat: 09:00 – 16:00',
        fleet: 'Fleet: 15 vehicles available',
        status: 'Open now',
        mapSrc: this.safe(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11512.6!2d21.2087!3d45.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567ca7e5e4a7b%3A0x3d0a2b5c4e6f7a8b!2sTimișoara%2C+Romania!5e1!3m2!1sro!2sro!4v1700000000003'
        ),
      },
    ];
  }

  get activeBranchData(): Branch {
    return this.branches[this.activeBranch];
  }

  selectBranch(index: number): void {
    this.activeBranch = index;
  }

  submitForm(): void {
    this.formSent = true;
    setTimeout(() => {
      this.formSent = false;
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      };
    }, 4000);
  }

  private safe(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}