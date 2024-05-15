import axios from 'axios';

export const getAllPosts = async (searchKeyword = '', page = 1, limit = 10) => {
	try {
		const { data, headers } = await axios.get(
      `https://backend-blog-1op1.onrender.com/api/posts?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
		return {data, headers};
	} catch (error) {
		if (error.response && error.response.data.message)
			throw new Error(error.response.data.message);
		throw new Error(error.message);
	}
};

export const getSinglePost = async ({ slug }) => {
	try {
		const { data } = await axios.get(
      `https://backend-blog-1op1.onrender.com/api/posts/${slug}`
    );
		return data;
	} catch (error) {
		if (error.response && error.response.data.message)
			throw new Error(error.response.data.message);
		throw new Error(error.message);
	}
};

export const deletePost = async ({ slug, token }) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.delete(
      `https://backend-blog-1op1.onrender.com/api/posts/${slug}`,
      config
    );
		return data;
	} catch (error) {
		if (error.response && error.response.data.message)
			throw new Error(error.response.data.message);
		throw new Error(error.message);
	}
};

export const updatePost = async ({ updatedData, slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `https://backend-blog-1op1.onrender.com/api/posts/${slug}`,
      updatedData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createPost = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `https://backend-blog-1op1.onrender.com/api/posts`,
      {},
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};