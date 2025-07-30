import React from "react";
import { FaHistory, FaUsers, FaLightbulb } from "react-icons/fa";
import aboutImg from "../../assets/dora-about.png";

const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div data-aos="fade-right">
            <img
              src={aboutImg}
              alt="Doraemon"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Soltech</h2>
              <p className="text-gray-500 mb-6">
                Soltech is a Japanese manga series written and illustrated by Fujiko F. Fujio. The series has also been adapted into a successful anime series and media franchise.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaHistory className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our History</h3>
                  <p className="text-gray-500">
                    First published in 1969, Doraemon has become one of the most beloved manga series worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaUsers className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-500">
                    To bring joy and inspiration to fans of all ages through the adventures of Doraemon and his friends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaLightbulb className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-500">
                    To continue creating innovative content that entertains and educates future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 