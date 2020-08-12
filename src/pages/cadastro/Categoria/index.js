import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';
import useForm from '../../../hocks/useForm';



function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const { handleChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);






  /*function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
      );
  }*/

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://christianflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });



    /*    setTimeout(() => {
          setCategorias([
            ...categorias,
            {
              "id": 1,
              "nome": "Front End",
              "descricao": "Uma categoria",
              "cor": "#cdb1ff"
            },
            {
              "id": 2,
              "nome": "Back End",
              "descricao": "Outra categoria",
              "cor": "#cdb1ff"
            }
          ]);
    
        }, 4 * 1000)*/

  },
    []                         //quando eu quero que aconteça 
  );

  return (
    <PageDefault>

      <h1>Cadastro de Categoria: {values.titulo} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm();

      }}>

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />


        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />



        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />



        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/*cargando*/}
        Loanding...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir pra home
        </Link>

    </PageDefault>
  )
}

export default CadastroCategoria