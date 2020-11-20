import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyAk-hSfN522j35MBeroTB0eyT52K1gFA1c",
    authDomain: "examenu1u2.firebaseapp.com",
    databaseURL: "https://examenu1u2.firebaseio.com",
    projectId: "examenu1u2",
    storageBucket: "examenu1u2.appspot.com",
    messagingSenderId: "476669882422",
    appId: "1:476669882422:web:213d3df1668fba83f2a897",
    measurementId: "G-CE6T59L9KE"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;