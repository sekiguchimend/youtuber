import { client } from "./apis";

export const getMicroCMSData = async (contentId= string) => {
  const res = await client.getList({
    endpoint: contentId,
    queries: {
      limit: 100,
    },
  })
  return res
}
export async function getMicroCMSCategoryData(
    contentId,
    offsetNumber = 0,
    limitNumber = 100,
    categoryId,
  ) {
    const res = await client.getList({
      endpoint: contentId,
      queries: {
        offset: offsetNumber,
        limit: limitNumber,
        filters: categoryId ? `category[equals]${categoryId}` : '',
      },
    })
    return res
  }