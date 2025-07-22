export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onAddCard: (card:CardProps)=> void;
    onClose:()=> void;
}