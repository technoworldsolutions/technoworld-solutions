import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { JobDialogComponent } from './job-dialog.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  constructor(private dialog: MatDialog) { }

  benefits = [
    { iconUrl: 'https://cdn-icons-png.flaticon.com/128/12431/12431572.png', title: 'Team Culture', description: 'Collaborative and supportive environment.' },
    { iconUrl: 'https://cdn-icons-png.flaticon.com/128/18596/18596519.png', title: 'Appreciation', description: 'Recognizing that evryone is Valuable.' },
    { iconUrl: 'https://cdn-icons-png.flaticon.com/128/12669/12669293.png', title: 'Learning', description: 'Upskill with sponsored learning.' },
    { iconUrl: 'https://cdn-icons-png.flaticon.com/128/12454/12454413.png', title: 'Wellness', description: 'Healthcare and well-being support.' }
  ];

  jobList = [
    {
      title: 'Laser/Plasma cutting machine operator',
      department: 'Production',
      location: 'Chalisgaon, Dist. Jalgaon (MH)',
      type: 'Full-time',
      description: 'We are seeking a skilled and detail-oriented Laser/Plasma cutting machine operator to join our fabrication team. The ideal candidate will be responsible for setting up, operating, and maintaining computer-controlled metal cutting machine to produce high-quality parts according to design specifications.',
      responsibilities: `\n- Machine Operation.\n- Setup & Calibration.\n- Quality Control.\n`,
      requirements: '\n- Minimum 1–3 years of experience operating Laser/CNC/Plasma cutting machines.\n- Familiarity with operating software like AutoCAD, Nesting Software (e.g., SigmaNEST).\n- Good physical stamina (for standing, lifting sheets, etc.).'
    },
    {
      title: 'Fabrication Welder',
      department: 'Fabrication',
      location: 'Chalisgaon, Dist. Jalgaon (MH)',
      type: 'Full-time',
      description: 'We are looking for a Fabrication Welder with hands-on experience in reading fabrication drawings and welding metal components using welding techniques like, MIG, TIG, or Arc. The ideal candidate should be familiar with working on structural frames, gates, grills, machine parts, and custom fabrication jobs.',
      responsibilities: `\n- Welding and Fabrication.\n- Integrate third-party services.\n- Tool & Machine Operation.\n- Inspection & Quality.\n- Safety & Maintenance.\n`,
      requirements: '\n- ITI / Diploma in Welder Trade or equivalent practical training OR\n- 1–2 years of experience in welding and fabrication.\n- Experience in structural fabrication or industrial welding is preferred.\n- Ability to lift and handle metal sheets and fabricated assemblies.'
    },
    {
      title: 'Fabrication Helper',
      department: 'Fabrication',
      location: 'Chalisgaon, Dist. Jalgaon (MH)',
      type: 'Full-time',
      description: 'We are hiring a Fabrication Helper to support welders, machine operators, and fabricators in daily workshop activities. The ideal candidate should be physically fit, reliable, and willing to learn various fabrication tasks such as material handling, basic cutting, grinding, and cleanup.',
      responsibilities: `\n- Assist welders and fabricators during cutting, bending, and welding.\n- Load and unload raw materials like sheets, pipes, and bars.\n- Clean the workshop and welding areas daily.\n- Keep tools and equipment in order.\n- Clean and prepare metal surfaces before and after fabrication.\n`,
      requirements: '\n- 8th Pass / 10th Pass preferred.\n- Basic understanding of tools and workshop safety.\n- Physical strength to lift and carry heavy materials.\n- Willingness to learn and grow in fabrication trade.'
    }
  ];

  openJobDialog(job: any): void {
    this.dialog.open(JobDialogComponent, {
      width: '600px',
      data: job
    });
  }
}
