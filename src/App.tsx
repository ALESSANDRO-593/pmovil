import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./titulo";
import CardItem from "./components/card";



function App() {

  const tipos = [
    {
      id: 1,
      title: "BEV (Battery Electric Vehicle)",
      text: "Vehículos totalmente eléctricos que solo usan batería. No consumen gasolina."
    },
    {
      id: 2,
      title: "HEV (Hybrid Electric Vehicle)",
      text: "Combinan motor eléctrico y gasolina. No necesitan enchufe."
    },
    {
      id: 3,
      title: "PHEV (Plug-in Hybrid Electric Vehicle)",
      text: "Híbridos enchufables que pueden conectarse a la corriente y también usar gasolina."
    },
    {
      id: 4,
      title: "MHEV (Mild Hybrid Electric Vehicle)",
      text: "El motor eléctrico solo asiste, pero no mueve al vehículo por sí solo."
    },
    {
      id: 5,
      title: "FCEV (Fuel Cell Electric Vehicle)",
      text: "Funciona con hidrógeno y genera electricidad en la célula de combustible."
    }
  ];

  return (
    <div className="container py-5">
      <Titulo texto="Tipos de Autos Eléctricos" />

      <div className="row mt-4">
        {tipos.map((item) => (
          <CardItem key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
