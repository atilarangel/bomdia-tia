import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'http://img.ibxk.com.br/ns/rexposta/2017/11/30/30170350996246.jpg?watermark=neaki&w=600',
        'http://2.bp.blogspot.com/_3HF5umLy67k/TNKd079uvNI/AAAAAAAAACA/msimepO5VOs/s1600/BOM+DIA+COM+ALEGRIA.JPG',
        'https://lh3.googleusercontent.com/-wXB4eIQqImg/V4N7YqZEMeI/AAAAAAAAEHU/WTIdlrYgfEg/s640/Segunda-feira-nova-semana-oportunidades.jpg',
        'http://lh3.googleusercontent.com/-rvRSgt8xY8I/VqVClQJwbpI/AAAAAAAAFdM/qu4a4XfNBGk/s1600/www.caminhodasmensagens.blogspot.com_1_0428.gif',
        'http://www.imagenswhats.com/wp-content/uploads/2017/02/Imagem-de-bom-dia-grupo-2017.jpg',
        'http://2.bp.blogspot.com/_3HF5umLy67k/TNKd079uvNI/AAAAAAAAACA/msimepO5VOs/s1600/BOM+DIA+COM+ALEGRIA.JPG',
        'http://1.bp.blogspot.com/-dz7IM48V9q4/VFWPOAaHpvI/AAAAAAAAmhg/9JkOA_xqrXc/s1600/0014a.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBDK8JR5L7h242yJjw04O70RW-494vhDLlvC0wC3gr87Wd9ujTA',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkoM_a1PeWdq6bLbtGsVriTbaYZNiYV2XaDddAZ0T4nWXgdDntQ',
        'https://i.ytimg.com/vi/EK-3K5J3W9Y/maxresdefault.jpg'

      ],
      urlImage: ''
    };
  }

  sorteiaBomDia() {
    let tamanhoArray = this.state.list.length - 1;
    let numAleatorio = Math.random() * tamanhoArray;
    let num = Math.floor(numAleatorio);

    if (this.state.list[num] === this.state.urlImage){
      console.log('repetido')
      this.sorteiaBomDia()
    }else{
      this.setState({ urlImage: this.state.list[num] });
    }
    
  }

  render() {
    return (
      <React.Fragment>
        <figure>
          <div onClick={() => { this.sorteiaBomDia() }}>
            <span >Bom Dia, Tia!</span>
            <span>Sua frase do dia</span>
          </div>
        </figure>

        <img height={'auto'} width={400} style={{position: 'absolute', alignItems: 'center'}}src={this.state.urlImage} />
      </React.Fragment>
    );
  }
}

export default App;
