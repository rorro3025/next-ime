import Layout from "../components/Layout";
import type { NextPage } from "next";

const Horarios: NextPage = () => {
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className={"text-center"}>Horarios</h1>
      </div>
      <div className="container">
        <iframe
          src="http://docs.google.com/gview?url=http://asesorias.cuautitlan2.unam.mx/horarios/2020_I/conta_n.pdf&embedded=true"
          style={{ width: "100%", height: "800px" }}
        ></iframe>
      </div>
    </Layout>
  );
};
export default Horarios;
