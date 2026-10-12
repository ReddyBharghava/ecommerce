import React from "react";

const AboutSection = () => {
  return (
    <div className=" flex items-center justify-center p-8">
      <div className="max-w-9xl  rounded-lg p-8">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Swoo – #1 Online Marketplace for technology
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum
          sagittis leo vitae tempor. Suspendisse in dolor odio. Sed aliquet ac
          lacus ut luctus. Fusce mattis sollicitudin sem, id lobortis nibh
          ullamcorper a. Donec vehicula dolor et arcu consequat mattis. Fusce
          mattis nec nulla in scelerisque.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit.
          Curabitur non euismod dui. Proin eget justo eu erat luctus placerat.
          Nam rhoncus ipsum ac enim faucibus, at consequat ante maximus.
          Vestibulum at nibh ac odio ultrices varius. Duis vitae libero mollis,
          lobortis ligula id, varius erat. Sed id odio dictum, laoreet enim ac,
          commodo magna. Praesent sodales porttitor maximus. Sed a lacus felis.
          Maecenas consectetur consequat orci scelerisque malesuada. Fusce vel
          orci eu tortor consequat mattis quis at ante. Class aptent taciti
          sociosqu ad litora torquent per conubi.
        </p>

        {/* View All Link */}
        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
