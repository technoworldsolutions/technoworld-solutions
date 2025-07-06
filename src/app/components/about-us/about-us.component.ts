// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Import for *ngIf, *ngFor
// import { FormsModule } from '@angular/forms';   // For ngModel binding

// @Component({
//   selector: 'app-about-us',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './about-us.component.html',
//   styleUrl: './about-us.component.scss'
// })
// export class AboutUsComponent {

// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // For ngModel binding

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  // Services offered by the company
  services = [
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/8615/8615319.png',
      title: 'Laser Cutting',
      description: `Powered by cutting-edge CNC laser technology, our facility offers:
        <ul>
          <li>Micron-level precision for intricate cuts and tight tolerances</li>
          <li>Clean, smooth edges with minimal post-processing which delivers professional-grade finish</li>
          <li> High repeatability and efficiency: Ideal for both prototypes and large production runs</li>
        </ul>
      We laser-cut:
        <ul>
          <li>Safety Doors</li>
          <li>Sliding Gates</li>
          <li>Windows</li>
          <li>Grills</li>
          <li>Metal Frames</li>
          <li>Decorative Jali panels</li>
          <li>And anything your imagination designs!</</li>
        </ul>`
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/5202/5202461.png',
      title: 'Custom Fabrication',
      description: `We design, fabricate, and install a variety of metal works, including:
        <ul>
          <li>Safety Doors</li>
          <li>Sliding Gates</li>
          <li>Windows Grills</li>
          <li>Grills</li>
          <li>Metal Frames</li>
          <li>Decorative Jali panels</li>
          <li> And more bespoke items tailored to your needs</li>
        </ul>
      Our team blends craftsmanship with technical know-how to transform raw metal into architectural and functional masterpieces.`
    },
  ];


  // Mission and vision text
  missionVisionData = [
    {
      title: '🎯Our Mission',
      description: `At the heart of TechnoWorld Solutions lies a single goal: deliver superior precision and unwavering quality. Whether you need sturdy gates for industrial use or aesthetic grilles for home décor, we ensure every piece reflects our commitment to durability, aesthetics, and safety.`
    },
    {
      title: '🌟Your Vision, Our Expertise',
      description: ` With TechnoWorld Solutions, your ideas are brought to life through:
      <ul>
        <li>Precision Engineering</li>
        <li>Aesthetic Customization </li>
        <li>Seamless Installation</li>
      </ul>
    `
    },
    {
      title: '🔍Why Choose Us?',
      description: `
      <ul>
        <li>Cutting-edge Equipment</li>
        <li>Skilled Craftsmanship</li>
        <li>Customized Solutions</li>
        <li>Uncompromising Quality & Safety</li>
        <li>Everything under one roof!</li>
      </ul>
    `
    },
    {
      title: '📞Let’s Build Together',
      description: `Whether you’re safeguarding a home, enhancing a workspace, or adding elegance to your surroundings, TechnoWorld Solutions offers craftsmanship you can trust. Reach out today to discuss your project and request a quote-let’s create something exceptional together.`
    }
  ];

  // Team member profiles
  teamMembers = [
    {
      name: 'Mr. Nivrutti Sukdeo Borse',
      position: 'Our Inspiration',
      photo: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751484997/Pi7_Passport_Photo_3_vjuidz.jpg'
    },
    {
      name: 'Mr. Ravindra Nivrutti Borse',
      position: 'Founder and Owner',
      contact: '📞+91 7767081367',
      photo: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751390385/Pi7_Passport_Photo_y4dxlp.jpg'
    },
  ];
}

