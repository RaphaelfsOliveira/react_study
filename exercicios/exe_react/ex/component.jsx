import React from 'react';

const Primeiro = props => (
  <h1>Primeiro Componente! {props.value}</h1>
);

const Segundo = props => (
  <h1>Segundo Componente! {props.value}</h1>
);

export {Primeiro, Segundo};
