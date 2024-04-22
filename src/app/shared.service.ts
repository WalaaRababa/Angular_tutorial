import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  private url = 'http://127.0.0.1:3000/';
  heros: any[] = [
    {
      name: 'peepp',
      power: 100,
      urlImg:
        'https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg',
    },
    {
      name: 'memem',
      power: 50,
      urlImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7nW5m1oVAEdW38H1ZRsM8NTUAyPI3K-5808ZIs1BR-jiLy6inj7JmDZbHwam1Wbea38&usqp=CAU',
    },
    {
      name: 'kitit',
      power: 150,
      urlImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBKdKsGh4E_qylBRfjm2ZIya-HE9k7Bte9-KA1SSMQQCOFW-QVpaULhsaF9Oy0NQhkOE&usqp=CAU',
    },
    {
      name: 'zozoz',
      power: 201,
      urlImg:
        'https://img.pokemondb.net/news/2023/area-zero-mystery-pokemon.jpg',
    },
    {
      name: 'soso',
      power: 150,
      urlImg:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full//921.png',
    },

    {
      name: 'mmexx',
      power: 180,
      urlImg:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full//700.png',
    },
  ];

  createNewHero(hero: any) {
    //!---phase using server without upload file
    /*     return this.http.post(this.url+`hero/add`,hero)
     */
    return this.http.post(this.url + `hero/create`, hero);
  }
  getAllHero() {
    return this.http.get(this.url + 'hero/all');
  }
  deleteHero(id: any) {
    return this.http.delete(this.url + `hero/delete/${id}`);
  }
  readHeroById(id: any) {
    return this.http.get(this.url + `hero/getById/${id}`);
  }
  updateHeroById(hero: any, id: any) {
    return this.http.put(this.url + `hero/update/${id}`, hero);
  }
}
