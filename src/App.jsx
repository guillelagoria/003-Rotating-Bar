import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [flag, setFlag] = useState(false);

  const clickNav = () => {
    setFlag(!flag);
  };

  return (
    <>
      <body>
        <div className={flag ? "container show-nav" : "container"}>
          <div className="circle-container">
            <div className="circle">
              <button className="btn" id="close" onClick={clickNav}>
                <i className="fas fa-times"></i>
              </button>
              <button className="btn" id="open" onClick={clickNav}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="content">
            <h1>Cosas que deberías saber de los gatos</h1>
            <small>Guillermo J. Lagoria</small>
            <p>
              No cabe duda que los gatos son una excelente compañía. Son
              perfectos cómplices para las personas que buscan un compañero con
              quien descansar, que le guste pasar momentos tranquilos y
              sobretodo aquel que busca un amigo fiel. Muchos artistas afirman
              que son la mejor compañía y, a veces, una gran inspiración.
            </p>

            <h3>Mi Gato</h3>
            <img src="src\Persi.jpg" alt="Mycat" />
            <h3>13 Datos curiosos:</h3>

            <ol>
              <li>
                Tienen una flexibilidad y agilidad impresionante, pueden saltar
                desde más de 3 metros de altura.
              </li>
              <li>Los gatos pueden rotar sus orejas 180 grados.</li>
              <li>Los gatos pueden pasar hasta 14 horas dormidos.</li>
              <li>
                Debido a su naturaleza nocturna, los gatos suelen ser mucho más
                hiperactivos en la tarde.
              </li>
              <li>
                La audición del gato promedio es al menos cinco veces más aguda
                que la de un adulto humano.
              </li>
              <li>
                En la raza de gato más grande, el macho promedio pesa
                aproximadamente 9 kilos.
              </li>
              <li>
                Los gatos domésticos pasan cerca del 70 por ciento del día
                durmiendo, y 15 por ciento del día acicalándose.
              </li>
              <li>Un gato no puede ver directamente debajo de su nariz.</li>
              <li>
                Tienen uno de los sistemas sensoriales más sofisticados del
                mundo.
              </li>
              <li>La mayoría de los gatos no tiene pestañas.</li>
              <li>
                Los gatos tienen cinco dedos en cada pata delantera, pero sólo
                cuatro en la parte posterior. Sin embargo, no es raro que los
                gatos tengan dedos extra. ¡El gato con la mayor cantidad de
                dedos conocidos tenía 32, ocho en cada pata!
              </li>
              <li>
                Algunas personas creen que si sueñas con un gato blanco, te
                seguirá la buena suerte.
              </li>
              <li>
                Los maullidos no son un lenguaje innato para gatos, ¡los
                desarrollaron para comunicarse con los humanos! Visita ¿Por qué
                lloran los gatos? para descubrir más sobre sus maullidos y sus
                significados.
              </li>
            </ol>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <i className="fas fa-home"></i>
              <a href="#"> Home</a>
            </li>
            <li>
              <i className="fas fa-user-alt"></i>
              <a href="#"> About</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="#"> Contact</a>
            </li>
          </ul>
        </nav>
      </body>
    </>
  );
};

export default App;
