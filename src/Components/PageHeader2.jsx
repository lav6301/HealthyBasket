import React from "react";
import { Link } from "react-router-dom";

function PageHeader2({ h2, level1, level1Link, level2, level2Link, level3 }) {
  return (
    <>
      <div className="container-fluid py-5 about-header">
        <h2 className="text-center text-black">{h2}</h2>

        <ol className="breadcrumb justify-content-center mb-0">
          {/* Level 1 */}
          <li className="breadcrumb-item">
            <Link className="text-white" to={level1Link}>
              {level1}
            </Link>
          </li>

          {/* Level 2 */}
          {level2 && (
            <li className="breadcrumb-item">
              <Link className="text-white" to={level2Link}>
                {level2}
              </Link>
            </li>
          )}

          {/* Level 3 (current page) */}
          {level3 && (
            <li className="breadcrumb-item active text-muted" aria-current="page">
              {level3}
            </li>
          )}
        </ol>
      </div>
    </>
  );
}

export default PageHeader2;
