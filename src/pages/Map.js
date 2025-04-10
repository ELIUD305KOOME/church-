import React  from 'react';

const Map = () => {
 
  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/church-inside.jpg')",
        backgroundAttachment: 'fixed', // Ensures the background image stays fixed
      }}
    >
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      <div className="max-w-lg mx-auto p-6 bg-transparent border border-purple-200  shadow-lg text-center">
    <h2 className="text-sm font-bold text-white relative mb-4">The Impact of Christ Worship Center International</h2>
    <p className="text-xs text-gray-50 mb-6">
        We are more than a church — we are a vibrant community rooted in love,
        worship, and outreach. With hearts wide open and arms extended, we welcome all people
        into a life-transforming encounter with Jesus Christ. Our vision is to see lives changed,
        hope restored, and communities renewed through the power of God's presence and the warmth
        of family.
    </p>
   </div>

  </div>
  );
};

export default Map;