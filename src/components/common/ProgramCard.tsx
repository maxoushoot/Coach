import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  sessions: number;
  onDelete?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  sessions,
  onDelete,
}) => {
  return (
    <div className="card p-4 flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{sessions} séances</span>
        {onDelete && (
          <button onClick={onDelete} className="btn-ghost text-sm">
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
