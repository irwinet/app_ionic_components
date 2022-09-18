import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = []
  textoBuscar: string = ''

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(albumes => {
      console.log(albumes)
      this.albumes = albumes;
    });
  }

  onSearchChange(event: any){
    //console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
    //this.albumes = this.albumes.filter(album => album.title.includes(event.detail.value));
  }
}
