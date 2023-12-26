/* eslint-disable no-unused-vars */
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1...',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2...',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3...',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4...',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description for Project 5...',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Description for Project 6...',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const ProjectSection = () => {
  return (
    <section id='projects' className="bg-gray-100 py-12">
      <div className="max-w-screen-xl min-h-screen mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg p-4">
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {/* Tambahkan elemen lain yang dibutuhkan untuk proyek, seperti tombol "Detail" atau informasi tambahan */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
