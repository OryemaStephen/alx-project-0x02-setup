import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: "Welcome Card",
      content:
        "This is a welcome message for our new users. Enjoy exploring our platform!",
    },
    {
      title: "Features Overview",
      content:
        "Discover amazing features that make your experience seamless and enjoyable.",
    },
    {
      title: "Get Started",
      content: "Join our community today and start your journey with us!",
    },
  ]);

  const handleAddCard = (newCard: CardProps) => {
    setCards((prevCard) => [...prevCard, newCard]);
  };

  return (
    <div className="w-full min-h-[80vh]">
      <div className="mb-4 flex justify-end gap-5">
        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/60"
          onClick={() => setOpenModal(true)}
        >
          Add Card
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} content={card.content} />
        ))}
      </div>
      {openModal && (
        <PostModal
          onAddCard={handleAddCard}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
