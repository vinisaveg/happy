import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './style.css';
import {
    PageMap,
    Aside,
    Header,
    MapMarkerIcon,
    Footer,
    CreateOrphanage,
} from './styles';

import mapMarkerImg from '../../assets/icons/mapMarker.svg';
import { Text, Title } from '../../styles/global';
import api from '../../services/api';

import happyMapIcon from '../../utils/mapIcon';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const OrphanagesMap = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('/orphanages')
            .then((response) => {
                const fetchedOrphanages = response.data;
                setOrphanages(fetchedOrphanages);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <PageMap>
            <Aside>
                <Header>
                    <MapMarkerIcon src={mapMarkerImg} />

                    <Title
                        fontSize={40}
                        fontWeight={800}
                        lineHeight={42}
                        marginTop={64}
                    >
                        Escolha um orfanato no mapa
                    </Title>

                    <Text
                        fontSize={16}
                        fontWeight={600}
                        lineHeight={28}
                        marginTop={24}
                    >
                        Muitas crianças estão esperando a sua visita :)
                    </Text>
                </Header>

                <Footer>
                    <Text
                        fontSize={16}
                        fontWeight={800}
                        lineHeight={24}
                        marginTop={0}
                    >
                        São Paulo
                    </Text>
                </Footer>
            </Aside>

            <Map
                center={[-23.6126495, -46.7381783]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={happyMapIcon}
                            key={orphanage.id}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/orphanages/create">
                <CreateOrphanage>
                    <FiPlus size={32} color="#FFF" />
                </CreateOrphanage>
            </Link>
        </PageMap>
    );
};

export default OrphanagesMap;
