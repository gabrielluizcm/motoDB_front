import React from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaEdit, FaTrash } from 'react-icons/fa';
import { get } from 'lodash';

import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import { MotorcycleContainer, MotorcyclePicture } from './styled';

export default function Motorcycles() {
  const [motorcycles, setMotorcycles] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/motorcycles');
      setMotorcycles(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Motorcycles</h1>

      <MotorcycleContainer>
        {motorcycles.map((motorcycle) => (
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
            <span>
              <Link to={`motorcycle/${motorcycle.id}`}>
                <FaEdit />
              </Link>
              <Link to={`motorcycle/${motorcycle.id}/delete`}>
                <FaTrash />
              </Link>
            </span>
          </div>
        ))}
      </MotorcycleContainer>
    </Container>
  );
}
