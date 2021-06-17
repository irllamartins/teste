import { useState} from 'react'; 

function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
      // chave: nome, descricao e outros
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
    function clearForm(){
      setValues(valoresIniciais);
  
    }
  
    return {
      //retorna um objeto
      values,
      handleChange,
      clearForm,
    };
  }

  export default useForm;
