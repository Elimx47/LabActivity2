function courses(data) {
  return (
    <div className="container my-3">
      <div className="d-flex justify-content-center">
        <div class="card mb-3" style={{ maxWidth: "820px", minWidth: "820px" }}>
          <div class="row g-0">
            <div className="col-md-3" style={{ margin: 0, padding: 0 }}>
              <img
                src={data.courseObj.photoName}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="coursepic"
              />
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <p class="card-text">
                  <small class="text-body-secondary">
                    {data.courseObj.mode}
                  </small>
                </p>
                <h5 class="card-title">{data.courseObj.title}</h5>
                <p class="card-text">{data.courseObj.description}</p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    {data.courseObj.difficulty}
                  </small>
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
