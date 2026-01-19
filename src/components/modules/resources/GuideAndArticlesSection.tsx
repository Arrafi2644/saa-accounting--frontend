import React from 'react';
import { ArticleCard } from './ArticleCard';
import { IArticle } from '@/types';

type Props = {
  articles: IArticle[];
}
const GuidesArticlesSection = ({articles}: Props) => {

    return (
        <div className="w-full min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002047] mb-4">
                        Guides & <span className='text-[#4D5CAC]'>Articles</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        In-depth resources to help you understand NZ tax and accounting requirements.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={article._id}
                            title={article.title}
                            description={article.description}
                            category={article.category}
                            icon={article.icon}
                            readTime={article.readTime}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuidesArticlesSection;