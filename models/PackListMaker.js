import firebase from 'firebase/compat'

export default async function listMaker(newTour){
    let list ={}
    const dbRef = firebase.database().ref();

    //-----------BACKPACK---------------
    let tourlength = parseInt(newTour.tourlength)
    console.log(tourlength);
    await dbRef.child('backpacks').orderByChild('tourlength').equalTo(tourlength).get().then((snapshot) => {
        if (snapshot.exists()) { 
            Object.assign(list, snapshot.val())
            console.log('✅ Backpack');
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    }); 
    //-----------PANTS---------------
    const temperature = parseInt(newTour.temperature)
    const gender = newTour.gender
    await dbRef.child('pants').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
        if (snapshot.exists()) {
            Object.assign(list, snapshot.val())
            console.log('✅ Pants');
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    //--------BASELAYERS---------
    if(temperature <=2){
        await dbRef.child('baselayerTop').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Baselayer Top');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        await dbRef.child('baselayerBottom').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Baselayer Bottom');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

    }
    //---------RAIN GEAR TEMEPERATURE OVER 3-----------
    const rain = parseInt(newTour.rain)
    //Her siger jeg at det skal regne og temperaturen over niveau 3 fordi under det vil jakkerne selv være vandttæt
    if(rain == 1 && temperature >= 3){
        //Kig på orderByChild her fordi det kan være at der kun er en bukse
        await dbRef.child('rainPants').child(gender).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Rain Pants');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        //Samme her
        await dbRef.child('rainTop').child(gender).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Rain Top');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    //------FLECE---------
    if(temperature <= 3){
        await dbRef.child('fleece').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Flecee');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });}
        /*
         //--------JACKETS---------
         await dbRef.child('jackets').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {

                Object.assign(list, snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        //--------GLOVES---------
        await dbRef.child('gloves').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {

                Object.assign(list, snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    let hattype;
    if(temperature > 3 && rain == 0){
        hattype = 'sunhat'
    } else if (temperature <= 3 && temperature > 1 && rain == 0){
        hattype = 'benny'
    }else if (temperature <= 3 && temperature > 1 && rain == 1){
        hattype = 'rainbenny'
    } else if (temperature == 1){
        hattype = 'winter'
    }
    //måske inddel hat i genders også... finder vi sgu ud af
    if(hattype != undefined){
        await dbRef.child('hat').child(hattype).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {

                Object.assign(list, snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }*/
    //-------SOCKS-------
    await dbRef.child('socks').child(gender).get().then((snapshot) => {
        if (snapshot.exists()) {
            Object.assign(list, snapshot.val())
            console.log('✅ Socks');
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    console.log("✅✅✅✅ FINISHED LIST ✅✅✅✅");
    console.log(list);
    //return list
}