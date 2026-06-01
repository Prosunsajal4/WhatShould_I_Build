'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SKILLS_LIST } from '@/lib/constants';

export default function GeneratorPage() {
  const [skills, setSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState('intermediate');
  const [careerGoal, setCareerGoal] = useState('portfolio');
  const [interests, setInterests] = useState('');
  const [numberOfIdeas, setNumberOfIdeas] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/projects/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skills,
          experienceLevel,
          careerGoal,
          interests,
          numberOfIdeas,
        }),
      });
      const data = await response.json();
      console.log('Generated ideas:', data.ideas);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Generate Project Ideas
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Tell us about yourself and get personalized project suggestions
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8 rounded-lg bg-white p-8 dark:bg-slate-800">
          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Skills
            </label>
            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
              {SKILLS_LIST.slice(0, 12).map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() =>
                    setSkills((prev) =>
                      prev.includes(skill)
                        ? prev.filter((s) => s !== skill)
                        : [...prev, skill]
                    )
                  }
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    skills.includes(skill)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Experience Level
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Career Goal */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Career Goal
            </label>
            <select
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
              <option value="portfolio">Portfolio Building</option>
              <option value="job">Getting a Job</option>
              <option value="freelance">Freelance Work</option>
              <option value="startup">Startup Idea</option>
              <option value="learning">Learning</option>
            </select>
          </div>

          {/* Interests */}
          <Input
            label="Interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI, mobile apps, blockchain"
            required
          />

          {/* Number of Ideas */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
              Number of Ideas: {numberOfIdeas}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={numberOfIdeas}
              onChange={(e) => setNumberOfIdeas(parseInt(e.target.value))}
              className="mt-2 w-full"
            />
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full"
            size="lg"
          >
            Generate Ideas
          </Button>
        </form>
      </div>
    </div>
  );
}
