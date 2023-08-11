import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: 'resume-page.component.html',
  styleUrls: ['resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  pdfUrl = '../../assets/resume.pdf';

  constructor() { }

  ngOnInit() { }

  loadPDF() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'resume.pdf'; // Указываем имя файла для загрузки
    link.target = '_blank'; // Открываем в новой вкладке (опционально)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
