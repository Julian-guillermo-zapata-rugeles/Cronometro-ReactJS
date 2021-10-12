import react from "react";



class Cronometro extends react.Component{
    constructor(props){
        super(props);
        this.state=({
            disparador:100, // milisegundos
            milisegundos:0,
            segundos:0,
            minutos:0,
            active:false,
        })

        // iniciar disparadores 
        this.iniciarTimer();
    }




    contabilizar = () =>{
        if (this.state.active==true) {
            // si el componente está en modo de actividad 
            // entonces inicia el conteo 
            this.setState({
                milisegundos:this.state.milisegundos+10
            })
            if (this.state.milisegundos>90) {
                // milisegundos completados
                // hora de aumentar los segundos
                this.setState({
                    milisegundos:0,
                    segundos: this.state.segundos+ 1
                })

                if (this.state.segundos==59) {
                    this.setState({
                        segundos:0,
                        minutos:this.state.minutos +1,
                    })
                }
            }
        }
    }

    // manejadores del cronometro 

    iniciarCronometro = () =>{
        this.setState({
            active:true
        })
    }


    pausarCronometro = () =>{
        this.setState({
            active:false
        })
    }

    reiniciarCronometro = () =>{
        this.setState({
            active:false,
            segundos:0,
            minutos:0,
            milisegundos:0
        })
    }


    iniciarTimer = () => {
        // inicia el timer de la aplicacion
        // se ejecutará cada 100 milisegundos 
        setInterval(() => {
            this.contabilizar();
        }, this.state.disparador);
    }


    render(){
        return(
            <div className="cronometro">

                <div className="titulo">
                    <h3> Cronometro </h3>
                </div>


                <div className="display">
                    <h2> {this.state.minutos} : {this.state.segundos} : {this.state.milisegundos} </h2>
                </div>


                <div className="botones">
                    <button onClick={this.reiniciarCronometro}>Reiniciar</button>
                    <button onClick={this.pausarCronometro}>Pausar</button>
                    <button onClick={this.iniciarCronometro}>Iniciar</button>
                </div>

            </div>
        )
    }

}

export default Cronometro