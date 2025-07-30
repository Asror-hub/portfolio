import React from 'react';
import Layout from '../components/Layout/Layout';
// ... existing imports ...

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        {/* ... existing hero content ... */}
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        {/* ... existing services content ... */}
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-white">
        {/* ... existing projects content ... */}
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-50">
        {/* ... existing team content ... */}
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        {/* ... existing stats content ... */}
      </section>
    </Layout>
  );
};

export default Home; 