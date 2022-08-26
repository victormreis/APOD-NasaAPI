import { Component, OnInit } from '@angular/core';
import { PictureServiceService } from 'src/app/service/picture-service.service';

const reg = /^[a-zA-Z0-9.-_]+$/;

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  data!: string
  imageUrl: string = ''

  isLoading = false

  txtBtn: string = 'Buscar'

  dateLimit = 19950616

  now: string = new Date().toISOString().slice(0, 10);

  error = false


  constructor(private service: PictureServiceService) { }

  ngOnInit(): void {
    this.requestPicture()
  }

  requestPicture() {
    this.service.getPicTheDay().subscribe((resp) => {
      this.data = resp.date
      this.imageUrl = resp.url
    })

  }

  getpicByDay(date: string) {
    this.service.getPicByDate(date).subscribe({
      next: (resp) => {
        this.imageUrl = resp[0].url
        this.data = resp[0].date
        this.isLoading = !this.isLoading
        this.alterTxtBtn()
        this.error = false
      },
      error: (erro) => {
        this.error = true
        this.imageUrl = 'http://data.pixiz.com/output/user/frame/preview/api/big/6/9/8/5/3255896_150dd.jpg'
        this.isLoading = !this.isLoading
        this.alterTxtBtn()
      }

    })


  }

  requestPictureByDay(date: string) {
    let teste = (this.data.replace('-', ''))
    let teste2 = Number(teste.replace('-', ''))


    if (teste2 < this.dateLimit) {
      this.requestPicture()
      alert('Desculpe a Api não existia nesta epóca tente uma data válida!')
      this.data = this.now
    } else {

      this.isLoading = !this.isLoading
      this.alterTxtBtn()
      date = this.data
      this.getpicByDay(date)
    }
  }

  alterTxtBtn() {
    if (this.isLoading == false) {
      this.txtBtn = 'Buscar'
    }
    else {
      this.txtBtn = 'Carregando'
    }
  }


}