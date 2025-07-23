import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh]">
      <Header />
      <h1 className="my-4">About Page</h1>
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
