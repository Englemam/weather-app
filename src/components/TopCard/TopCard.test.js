import TopCard from '.';
import { render, screen } from '@testing-library/react';

describe('TopCard Component', () => {

  test('A tag imagem precisa ter um texto alternativo/descritivo', () => {

    const obj = {
      "cityName": "São Paulo",
      "country": "BR",
      "humidity": 78,
      "windSpeed": 2.99,
      "temperature": 16.44,
      "feelsLike": 16.18,
      "tempMax": 16.44,
      "tempMin": 16.44,
      "iconName": "04n",
      "description": "nublado"
  }
      render(<TopCard weatherInfo={obj} />)

      const altText = screen.getByAltText('ícone de clima');
      expect(altText).toBeTruthy()
  })

  test('Ao tentar encontrar um nome de cidade que não foi mostrado na tela, deverá retornar falso', () => {

    const obj = {
      "cityName": "São Paulo",
      "country": "BR",
      "humidity": 78,
      "windSpeed": 2.99,
      "temperature": 16.44,
      "feelsLike": 16.18,
      "tempMax": 16.44,
      "tempMin": 16.44,
      "iconName": "04n",
      "description": "nublado"
  }
      render(<TopCard weatherInfo={obj} />)

      const elementValue = screen.queryByDisplayValue('Rio')
      expect(elementValue).toBeFalsy()
  })

})
