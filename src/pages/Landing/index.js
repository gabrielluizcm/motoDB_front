import React from 'react';

import { Container } from '../../styles/Global';
import { Paragraph, Code, Hr } from './styled';

export default function Landing() {
  return (
    <Container>
      <h1>Welcome to the MotoDB</h1>
      <Paragraph>
        An open database for motorcycles models. Created by{' '}
        <a href="http://github.com/gabrielluizcm">Gabriel Luiz (me)</a> as a
        study subject to NodeJS and React programming.
      </Paragraph>
      <Paragraph>
        By the way, the <a href="http://35.198.50.245">open JSON API</a> is
        available for anyone interested, if you ever need motorcycle data to
        fill your app! xD
      </Paragraph>
      <Hr />
      <h4>API routes</h4>
      <Paragraph>
        If you want to retrieve data from the API, use the following routes:
      </Paragraph>
      <pre>
        <h3>Retrieve all motorcycles:</h3>
        <code>GET - /motorcycles</code>
        <h4>Response:</h4>
        <Code>
          {'{'}
          <p>
            id: <i>int</i>
          </p>
          <p>
            brand: <i>String</i>
          </p>
          <p>
            model: <i>String</i>
          </p>
          <p>
            year: <i>int</i>
          </p>
          <p>
            displacement: <i>int</i>
          </p>
          <p>
            cylinders: <i>int</i>
          </p>
          <p>
            weight: <i>float</i>
          </p>
          <p>
            top_speed: <i>float</i>
          </p>
          <p>
            Photos: <i>array</i>[
            <p>
              {'{'}
              <p>
                id: <i>int</i>
              </p>
              <p>
                file_name: <i>String</i>
              </p>
              <p>
                url: <i>String</i>
              </p>
              {'}'}
            </p>
            ]
          </p>
          {'}'}
        </Code>
        <h3>Retrieve single motorcycle detail:</h3>
        <code>
          GET - /motorcycles/<i>:id</i>
        </code>
        <h4>Response:</h4>
        <Code>
          {'{'}
          <p>
            brand: <i>String</i>
          </p>
          <p>
            model: <i>String</i>
          </p>
          <p>
            year: <i>int</i>
          </p>
          <p>
            displacement: <i>int</i>
          </p>
          <p>
            cylinders: <i>int</i>
          </p>
          <p>
            weight: <i>float</i>
          </p>
          <p>
            top_speed: <i>float</i>
          </p>
          <p>
            Photos: <i>array</i>[
            <p>
              {'{'}
              <p>
                id: <i>int</i>
              </p>
              <p>
                file_name: <i>String</i>
              </p>
              <p>
                url: <i>String</i>
              </p>
              {'}'}
            </p>
            ]
          </p>
          {'}'}
        </Code>
      </pre>
    </Container>
  );
}
