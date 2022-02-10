import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonIcon, IonFabButton, IonFab, IonSearchbar, IonThumbnail } from '@ionic/react';
import { add, book, pencil, pencilSharp, trash, trashBin, } from 'ionicons/icons';
import { useState } from 'react';
import React from 'react';
import { getBook, deleteBook } from '../services/BooksRestAPI';
import { useHistory } from 'react-router';

interface myProps {
  random: number;
}
interface myBook {
  id: 0,
  title: "",
  author: "",
  publisher: "",
  isbn: "",
  year: '',
  cover: ''
}

const BookList = () => {
  const history = useHistory();
  let books: myBook[] = [];
  const [searchText, setSearchText] = useState('');
  const [bookList, setBooks] = useState(books)
  const loadBooks = async () => {
    let tempData = await getBook();
    setBooks(tempData)
    console.log(tempData)
  }
  const deleteBooks = async (bookId: any) => {
    await deleteBook(bookId);
    loadBooks()
  }

  React.useEffect(() => {        //executed whenever component is mounted
    let unlisten = history.listen((location, action) => {
      loadBooks();
    });
    loadBooks();
    return (unlisten);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Books</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
        <IonList>
          {bookList.map((data: any) => {
            return (
              <IonItem key={data.id}>
                <IonThumbnail slot="start">
                  <img src={data.cover} />
                </IonThumbnail>
                <IonLabel>
                  <h2>ID: {data.id}</h2>
                  <h3>{data.title}</h3>
                  <h3>{data.author}</h3>
                  <h3>{data.publisher}</h3>
                  <h3>{data.year}</h3>
                </IonLabel>
                <IonIcon
                  onClick={() => { history.push('/EditBook/' + data.id) }}
                  size={'10'} icon={pencil} />
                <IonIcon onClick={() => { deleteBooks(data.id) }}
                  size={'10'} icon={trash} />
              </IonItem>
            )
          })}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <a href="/AddBook" >
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
          </a>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default BookList;
function setSearchText(arg0: string): void {
  throw new Error('Function not implemented.');
}

