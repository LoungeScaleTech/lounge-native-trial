const API_BASE_URL = 'http://localhost:3004';

export const fetchPost = async (postId: string) => {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  return response.json();
};

