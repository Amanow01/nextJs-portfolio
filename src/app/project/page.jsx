import ProjectCart from "@/page/ProjectCart";
import "./project.css";
import { info } from "./info";
const project = () => {
  return (
    <div>
      <h1 className="project-title">Project</h1>
      <div className="cart-grid">
        {info.map((infoMap) => {
          return (
            <ProjectCart
              key={infoMap.id}
              title={infoMap.title}
              url={infoMap.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default project;
