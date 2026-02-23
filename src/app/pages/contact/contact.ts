import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contacts = [
    {
      id: 1,
      logo: './assets/email.png',
      label: 'Email',
      value: 'agnellogiulio@yahoo.com',
      href: 'mailto:agnellogiulio@yahoo.com',
    },
    {
      id: 2,
      icon: 'WhatsApp',
      label: 'WhatsApp',
      value: '+39 3271208496',
      href: 'https://wa.me/393271208496',
    },
    {
      id: 3,
      icon: 'GitHub',
      label: 'GitHub',
      value: '@GiulioAgnello',
      href: 'https://github.com/GiulioAgnello',
    },
    {
      id: 4,
      icon: 'LinkedIn',
      label: 'LinkedIn',
      value: 'Giulio Agnello',
      href: 'https://www.linkedin.com/in/giulio-agnello/',
    },
    {
      id: 5,
      icon: 'Instagram',
      label: 'Instagram',
      value: '@giulioagnello',
      href: 'https://www.instagram.com/giulioagnello?igsh=d2R1aWZ6aHd0bTUw&utm_source=qr',
    },
    {
      id: 6,
      icon: 'Facebook',
      label: 'Facebook',
      value: '@giulio.agnello.1',
      href: 'https://www.facebook.com/giulio.agnello.1/',
    },
  ];

  getIconClass(contact: any): string {
    const iconMap: { [key: string]: string } = {
      Email: 'fa-solid fa-envelope',
      WhatsApp: 'fa-brands fa-whatsapp',
      GitHub: 'fa-brands fa-github',
      LinkedIn: 'fa-brands fa-linkedin',
      Instagram: 'fa-brands fa-instagram',
      Facebook: 'fa-brands fa-facebook',
    };
    const label = contact.label || contact.icon;
    return iconMap[label] || 'fa-solid fa-link';
  }

  interests = [
    'Sviluppo web',
    'Intelligenza artificiale',
    'Design UI/UX',
    'Tecnologie emergenti',
    'Open source',
  ];
}
