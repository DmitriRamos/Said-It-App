import client from "./prismadb";

export async function getUsername(data: any) {
  const user = await client.user.findUnique({
    where: {
      id: `${data.userId}`,
    },
  });
  return user?.username;
}
