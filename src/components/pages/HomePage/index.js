// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Hero, Footer } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <div>
        test
      </div>
    </PageTemplate>
  )
}

export default HomePage
