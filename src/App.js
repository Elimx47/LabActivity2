import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavCisco from "./NavCisco";
import Page from "./Page";
import Banner from "./Banner";
import Filter from "./Filter";
import Courses from "./courses";
import { courseData } from "./data";

function App() {
  const mode = "Instructor-led";
  return (
    <div>
      <NavCisco></NavCisco>
      <div className="pages">
        <Page></Page>
      </div>
      <Banner></Banner>
      <Filter></Filter>
      <div className="courses-container">
        {courseData.map((course) =>
          course.mode === mode ? (
            <Courses courseObj={course} key={course.title} />
          ) : null,
        )}
      </div>
    </div>
  );
}

export default App;
