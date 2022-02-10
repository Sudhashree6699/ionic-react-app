import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import BookList from '../components/Books';
//import Profile from '../components/Profile';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


  return (
    <>
    {name == "List"? 
    <>
    <BookList/>
    </> : 
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
    }
    </>
    
  );
};

export default Page;
