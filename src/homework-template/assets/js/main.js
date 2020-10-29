
    //Дата в URL указывается в параметре ?date=
    let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20201001&json';

    fetch( URL )
        .then( data => data.json() )
        .then( data => {

            let usdRate = data
                            .find( item => item.cc === 'USD' )
                            .rate;
            
            console.log( '2020-10-01 USD Rate:', usdRate );

        });