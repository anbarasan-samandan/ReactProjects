const courses = [
  {
    id: 1,
    title: "Azure Fundamentals",
    slug: "https://www.udemy.com/course/az900-azure/",
    authorId: 2,
    category: "Azure",
  },
  {
    id: 2,
    title: "Azure Architecture Technologies",
    slug: "https://www.udemy.com/course/70534-azure/",
    authorId: 2,
    category: "Azure",
  },
  {
    id: 3,
    title: "AWS Solution Architect",
    slug:
      "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/",
    authorId: 3,
    category: "AWS",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug:
      "https://app.pluralsight.com/library/courses/javascript-development-environment/javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug:
      "https://app.pluralsight.com/library/courses/react-redux-react-router-es6",
    authorId: 1,
    category: "React",
  },
  {
    id: 6,
    title: "How to become an outstanding solution architect",
    slug:
      "https://www.udemy.com/course/how-to-become-an-outstanding-solution-architect/",
    authorId: 4,
    category: "Architecture",
  },
  {
    id: 7,
    title: "Advanced React.js",
    slug: "https://app.pluralsight.com/library/courses/reactjs-advanced/",
    authorId: 6,
    category: "React",
  },
  {
    id: 8,
    title: "React Native Practical Guide",
    slug: "https://www.udemy.com/course/react-native-the-practical-guide/",
    authorId: 5,
    category: "React Native",
  },
  {
    id: 9,
    title: "Web Application Hacking and Pentration Testing",
    slug:
      "https://www.udemy.com/course/complete-web-application-hacking-penetration-testing",
    authorId: 7,
    category: "Testing",
  },
  {
    id: 10,
    title: "Advanced Node JS",
    slug: "https://app.pluralsight.com/library/courses/nodejs-advanced/",
    authorId: 6,
    category: "Node JS",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Duffy" },
  { id: 3, name: "Stephane Maarek" },
  { id: 4, name: "Mark Farragher" },
  { id: 5, name: "Maximilian" },
  { id: 6, name: "Samer Buna" },
  { id: 7, name: "Muharrem" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  slug: "",
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
