import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly profile = {
    name: 'Zuhi Alekhya Gubbala',
    email: 'alekhya.maddala23@gmail.com',
    phone: '+91 8143733331',
    location: 'Hyderabad'
  };

  readonly summary =
    'Professional with 5 years of experience in the financial and banking sector, including 3 years in Quality Assurance and 2 years in Loan Underwriting. Demonstrates strong expertise in KYC/AML compliance, including Customer Due Diligence (CDD), Enhanced Due Diligence (EDD), transaction monitoring, sanctions screening, and quality audits. Proficient in risk analysis and conflict resolution, with a strong commitment to confidentiality, regulatory compliance, and process integrity. Seeking a dynamic opportunity to leverage both technical knowledge and interpersonal skills to support organizational goals and drive professional growth.';

  readonly experience = [
    {
      company: 'Wells Fargo',
      period: 'Apr 2022 - till date',
      title: 'Quality Assurance Administrator',
      lob: 'CSBBO Risk programs',
      bullets: [
        'Conducted CDD/EDD and verified KYC documents to ensure AML compliance.',
        'Performed daily sanctions screening using GSMOS, LexisNexis, and Dow Jones tools to identify and assess potential matches against global watchlists.',
        'Monitored and analyzed high-risk transactions; submitted SARs and recommended investigations.',
        'Ensured up-to-date compliance with evolving AML/KYC regulations.',
        'Collaborated with compliance, legal, and risk teams on regulatory matters.',
        'Maintained detailed audit records and supported regulatory reviews.',
        'Performed quality checks, audits, and identified areas for process improvement.',
        'Trained staff on compliance and quality standards; led continuous improvement initiatives.',
        'Streamlined workflows, reduced errors, and improved operational efficiency.',
        'Generated error reports, conducted root cause analysis, and tracked performance metrics.',
        'Managed workflow volumes to meet processing timelines and service levels.'
      ]
    },
    {
      company: 'Wells Fargo',
      period: 'Mar 2020 - Apr 2022',
      title: 'Loan Documentation Specialist',
      lob: 'Underwriting Process',
      bullets: [
        'Analyze borrower financial documents (bank statements, W2s, pay stubs, etc.) to assess creditworthiness',
        'Update the Income Calculation Tool (ICT) and qualify borrowers based on DTI ratios.',
        'Review and update data fields in the CORE application triggered by missing information.',
        'Verify and resolve discrepancies in risk messages related to borrower data and loan applications.'
      ]
    }
  ] as const;

  readonly education = [
    {
      program: 'MBA',
      institute: 'Pulla Reddy institutions of computer science',
      year: '2019',
      score: '88%'
    },
    {
      program: 'Graduation B.com',
      institute: 'Acharya Nagarjuna University',
      year: '2017',
      score: '73%'
    },
    {
      program: 'Intermediate',
      institute: 'Masterminds Junior College',
      year: '2014',
      score: '93.2%'
    },
    {
      program: 'SSC',
      institute: "St. pious x girl’s high school",
      year: '2012',
      score: 'GPA 8.8 points'
    }
  ] as const;

  readonly skills = [
    'Attention to Detail',
    'Problem Solving',
    'Communication',
    'Collaboration',
    'Time Management',
    'Adaptability'
  ] as const;

  readonly hobbies = ['Cooking', 'Music', 'Traveling'] as const;

  readonly achievements = [
    'Received Champion award in the year 2021 for best performance',
    'Recognition for maintaining quality performance regularly and had zero errors till date',
    'Recognition for proposing idea project in loud speaker and got implemented.',
    'Received Spotlight award in the year 2023 for additional activities.'
  ] as const;

  readonly declaration =
    'I hereby declare that the information furnished above is true to the best of my knowledge.';

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
