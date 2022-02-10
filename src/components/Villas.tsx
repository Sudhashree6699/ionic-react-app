import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, navigate, pinOutline, pinSharp } from 'ionicons/icons';
import { useState } from 'react';
import { getVillas } from '../services/VillasRestAPI';
import './Villas.css'
import Menu from './Menu';

export const Villas: React.FC = () => {
    const [villaList, setVillas] = useState([]);

    const loadVillas = async () => {
        let tempData = await getVillas();
        setVillas(tempData)
        console.log(tempData)
    }

    React.useEffect(() => {
        loadVillas();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Villas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {villaList.map((villa: any) => {
                    return (
                        <IonCard className="card">
                            <IonCardHeader>
                                <IonCardTitle>
                                    <img src={villa.image}></img>
                                </IonCardTitle>
                                <IonCardContent>{villa.title} <br /> <IonLabel color='danger'>{villa.price}</IonLabel></IonCardContent>
                                <IonCardContent><IonIcon icon={pinSharp} slot="start" color="success" />{villa.Location} &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IonButton className='border' size='small' color='danger'>More</IonButton>&nbsp;<IonButton size='small' className='border' color='danger'>Book villa</IonButton></IonCardContent>
                            </IonCardHeader>
                        </IonCard>
                    )
                })}
            </IonContent>
        </IonPage>
    );
};
