import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  navItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  features: Feature[] = [
    {
      id: 1,
      title: 'Premium Quality',
      description: 'Every home is built with the finest materials and attention to detail, ensuring lasting quality and comfort.',
      icon: '⭐',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Community Focus',
      description: 'Join a vibrant community of neighbors who share your values and create lasting friendships.',
      icon: '👥',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Secure Living',
      description: 'Advanced security systems and gated communities ensure your family\'s safety and peace of mind.',
      icon: '🛡️',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  footerSections: FooterSection[] = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Privacy Policy']
    },
    {
      title: 'Connect',
      links: ['Newsletter', 'Social Media', 'Blog']
    }
  ];

  onGetStarted(): void {
    console.log('Get Started clicked');
    // Add your navigation logic here
  }

  onExploreHomes(): void {
    console.log('Explore Homes clicked');
    // Add your navigation logic here
  }

  onLearnMore(): void {
    console.log('Learn More clicked');
    // Add your navigation logic here
  }

  onStartJourney(): void {
    console.log('Start Journey clicked');
    // Add your navigation logic here
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
