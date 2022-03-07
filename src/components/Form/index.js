export function FormFild(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id} //deve ser igual ao htmlFor do label, para se relacionarem
        name={props.name} //relacionar com a chave do objeto do state
        onChange={props.onChange}
        value={props.value}
        required={props.required} //booleano, para dizer se é obrigatório ou não o campo ser preenchido
        pattern={props.pattern} //permite que seja passada uma regex, para que ele só aceite o que determinar a regex passada
        readOnly={props.readOnly} //booleano, para quando estiver enviando o formulário, não ser permitido clicar novamente naquele mesmo formulário
      />
    </div>
  );
}
