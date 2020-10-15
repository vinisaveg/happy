import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus, FiMinusCircle } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';

import './create-orphanage.css';
import Sidebar from '../../components/Sidebar';
import happyMapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function CreateOrphanage() {
    const history = useHistory();

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const [images, setImages] = useState<File[]>([]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('name', name);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('about', about);
        data.append('instructions', instructions);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(open_on_weekends));
        images.forEach((image) => {
            data.append('images', image);
        });

        await api.post('orphanages', data);

        alert('Cadastro efetuado com sucesso!');

        history.push('/orphanages');
    };

    const handleMapClick = (event: LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng,
        });
    };

    const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);
        // console.log(selectedImages);

        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map((image) => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagesPreview);
        // console.log(selectedImagesPreview);
    };
    const removeImage = (imageToDelete: string) => {
        const newImages = previewImages.filter(
            (image) => image !== imageToDelete
        );

        setPreviewImages(newImages);
    };

    return (
        <div id="page-create-orphanage">
            <Sidebar />

            <main>
                <form onSubmit={handleSubmit} className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-27.2092052, -49.6401092]}
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            onClick={handleMapClick}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={happyMapIcon}
                                    position={[
                                        position.latitude,
                                        position.longitude,
                                    ]}
                                />
                            )}
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">
                                Sobre <span>Máximo de 300 caracteres</span>
                            </label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={about}
                                onChange={(event) =>
                                    setAbout(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="images-container">
                                {previewImages.map((image) => {
                                    return (
                                        <div key={image}>
                                            <img src={image} alt={name} />
                                            <span
                                                className="delete-image"
                                                onClick={() =>
                                                    removeImage(image)
                                                }
                                            >
                                                <FiMinusCircle
                                                    size={20}
                                                    color="#FF0000"
                                                />
                                            </span>
                                        </div>
                                    );
                                })}

                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                            </div>
                            <input
                                multiple
                                onChange={handleSelectImages}
                                type="file"
                                id="image[]"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={(event) =>
                                    setInstructions(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">
                                Horário de funcionamento
                            </label>
                            <input
                                id="opening_hours"
                                value={opening_hours}
                                onChange={(event) =>
                                    setOpeningHours(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">
                                Atende fim de semana
                            </label>

                            <div className="button-select">
                                <button
                                    type="button"
                                    className={open_on_weekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Sim
                                </button>

                                <button
                                    type="button"
                                    className={
                                        !open_on_weekends ? 'active' : ''
                                    }
                                    onClick={() => setOpenOnWeekends(false)}
                                >
                                    Não
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
        </div>
    );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
