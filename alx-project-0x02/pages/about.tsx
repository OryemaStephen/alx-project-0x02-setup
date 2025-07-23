import Button from "@/components/common/Button";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full h-screen flex-col flex items-center justify-center">
      <h1>About Page</h1>
      <div className="my-5 gap-4">
        <Button size="small" shape="rounded-sm">
          <span>Small Button</span>
        </Button>
        <Button size="medium" shape="rounded-md">
          <span>Medium Button</span>
        </Button>
        <Button size="large" shape="rounded-full">
          <span>Large Button</span>
        </Button>
      </div>
    </div>
  );
};

export default About;
