import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container"> 
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">

          <div className="col-sm-6">
            <h5>Todas as Vendas</h5>
            <BarChart></BarChart>
          </div>

          <div className="col-sm-6">
            <h5>Todas as Vendas</h5>
            <DonutChart></DonutChart>
          </div>


        </div>


        
        <DataTable/>
      </div>
      <Footer />
    </ >
  );
}

export default App;
