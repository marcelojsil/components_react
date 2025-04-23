import MenuResp from './components/MenuResp';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';

import './style.css';
import Forms from './forms/Form';
import FormLead from './forms/FormLead';
import DivAnimation from './components/DivAnimation';

function App() {
  return (
    <div className="App">

      <MenuResp />

      <ButtonPrimary
        text="Falar no WhatsApp"
        actionType="link"
        actionValue="https://wa.me/5512991022315"
      />

      <form id="meuForm" onSubmit={(e) => { e.preventDefault(); alert("Form enviado!"); }}>
        <input type="text" placeholder="Seu nome" />
      </form>

      <ButtonSecondary
        text="Enviar Formulário"
        actionType="submit"
        formId="meuForm"
      />

      <Forms />

      <FormLead />

      <div className='height'></div>

      <DivAnimation animation="slide-up" delay={100}>
        <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "8px" }}>
           Este bloco desliza de baixo para cima ao entrar na tela!
        </div>
      </DivAnimation>

      <DivAnimation animation="flip" delay={400}>
        <div style={{ background: "#e0f2fe", padding: "20px", borderRadius: "8px" }}>
          E esse aqui dá uma giradinha 👀
        </div>
      </DivAnimation>

      <DivAnimation animation="slide-left" delay={400}>
        <div style={{ background: "#e0f2fe", padding: "20px", borderRadius: "8px" }}>
          E esse vem da esquerda
        </div>
      </DivAnimation>
      
      <div className='height'></div>



    </div>
  );
};
      


export default App;
