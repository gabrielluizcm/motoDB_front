import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/Global';
import Loading from '../../components/Loading';
import { Title, Form, PhotoAlbum } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Album({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');

  const [brand, setBrand] = React.useState('');
  const [model, setModel] = React.useState('');
  const [displacement, setDisplacement] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const [mainPhotoUrl, setMainPhotoUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/motorcycles/${id}`);
        setPhotos(data.Photos);
        const mainPhoto = get(data, 'Photos[0].url', '');

        setMainPhotoUrl(mainPhoto);

        setBrand(data.brand);
        setModel(data.model);
        setDisplacement(data.displacement);

        setIsLoading(false);
      } catch {
        setIsLoading(false);
        toast.error('Failed to retrieve photos');
        history.push('/');
      }
    };
    getData();
  }, [id]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const newPhotoUrl = URL.createObjectURL(file);

    setMainPhotoUrl(newPhotoUrl);

    const formData = new FormData();
    formData.append('motorcycleId', id);
    formData.append('file', file);

    try {
      setIsLoading(true);
      const { data } = await axios.post('/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newPhotos = [...photos];
      newPhotos.unshift(data);
      setPhotos(newPhotos);

      toast.success('Photo sent successfully');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');

      toast.error('Failed to upload photo');
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Album - {`${brand} ${model} ${displacement}cc`}</Title>

      <Form>
        <label htmlFor="photo">
          {mainPhotoUrl ? (
            <img
              crossOrigin=""
              src={mainPhotoUrl}
              alt="Current"
              title="Send new main photo"
            />
          ) : (
            'Add photo'
          )}
          <input type="file" id="photo" onChange={handleChange} />
        </label>
      </Form>
      <PhotoAlbum>
        {photos.map((photo, index) => (
          <div key={String(photo.id)}>
            <img crossOrigin="" src={photo.url} alt={index} />
          </div>
        ))}
      </PhotoAlbum>
    </Container>
  );
}

Album.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
