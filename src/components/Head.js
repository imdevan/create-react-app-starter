import Helmet from 'react-helmet';
import React from 'react';
import {project} from '../data/config';

const Head = React.createClass({
  render() {
    return (
      <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}}
          title={project.title}
          defaultTitle={project.title}
          titleAttributes={{itemprop: 'name', lang: 'en'}}
          meta={[
              {name: 'theme-color', content: '#000000'},
              {name: 'description', content: project.description},
              {property: 'og:type', content: 'application'},
              {name: 'viewport', content: 'width=device-width, initial-scale=1'}
          ]}
          link={[
              {rel: 'apple-touch-icon', href: project.icon},
              {rel: 'apple-touch-icon', sizes: '72x72', href: project.icon}
          ]}
      />
    )
  }
});

export default Head;
