import "./App.css";
import Row from "./components/Row";
function App() {
  return (
    <div>
      <div className="main-content">
        <div className="container">
          {/* Table */}
          <h2 className="mb-5"> </h2>
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-header border-0">
                  <h3 className="mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Status</th>
                        <th scope="col">Users</th>
                        <th scope="col">Completion</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <Row />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
