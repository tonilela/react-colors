/**
 * Created by Lela on 31.5.2018..
 */
import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';



class Color extends Component{
    handleClick=()=>{
      this.props.onClick(this.props.boja)
    };
    render() {
        return (

            <div className="Color-colum" onClick={this.handleClick} style={{background: this.props.boja}}>
                {this.props.value}
            </div>

        );

    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class NovaKomponenta extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            colorOne:'',
            colorTwo: '',
            colorThree: 'black',
            value:'',
            rand:0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeColor=this.changeColor.bind(this);

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

    handleChange(event) {
        this.setState({value: event.target.value});
    }

   changeColor=() =>{
        if(this.state.colorThree==='black'){

            let random=getRandomInt(100);
            this.setState({ rand :this.state.rand+random+1});
            if( (this.state.rand %2)===0){
                this.setState({colorTwo: this.state.colorTwo});
                console.log(this.state.colorTwo+"druga");
                this.setState({colorThree: '#'+this.state.colorTwo});
            }
            else{
                this.setState({colorOne: this.state.colorOne});
                console.log(this.state.colorOne+"prva");
                this.setState({colorThree: '#'+this.state.colorOne});
            }

        }
        else{

            this.setState({colorThree: 'black'});
        }


    }

    render(){

        const rules ={
            color: 'black',
        };

       return(
           <div >
               <Color  boja={this.state.colorThree}
                       value={this.state.value}
                       onClick={this.changeColor}/>

               <input style={rules}
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange} />

           </div>
       );
      }

}
export default  NovaKomponenta;