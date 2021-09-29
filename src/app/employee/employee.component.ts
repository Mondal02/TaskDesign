import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // @Input()
  // vertical: boolean | undefined;

  data = [
    {
      id: 'IDRF 38902',
      applicationNo: '15',
      application: ' New Applications',
      title: 'Sr Java developer',
      place: 'Kolkata, Mumbai, Pune',
      recom: '12 Erica Recommendations',
      teams: 'Hiring Teams',
      imgOne: '../assets/img/table-profile-pic.png',
      imgTwo: '../assets/img/table-profile-pic-four.png',
      imgThree: '../assets/img/table-profile-pic-three.png',
      tat:'TAT',
      tatVal:'54',
    }
    // {
    //   id: 'IDRF 48902',
    //   applicationNo: '15',
    //   application: ' New Applications',
    //   title: 'Python developer',
    //   place: 'Kolkata, Mumbai, Pune',
    //   recom: '12 Erica Recommendations',
    //   teams: 'Hiring Teams',
    //   imgOne: '../assets/img/table-profile-pic.png',
    //   imgTwo: '../assets/img/table-profile-pic-four.png',
    //   imgThree: '../assets/img/table-profile-pic-three.png',
    //   tat:'TAT',
    //   tatVal:'67'
    // }
  ]

  date: any;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date()
  }

  stats = [
    { value: 45, label: 'Source' },
    { value: 35, label: 'Screen' },
    { value: 30, label: 'Interview' },
    { value: 20, label: 'Offer' },
    { value: 10, label: 'Hired' }
  ];
  

  getColor(label: string): string {
    switch (label) {
      case 'Source':
        return '#865cd9';
      case 'Screen':
        return '#ffae00';
      case 'Interview':
        return '#360afe';
      case 'Offer':
        return '#ff5900';
      case 'Hired':
        return '#00a700';
      
      default:
        return '';
    }
  }
}
