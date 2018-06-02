/**
 * Created by Lela on 31.5.2018..
 */
import React, { Component } from 'react';
//import { Container, Row, Col} from 'react-bootstrap';




const Color =(props)=>{
console.log(props.boja);
    return(
        <div style={{background:props.boja}}></div>
    );



};

class NovaKomponenta extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            colorBlack: 'blue',
            colorOne:'',
            colorTwo: '',
            colorThree: 'black',
            text:"",
        };

    }
    componentDidMount() {
        if(!this.state.isLoaded){
    fetch('http://www.colr.org/json/color/random')
        .then((res) => res.json())
        .then((json) => this.setState({colorOne: json['colors'][0]['hex'],isLoaded:true}));

    fetch('http://www.colr.org/json/color/random')
        .then((res) => res.json())
        .then((json) => this.setState({colorTwo: json['colors'][0]['hex']}));
}}



    render(){


        const  RealColor = "#"+this.state.colorTwo;
       return(
           <div style={{background:RealColor}}>
                       <Color  boja={RealColor} />
              <div style={{background:RealColor}}>



                  </div>

           </div>
       );
      }

}
export default  NovaKomponenta;