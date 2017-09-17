class Globals {
  constructor() {
    this.faqList = [];
    this.personalTransactions = [
      {
        'transactionID':6817379073,
        'transactionType': 4,
        'timeStamp': '2017-01-01, 07:29',
        'amount': '-828.98',
        'message/KID':'* 1812 18.06 Nok 828,976985466041 Vipps by DNB Kurs:1.0000'
      },
      {
        'transactionID':6824063631,
        'transactionType':5,
        'timeStamp':'2017-01-06, 14:56',
        'amount':'-888.52',
        'message/KID':'Varekjøp Ruter Jernbanetorget Oslo Dato 06.01 kl. 14.56'
      },
      {
        'transactionID':6980843253,
        'transactionType':4,
        'timeStamp':'2017-01-02, 22:54','amount':'-1533.83','message/KID':'VISA 3486042 Nok 1533,83 Lekmer.no'
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','message/KID':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47'
      },
    ];
    this.othersTransactions = [
      {
        'transactionID':6817379073,
        'transactionType': 4,
        'timeStamp': '2017-01-01, 07:29',
        'amount': '-828.98',
        'message/KID':'* 1812 18.06 Nok 828,976985466041 Vipps by DNB Kurs:1.0000'
      },
      {
        'transactionID':6824063631,
        'transactionType':5,
        'timeStamp':'2017-01-06, 14:56',
        'amount':'-888.52',
        'message/KID':'Varekjøp Ruter Jernbanetorget Oslo Dato 06.01 kl. 14.56'
      },
      {
        'transactionID':6980843253,
        'transactionType':4,
        'timeStamp':'2017-01-02, 22:54','amount':'-1533.83','message/KID':'VISA 3486042 Nok 1533,83 Lekmer.no'
      },
      {
        'transactionID':6803298832,'transactionType':5,'timeStamp':'2017-01-02, 14:47','amount':'-1950.09','message/KID':'Varekjøp NSB Jernbanetorget Oslo Dato 02.01 kl. 14.47'
      },
    ];
    this.branchMaps = {
      foodStore: ['Rema1000', 'Coop', 'Kiwi', 'Joker'],
      fastFood: ['McDonalds', 'BurgerKing'],
      transportation: ['Ruter', 'NSB'],
      electronics: ['Elkjøp', 'Lefdal', 'Power'],
      restaurants: ['TGIFriday', 'BambusSushi', 'KulturHuset', 'EspressoHouse', 'joeandthejuice'],
      div: ['Kicks', 'Ikea', 'Vipps'],
    };
    this.branchEmissions = {
      foodStore: {
        Rema1000: 100,
        Coop: 200,
        Kiwi: 50,
        Joker: 80,
      },
      fastFood: {
        McDonalds: 800,
        BurgerKing: 600,
      },
      transportation: {
        Ruter: 1200,
        NSB: 1500,
      },
      electronics: {
        Elkjøp: 750,
        Lefdal: 600,
        Power: 900,
      },
      restaurants: {
        TGIFriday: 500,
        BambusSushi: 600,
        KulturHuset: 350,
        EspressoHouse: 200,
        joeandthejuice: 150,
      },
      div: {
        Kicks: 400,
        Ikea: 1000,
        Vipps: 30,
      },
    };
  }
}

export default (new Globals);
