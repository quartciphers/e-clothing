import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyC-MgMfS3vyxVWOpIsW0wejF25RO_0YLe8",
    authDomain: "e-clothing-6cb19.firebaseapp.com",
    projectId: "e-clothing-6cb19",
    storageBucket: "e-clothing-6cb19.appspot.com",
    messagingSenderId: "870043130969",
    appId: "1:870043130969:web:d64f4646de206d97a1e548",
    measurementId: "G-9VHSRWY5KM"
  };
  

  export const createUserProfileDocument = async (userAuth,additionalData) => {

      if(!userAuth){
         
        return ;

      }

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get()

      if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
          
         await userRef.set({
            displayName,
            email,createdAt,
            ...additionalData
          });



        }
        catch(error){
          console.log(error.message);
        }
      }



      return userRef;
      
  };



  export const  addCollectionAndDocuments = async (collectionKey,objectsToAdd,additionalData) =>{

    const collectionRef = firestore.collection(collectionKey);

  
     const batch = firestore.batch();

     objectsToAdd.forEach(obj => {
       const newDocRef = collectionRef.doc();
       batch.set(newDocRef,obj);
     });

     return await batch.commit();
     

  };


  export const convertCollectionSnapshotToMap =(collections) =>{

      
    const transformedCollection = collections.docs.map(doc =>{
       
      const {title,items} = doc.data();

      return{
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }

      

    })

   return  transformedCollection.reduce((accumlator,collection)=>{

       accumlator[collection.title.toLowerCase()] = collection;
       return accumlator;

    },{})

  }


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account' });

  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;