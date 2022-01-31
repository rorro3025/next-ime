import type { NextPage } from "next";
import Layout from "../components/Layout";
import {useApp} from "../context/appContext";

const AsignatureIns: NextPage = () => {
    const {user} = useApp();
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className={"text-center"}>Incripion de asingnaturas</h1>
      </div>
      <div className="container">
          {user.role === "student" ? (
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Asignaturas</h5>
                              <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Aperiam, doloremque, ea, eius, exercitationem,
                                  fugiat, illum, ipsa, itaque, laboriosam,
                                  laudantium, maxime, minima, nam, natus,
                                  necessitatibus, nihil, nobis, odio, officia,
                                  omnis, perferendis, placeat, quaerat, quas,
                                  quibusdam, quidem, quis, quisquam, quod,
                                  ratione, repellendus, rerum, sapiente,
                                  similique, sint, sit, sunt, tempora,
                                  temporibus, tenetur, totam, ut, vel,
                                  veritatis, vitae, voluptatem.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          ) : (
             <h1 className="text-danger text-center mt-3">Acceso denegado</h1>
          )}
      </div>
    </Layout>
  );
};

export default AsignatureIns;
