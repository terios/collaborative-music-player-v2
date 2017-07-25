import React from 'react'
import { Link } from 'react-router-dom';

import { PageTemplate, Header } from 'components'
const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <div>this is Home page</div>
      <Link to="/contact">contact</Link>
    </PageTemplate>
  )
}

export default HomePage;
