import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMotorcycle,
  FaEdit,
  FaTrash,
  FaExclamationCircle,
  FaPlusSquare,
} from 'react-icons/fa';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container } from '../../styles/Global';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

import {
  MotorcycleContainer,
  MotorcyclePicture,
  NewMotorcycle,
  Header1,
} from './styled';

export default function Motorcycles() {
  const [motorcycles, setMotorcycles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/motorcycles');
      setMotorcycles(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.style.display = 'none';
  };

  const handleDelete = async (e, id, index) => {
    try {
      setIsLoading(true);
      await axios.delete(`/motorcycles/${id}`);
      const newMotorcycles = [...motorcycles];
      newMotorcycles.splice(index, 1);
      setMotorcycles(newMotorcycles);
      setIsLoading(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', [
        'Unable to remove index',
      ]);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Header1>
        Motorcycles
        <NewMotorcycle to="/motorcycle">
          <FaPlusSquare />
        </NewMotorcycle>
      </Header1>

      <MotorcycleContainer>
        {motorcycles.map((motorcycle, index) => (
          <div key={String(motorcycle.id)}>
            <div>
              <MotorcyclePicture>
                {get(motorcycle, 'Photos[0].url', false) ? (
                  <img
                    crossOrigin=""
                    src={motorcycle.Photos[0].url}
                    alt={`${motorcycle.brand} ${motorcycle.model}`}
                  />
                ) : (
                  <FaMotorcycle size={24} />
                )}
              </MotorcyclePicture>
              <span>
                <b>{motorcycle.brand}</b> {motorcycle.model}{' '}
                <i>{motorcycle.displacement}cc</i>
              </span>
            </div>
            <span className="actions">
              <Link to={`motorcycle/${motorcycle.id}`}>
                <FaEdit />
              </Link>
              <Link
                onClick={handleDeleteAsk}
                to={`motorcycle/${motorcycle.id}/delete`}
              >
                <FaTrash />
              </Link>
              <FaExclamationCircle
                className="deleteExclamation"
                display="none"
                onClick={(e) => handleDelete(e, motorcycle.id, index)}
                title="Confirm exclusion?"
              />
            </span>
          </div>
        ))}
      </MotorcycleContainer>
    </Container>
  );
}
