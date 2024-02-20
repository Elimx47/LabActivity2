function courses(props) {
  let difficultyBadges = null;
  if (props.courseObj.difficulty) {
    if (props.courseObj.difficulty === "Beginning") {
      difficultyBadges = (
        <span className="badge rounded-pill bg-primary">
          {props.courseObj.difficulty}
        </span>
      );
    } else if (props.courseObj.difficulty === "Intermediate") {
      difficultyBadges = (
        <span className="badge rounded-pill bg-success">
          {props.courseObj.difficulty}
        </span>
      );
    } else {
      difficultyBadges = (
        <span className="badge rounded-pill bg-danger">
          {props.courseObj.difficulty}
        </span>
      );
    }
  }
  return (
    <div className="container my-3">
      <div className="d-flex justify-content-center">
        <div class="card mb-3" style={{ maxWidth: "820px", minWidth: "820px" }}>
          <div class="row g-0">
            <div className="col-md-3" style={{ margin: 0, padding: 0 }}>
              <img
                src={props.courseObj.photoName}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="coursepic"
              />
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <p class="card-text">
                  <small class="text-body-secondary">
                    {props.courseObj.mode}
                  </small>
                </p>
                <h5 class="card-title">{props.courseObj.title}</h5>
                <p class="card-text">{props.courseObj.description}</p>
                <p class="card-text">
                  <small class="text-body-secondary">{difficultyBadges}</small>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary rounded-pill"
                  style={{ marginRight: "20px", backgroundColor: "#005073" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default courses;
