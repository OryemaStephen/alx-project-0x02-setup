export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onAddCard: (card: CardProps) => void;
  onClose: () => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  className?: string;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface PostPageProps {
  posts: PostProps[];
}

interface GeoProps{
  lat: string;
  lng: string;
}

interface AddressProps{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;

}

interface CompanyProps{
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address : AddressProps;
  phone: string;
  website: string;
  company: CompanyProps

}

export interface UsersPageProps {
  users: UserProps[];
}

