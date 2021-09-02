import React, { Fragment } from "react";

const Row = () => {
  return (
    <Fragment>
      <tr>
        <th scope="row">
          <div className="media align-items-center">
            <a href="####" className="avatar rounded-circle mr-3">
              <img
                alt="placeholder"
                src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg"
              />
            </a>
            <div className="media-body">
              <span className="mb-0 text-sm">Argon Design System</span>
            </div>
          </div>
        </th>
        <td>$2,500 USD</td>
        <td>
          <span className="badge badge-dot mr-4">
            <i className="bg-warning" /> pending
          </span>
        </td>
        <td>
          <div className="avatar-group">
            <a
              href="####"
              className="avatar avatar-sm"
              data-toggle="tooltip"
              data-original-title="Ryan Tompson"
            >
              <img
                alt="placeholder"
                src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
                className="rounded-circle"
              />
            </a>
            <a
              href="####"
              className="avatar avatar-sm"
              data-toggle="tooltip"
              data-original-title="Romina Hadid"
            >
              <img
                alt="placeholder"
                src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
                className="rounded-circle"
              />
            </a>
            <a
              href="####"
              className="avatar avatar-sm"
              data-toggle="tooltip"
              data-original-title="Alexander Smith"
            >
              <img
                alt="placeholder"
                src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
                className="rounded-circle"
              />
            </a>
            <a
              href="####"
              className="avatar avatar-sm"
              data-toggle="tooltip"
              data-original-title="Jessica Doe"
            >
              <img
                alt="placeholder"
                src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                className="rounded-circle"
              />
            </a>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">60%</span>
            <div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>
        </td>
        <td className="text-right">
          <div className="dropdown">
            <a
              className="btn btn-sm btn-icon-only text-light"
              href="####"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a className="dropdown-item" href="####">
                Action
              </a>
              <a className="dropdown-item" href="####">
                Another action
              </a>
              <a className="dropdown-item" href="####">
                Something else here
              </a>
            </div>
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default Row;
