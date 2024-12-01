import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';


import { Alert } from 'native-base';
  
const postService = async (method: string, data: any) => {

    // if (method !== 'LOGIN_API' && method !== 'REGISTER_API') return null;

    if (method === 'LOGIN_API') {
        try {
            const res = await
                auth()
                    .signInWithEmailAndPassword(data.email, data.password)
            return {...res.user,token:'newToken'};
        } catch (err: any) {
            if (!err) return 'Network Error';
            return { ...err,token:'newToken' };
        }
    }
    else if(method==="CATEGORIES_API"){
        const ref = firebase.firestore().collection('category').doc()
        await ref.set(data)
        .then((docRef) => {
            return true;
        })
        .catch((error) => {
            return false;
        });
    }
}

const getService = async (method:string, token:string, id:any = null) => {
 let ref:any;
    if (method === 'CATEGORIES_API') {
        let data:any=[];
        ref = await firebase.firestore().collection('category')
        .get().then((querySnapshot:any) => {
            querySnapshot.forEach((snapshot:any) => {
                let catData={
                    ...snapshot.data(),
                    docId:snapshot.id
                }
                console.log('cat Data is:'+ JSON.stringify(catData));
                data = data.concat([catData]);
            })
        })
        return data;
    }
  };
  
  const putService = async (method:any, data:any, docId:any) => {
    if(method==="CATEGORIES_API"){
        const ref = firebase.firestore().collection('category').doc(docId)
        await ref.set(data, { merge: true })
        .then((docRef) => {
            return true;
        })
        .catch((error) => {
            return false;
        });
    }
  };
  
  const deleteService = async (method:any, docId:any) => {
    if(method==="CATEGORIES_API"){
        const ref = firebase.firestore().collection('category').doc(docId)
        await ref.delete()
        .then((docRef) => {
            return true;
        })
        .catch((error) => {
            return false;
        });
    }

  };
  
export {getService, postService, putService, deleteService};

