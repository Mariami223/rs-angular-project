import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  data = [
    {
      id: 1,
      title: 'გადამხდელის შესახებ საჯარო ინფორმაცია',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: false,
    },
    {
      id: 2,
      title: 'ზედნადები',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: true,
    },
    {
      id: 3,
      title: 'ანგარიშ-ფაქტურა',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: true,
    },
    {
      id: 4,
      title: 'ნსაფ',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: true,
    },

    {
      id: 5,
      title: 'ნსაფ ელექტრონული ჟურნალების',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: false,
    },
    {
      id: 6,
      title: 'საგადასახადო დოკუმენტი',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: true,
    },
    {
      id: 7,
      title: 'დაქირავებულ პირთა რეესტრი',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: true,
    },
    {
      id: 8,
      title: 'Duty-Free',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: false,
    },
    {
      id: 9,
      title: 'Duty-Free სახელმძღვანელო',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: false,
    },
    {
      id: 10,
      title: 'საფოსტო გზავნილები',
      date: '23-თებ-2022',
      linkLogo: '../../../assets/postman-icon.png',
      linkTitle: 'Postman',
      details: 'დეტალურ ინფორმაციას მალე დავამატებთ',
      active: false,
    },
  ];
  getFakeData(): any {
    return this.data;
  }
}
