import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';
import Header from './Header';
import React, { useState } from 'react';
import { addBook,getBookById,updateBook } from '../services/BooksRestAPI';
import { useHistory } from 'react-router';
import { book } from 'ionicons/icons';

export const AddBook: React.FC = () => {
  const [bLabel,setBLabel] = useState('Add')
  const history = useHistory();
  const params:any = useParams();
  const [book,setBook] = useState({
    id: 0,
    title: "",
    author: "",
    publisher: "",
    isbn: "",
    year: '',
    cover: ''
  })

  const loadCurrentBook = async (recordId:any) =>{
    let loadBook = await getBookById(recordId);
    setBook(loadBook);
    setBLabel('Update');
  }

  React.useEffect(() => {
    if(params.recordId){
      console.log(">> params.recordId:"+params.recordId);
      loadCurrentBook(params.recordId);
    }
}, [params.recordId]);

const handleAddBook = async ()=>{
  console.log(">> handleAddBook");
  console.log("Book::",book);
  if(book.id == 0){ //add
      await addBook(book);
  }else{
      await updateBook(book);
      loadCurrentBook(book)
  }
  history.push('/Books')
}
  const handleChange =(e:any)=>{
    console.log(">> name",e.detail.name);
    console.log(">> value ",e.detail.value);
    console.log("Book::",book);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{bLabel} Book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
      <IonItem>
            <IonInput
            placeholder="Title" 
            value={book.title}
            onIonChange={(e:any)=>setBook({...book,title:e.detail.value})}
            type="text">  
            </IonInput>
          </IonItem>

          <IonItem>            
            <IonInput
            value={book.author}
            onIonChange={(e:any)=>setBook({...book,author:e.detail.value})}
           placeholder="Author" ></IonInput>
          </IonItem>
          <IonItem>            
            <IonInput name="publisher" 
            onIonChange={(e:any)=>setBook({...book,publisher:e.detail.value})}
            value={book.publisher}
            placeholder="Publisher" ></IonInput>
          </IonItem>
          <IonItem>            
            <IonInput name="isbn" 
            onIonChange={(e:any)=>setBook({...book,isbn:e.detail.value})}
            value={book.isbn}
            placeholder="ISBN" ></IonInput>
          </IonItem>
          <IonItem>            
            <IonInput name="year" 
            onIonChange={(e:any)=>setBook({...book,year:e.detail.value})}
            value={book.year}
            placeholder="year" ></IonInput>
          </IonItem>
          <IonItem>            
            <IonInput name="cover" 
            onIonChange={(e:any)=>setBook({...book,cover:e.detail.value})}
            value={book.cover}
            placeholder="Image address" ></IonInput>
          </IonItem>

        </IonList>
        <br/>
        <br/>
        <IonButton expand='block' color="primary" onClick={handleAddBook} >{bLabel}</IonButton>
        </IonContent>
    </IonPage>
  );
};

