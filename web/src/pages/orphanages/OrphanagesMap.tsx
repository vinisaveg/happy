import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

const OrphanagesMap = () => {
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
                center={[-23.6126495, -46.7381793]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="/">
                <CreateOrphanage>
                    <FiPlus size={32} color="#FFF" />
                </CreateOrphanage>
            </Link>
        </PageMap>
    );
};

export default OrphanagesMap;
