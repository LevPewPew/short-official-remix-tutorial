import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  // TODO infer the slug type from prisma model/client
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
}
