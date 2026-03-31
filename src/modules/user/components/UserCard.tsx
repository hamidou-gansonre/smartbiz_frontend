export function UserCard({ user }: { user: { name: string; email: string } }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
