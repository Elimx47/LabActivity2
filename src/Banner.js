function Banner() {
  return (
    <div className="blue">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="display-6 fw-bold">Courses</h4>
            <p className="py-1">
              Explore the world of tech or start building your career.
            </p>
            <p>
              Learn topics like networking, cybersecurity, and programming
              through courses backed by learning science and Cisco expertise –
              and prepare for certifications and job-ready skills that will set
              you up to work anywhere.
            </p>
            <button className="btn btn-light rounded-pill mt-3S" type="button">
              View Course Catalog
            </button>
          </div>

          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NiZWvLqGL3s?si=I1pwNKC-AkJK1_Wk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
