import '../styles/Projects.css';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.jpg';
import project1 from '../assets/projrct1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
function Projects() {
  const projects = [
    {
      image: project1,
      title: 'Hostel Finder Website',
      description: 'Là 1 trang web giúp dễ dàng tìm kiếm các nhà trọ đồng thời giúp chủ trọ có thể số hóa, quản lí nhà trọ dễ dàng thông minh',
      link: 'https://github.com/Room-Finder-G6',
    },
    {
      image: project2,

      title: 'Bitcoin Chart',
      description: 'Có thể theo dõi chính xác giao động hiện tại trên sàn bitcoin',
      link: 'https://vercel.com/syxhieus-projects/bitcoin-chart',
    },
    {
      image: project3,
      title: 'BookStore',
      description: 'Website bán sách',
      link: 'https://github.com/tticasso/troocbookstore.git',
    },
  ];

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">

        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
