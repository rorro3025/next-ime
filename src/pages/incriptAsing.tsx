import type { NextPage } from "next";
import Layout from "../components/Layout";

const AsignatureIns: NextPage = () => {
  return (
    <Layout>
        <div className="container mt-3">
            <h1 className={"text-center"}>Incripion de asingnaturas</h1>
        </div>
       <div className="container">
           <iframe src="http://docs.googgle.com/gview?url=http://asesorias.cuautitlan2.unam.mx/horarios/2020_I/conta_n.pdf"
                   style={{width: "100%", height: "800px"}} />
       </div>
    </Layout>
  );
};

export default AsignatureIns;