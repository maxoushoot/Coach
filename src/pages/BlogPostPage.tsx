import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold">Article non trouvé</h2>
      </div>
    );
  }

  return (
    <div className="animate-enter py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString('fr-FR')} - {post.author}
        </p>
        <img src={post.image} alt={post.title} className="mb-8 rounded-md" />
        <div className="space-y-4 text-gray-700">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
