import React from 'react';
import { ITool } from '@/types';
import { ToolCard } from './ToolCard';

type Props = {
  tools: ITool[];
}
const FreeToolsSection = ({tools}: Props) => {

    return (
        <div className="w-full min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002047] mb-4">
                         Free <span className='text-[#64D3F8]'>Tools</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Helpful calculators and tools to simplify your business operations.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <ToolCard
                            key={tool._id}
                            title={tool.title}
                            description={tool.description}
                            icon={tool.icon}
                            status={tool.status}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreeToolsSection;