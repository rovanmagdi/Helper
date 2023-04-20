import React, { useState } from "react";

function Multiple() {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      <div className="container-fluid top ">
        <div className="container mt-5 pb-5 pt-5">
          <h3 className="form-head-contact-h3 ">
            Your programming expertise lies in what languages?{" "}
          </h3>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Javascript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Javascript
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Python"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Python
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Java"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Java
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="PHP"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    PHP
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C#"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C#
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C++"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C++
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Typescript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Typescript
                  </label>
                </div>
              </div>
            </div>

            <div className="form-floating mt-3 mb-3 text-center">
              <label htmlFor="exampleFormControlTextarea1">
                You're proficient in the following languages :{" "}
              </label>
              <div
                className="form-control text"
                name="response"
                
                id="floatingTextarea2"
                style={{
                  height: "150px",
                  border: "none",
                  "&:hover": { border: "none" },
                }}
                onChange={handleChange}
              >
                {userinfo.response}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Multiple;
