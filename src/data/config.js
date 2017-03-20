const project = {
  title: 'Project Title',
  icon: '../svgs/atlas-sm-logo.svg'
}

project.description = `${project.title} description`;

export {project};

export const server = {
  url: 'http://localhost:8081',
  postRequest: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}
