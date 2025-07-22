import Card from "@/components/common/Card";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center gap-6 justify-center">
      <Card
        title="Welcome Card"
        content="This is a welcome message for our new users. Enjoy exploring our platform!"
      />
      <Card
        title="Features Overview"
        content="Discover amazing features that make your experience seamless and enjoyable."
      />
      <Card
        title="Get Started"
        content="Join our community today and start your journey with us!"
      />
    </div>
  );
};

export default Home;
