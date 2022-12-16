import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detalhes = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/cadastro/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
         
               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Cadastro Criado</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2> Nome de colaborador é : <b>{empdata.nome}</b>  ({empdata.id})</h2>
                        <h3> Detalhes </h3>
                        <h5>Email é : {empdata.email}</h5>
                        <h5>Telefone é : {empdata.Telefone}</h5>
                        <Link className="btn btn-danger" to="/">Lista</Link>
                    </div>
                }
            </div>
            </div>
        </div >
    );
}

export default Detalhes;