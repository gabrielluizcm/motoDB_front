import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isInt, isFloat } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { FaMotorcycle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from '../../styles/Global';
import { Form, MotorcyclePicture, Title } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Motorcycle({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');
  const { id: creatorId } = useSelector((state) => state.auth.user);

  const [brand, setBrand] = React.useState('');
  const [model, setModel] = React.useState('');
  const [year, setYear] = React.useState('');
  const [displacement, setDisplacement] = React.useState('');
  const [cylinders, setCylinders] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [topSpeed, setTopSpeed] = React.useState('');
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      setIsLoading(true);

      try {
        const { data } = await axios.get(`/motorcycles/${id}`);
        const photo = get(data, 'Photos[0].url', '');

        setPhotoUrl(photo);

        setBrand(data.brand);
        setModel(data.model);
        setYear(data.year);
        setDisplacement(data.displacement);
        setCylinders(data.cylinders);
        setWeight(data.weight);
        setTopSpeed(data.top_speed);

        setIsLoading(false);
      } catch (error) {
        const errors = get(error, 'response.data.errors', [
          'Unable to retrieve data',
        ]);

        errors.map((err) => toast.error(err));
        setIsLoading(false);
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = [];

    if (brand.length < 3 || brand.length > 255)
      formErrors.push('"Brand" must be at least 3 characters long');

    if (model.length < 3 || model.length > 255)
      formErrors.push('"Model" must be at least 3 characters long');

    if (!isInt(String(year))) formErrors.push('"Year" must be an integer');

    if (!isInt(String(displacement)))
      formErrors.push('"Displacement" must be an integer');

    if (!cylinders.length) formErrors.push('"Cylinders" is required');

    if (!isFloat(String(weight))) formErrors.push('"Weight" must be a float');

    if (!isFloat(String(topSpeed)))
      formErrors.push('"Top speed" must be a float');

    if (formErrors.length) return formErrors.map((error) => toast.error(error));

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/motorcycles/${id}`, {
          brand,
          model,
          year,
          displacement,
          cylinders,
          weight,
          top_speed: topSpeed,
        });
        toast.success('Changes saved successfully');
      } else {
        const { data } = await axios.post(`/motorcycles`, {
          brand,
          model,
          year,
          displacement,
          cylinders,
          weight,
          top_speed: topSpeed,
          creator_id: creatorId,
        });
        toast.success('New motorcycle added successfully');
        history.push(`/motorcycles/${data.id}`);
      }

      history.push('/');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', [
        'Unable to process request at this moment',
      ]);

      if (errors.length) errors.map((error) => toast.error(error));

      if (status === 401) {
        toast.warning('Authentication failed');
        dispatch(actions.loginFailure());
      }
    }

    return true;
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Edit motorcycle' : 'New motorcycle'}</Title>

      {id && (
        <MotorcyclePicture>
          {photoUrl ? (
            <img crossOrigin="" src={photoUrl} alt={`${brand} ${model}`} />
          ) : (
            <FaMotorcycle size={100} />
          )}
          <Link to={`/motorcycle/album/${id}`}>
            <FaEdit size={18} />
          </Link>
        </MotorcyclePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="brand">
          Brand
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
          />
        </label>
        <label htmlFor="model">
          Model
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
          />
        </label>
        <label htmlFor="year">
          Year
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
            min="1885"
            max={new Date().getFullYear() + 1}
          />
        </label>
        <label htmlFor="displacement">
          Displacement (cc)
          <input
            type="number"
            value={displacement}
            onChange={(e) => setDisplacement(e.target.value)}
            placeholder="Displacement"
            min="0"
          />
        </label>
        <label htmlFor="cylinder">
          Cylinders
          <input
            type="text"
            value={cylinders}
            onChange={(e) => setCylinders(e.target.value)}
            placeholder="Cylinders"
          />
        </label>
        <label htmlFor="weight">
          Weight (kg)
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
            min="0"
          />
        </label>
        <label htmlFor="topSpeed">
          Top speed (km/h)
          <input
            type="number"
            value={topSpeed}
            onChange={(e) => setTopSpeed(e.target.value)}
            placeholder="Top speed"
          />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}

Motorcycle.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
