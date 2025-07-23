/* eslint-disable @typescript-eslint/no-explicit-any */
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps, UsersPageProps } from "@/interfaces";

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="w-full min-h-[80vh]">
      <Header />
      <h1 className="my-4 text-2xl font-bold">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  let users: UserProps[] = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    users = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      website: user.website,
      company: user.company,
    }));
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      users,
    },
  };
};

export default Users;
